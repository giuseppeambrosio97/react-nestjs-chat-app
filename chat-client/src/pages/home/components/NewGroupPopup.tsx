import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { FileUpload } from "primereact/fileupload";

type TNewGroupPopupProps = {
  visible: boolean;
  onHide: () => void;
};

export default function NewGroupPopup(props: TNewGroupPopupProps) {
  const footer = (
    <>
      <Button
        label="Cancel"
        icon="pi pi-times"
        onClick={() => {
          props.onHide();
        }}
      />
      <Button
        label="Create Group"
        icon="pi pi-check"
        onClick={() => {
          props.onHide();
        }}
      />
    </>
  );
  return (
    <Dialog
      header="Create a new Group with your brosky"
      visible={props.visible}
      style={{ width: "50rem" }}
      onHide={() => {
        props.onHide();
      }}
      pt={{
        mask: { className: "bg-black bg-opacity-70" },
        headerIcons: { className: "hidden" },
      }}
      footer={footer}
    >
      <FileUpload />

    </Dialog>
  );
}
