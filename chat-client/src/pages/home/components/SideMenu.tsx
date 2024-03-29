import { Button } from "primereact/button";
import GroupItem from "./GroupItem";

export default function SideMenu() {
  return (
    <div className="flex flex-col ml-2 p-3">
      <Button
        label="Create a new Chat"
        icon="pi pi-plus"
        style={{
          width: "100%",
        }}
      />
      <div className="flex flex-col gap-3 mt-4">
        <GroupItem name="la gang del bosco" lastMessage="Fra ci siete?" />
        <GroupItem name="la gang del bosco" lastMessage="Fra ci siete?" />
      </div>
    </div>
  );
}
