import { Button } from "primereact/button";
import GroupItem from "./GroupItem";
import { useState } from "react";
import NewGroupPopup from "./NewGroupPopup";

export default function SideMenu() {
  const [newGroupVisible, setNewGroupVisible] = useState(false);
  return (
    <div className="flex flex-col ml-2 p-3">
      <Button
        label="Create a new Group"
        className="shadow-xl"
        icon="pi pi-plus"
        style={{
          width: "100%",
        }}
        onClick={() => {
          setNewGroupVisible(true);
        }}
      />
      <div className="flex flex-col gap-3 mt-7">
        <GroupItem name="la gang del bosco" lastMessage="Fra ci siete?" />
        <GroupItem name="la gang del bosco" lastMessage="Fra ci siete?" />
      </div>
      <NewGroupPopup
        visible={newGroupVisible}
        onHide={() => setNewGroupVisible(false)}
      />
    </div>
  );
}
