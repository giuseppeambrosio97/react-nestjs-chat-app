import { useSelector } from "react-redux";
import MessageActionsBox from "./MessageActionsBox";
import { TChatMessage } from "./types";
import { RootState } from "../store/store";

type ChatMessageProps = {
    message: TChatMessage;
    showActionsBox?: boolean;
}

function ChatMessage(props : Readonly<ChatMessageProps>) {
  const username = useSelector((state: RootState) => state.auth.username);
  const isMe = props.message.author === username;
  const authorLabel = isMe ? "You" : username;

  return (
    <div className={`flex flex-col gap-1 mr-5 ${isMe ? "items-end" : "items-start"}`}>
      <span>{authorLabel}:</span>
      <span
        className={`break-all flex flex-col gap-2 p-4 border border-gray-500 rounded-md max-w-[85%] min-w-fit ${isMe ? "text-end" : "text-start"}`}
      >
        {props.message.content}
        {props.showActionsBox && (
          <MessageActionsBox content={props.message.content} />
        )}
      </span>
    </div>
  );
}

export default ChatMessage