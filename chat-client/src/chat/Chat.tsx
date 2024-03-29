import { useState, useRef, useEffect } from "react";
import { IChatConfig, TChatMessage } from "./types";
import { IS_TYPING_TIMEOUT, SessionStorageItems } from "./constants";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import ChatMessage from "./ChatMessage";
import { Socket, io } from "socket.io-client";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

type ChatProps = {
  chatConfig: IChatConfig;
};

const SOCKET_TOPIC_NAME = "message";
const SOCKET_URL = "http://localhost:8001";

function Chat(props: Readonly<ChatProps>) {
  const username = useSelector((state: RootState) => state.auth.username);
  const contextChatHistory = `${props.chatConfig.chatId}-${SessionStorageItems.CHAT_HISTORY}`;
  const [chatHistory, setChatHistory] = useState<TChatMessage[]>(() => {
    return JSON.parse(sessionStorage.getItem(contextChatHistory) ?? "[]");
  });
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef(Object());
  const [isTyping, setIsTyping] = useState(false);
  const [socket, setSocket] = useState<Socket>();

  const emit = (message: string) => {
    socket?.emit(SOCKET_TOPIC_NAME, {
      author: username,
      content: message,
    });
  };

  useEffect(() => {
    const newSocket = io(SOCKET_URL);
    setSocket(newSocket);
  }, [setSocket]);

  const handleInputChange = (e: any) => {
    setInput(e.target.value);
    setIsTyping(true);
  };

  const messageListener = (message: TChatMessage) => {
    setChatHistory((prevMessages: TChatMessage[]) => [
      ...prevMessages,
      message,
    ]);
  };

  useEffect(() => {
    socket?.on(SOCKET_TOPIC_NAME, messageListener);
    return () => {
      socket?.off(SOCKET_TOPIC_NAME, messageListener);
    };
  }, [messageListener]);

  // get messages/save messages from local storage
  useEffect(() => {
    sessionStorage.setItem(contextChatHistory, JSON.stringify(chatHistory));
  });

  // Scroll to the bottom of the chat container whenever a new message is added
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory, input]);

  useEffect(() => {
    const typingTimeout = setTimeout(() => {
      setIsTyping(false);
    }, IS_TYPING_TIMEOUT);

    return () => clearTimeout(typingTimeout);
  }, [input]);

  const sendMessage = async (query: string) => {
    setIsLoading(true);

    emit(query);

    setIsLoading(false);
    setInput("");
  };

  const handleSubmit = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter" || input === "") return;
    await sendMessage(input);
  };

  const handleOnClickSendButton = async () => {
    if (input === "") return;
    await sendMessage(input);
  };

  return (
    <div className="flex flex-col grow h-full w-full">
      <div className="flex flex-col gap-3 p-1 max-h-full h-full">
        <div className="flex rounded-lg m-1 max-h-full grow">
          <div
            className="flex grow flex-col gap-3 max-w-full overflow-y-scroll"
            ref={chatContainerRef}
          >
            {/* Render user input and chat responses */}
            {chatHistory.map((message: TChatMessage, index: number) => (
              <ChatMessage
                key={index}
                message={message}
                showActionsBox={message.author !== username}
              />
            ))}
          </div>
        </div>
        <div className="flex">
          {isTyping && (
            <div className="text-gray-500 flex flex-start ml-3">
              <span>you're typing</span>
            </div>
          )}
        </div>
        <div className="flex gap-2 text-base sticky mb-3 mr-2">
          <div className="flex flex-col grow gap-2">
            <InputText
              style={{
                padding: "12px",
                width: "100%",
                height: "100%",
              }}
              value={input}
              onChange={handleInputChange}
              disabled={isLoading}
              onKeyDown={handleSubmit}
            />
          </div>

          <Button
            icon="pi pi-send"
            rounded
            onClick={handleOnClickSendButton}
            aria-label="Send Message"
          />
          <Button
            icon="pi pi-trash"
            rounded
            onClick={() => setChatHistory([])}
            aria-label="Delete ChatHistory"
          />
        </div>
      </div>
    </div>
  );
}

export default Chat;
