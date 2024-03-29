import { Divider } from "primereact/divider";
import Chat from "../../chat/Chat";
import SideMenu from "./components/SideMenu";

export function HomePage() {
  return (
    <div className="h-full w-full">
      <div className="flex justify-center items-center gap-2 h-16 bg-slate-900 mb-3">
        <h2 className="text-xl font-bold">Chattly:</h2>
        <div>chat with broskok</div>
      </div>
      <div className="grid grid-cols-7 gap-5">
        <div className="col-span-1 ">
          <SideMenu />
        </div>
        <div className="col-span-6 justify-center">
          <div className="flex">
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
    </div>
  );
}
