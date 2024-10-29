import Chat from "../../chat/Chat";
import SideMenu from "./components/SideMenu";

export function HomePage() {
  return (
    <div className="h-full w-full">
      <div className="flex justify-center items-center gap-2 h-16 bg-slate-900 mb-3">
        <h2 className="text-xl font-bold">Chattly:</h2>
        <div>chat with broskok</div>
      </div>
      <div className="grid grid-cols-8 gap-5 h-full pb-4 mb-2 max-h-[90%]">
        <div className="col-span-2 ">
          <SideMenu />
        </div>
        <div className="col-span-6 justify-center">
          <Chat
            chatConfig={{
              chatId: "chatId",
              chatName: "chattly",
              initMessage: "Ciao parla pure :)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
