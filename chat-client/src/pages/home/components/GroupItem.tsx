import { Avatar } from "primereact/avatar";

export type GroupItemProps = {
  name: string;
  icon?: string;
  lastMessage: string;
};

const getGroupLabel = (name: string) => {
  const words = name.split(" ");
  if (words.length === 0) {
    return "";
  }
  const firstLetter = words[0][0].toUpperCase();
  if (words.length === 1) {
    return firstLetter;
  }
  const secondLetter = words[1][0].toUpperCase();
  return firstLetter + secondLetter;
};

export default function GroupItem(props: GroupItemProps) {
  return (
      <div className="flex gap-2 ">
        <Avatar
          label={getGroupLabel(props.name)}
          size="normal"
          style={{
            backgroundColor: "#2196F3",
            color: "#ffffff",
            width: "2.5rem",
            height: "2rem",
          }}
          shape="square"
        />
        <div className="flex flex-col w-full gap-2">
          <div className="font-bold text-start">{props.name}</div>
          <div className="text-sm text-end">{props.lastMessage}</div>
        </div>
      </div>
  );
}
