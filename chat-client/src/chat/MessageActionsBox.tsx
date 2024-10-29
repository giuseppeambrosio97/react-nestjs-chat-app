import { useState } from "react";
import { Button } from "primereact/button";

type MessageActionsBoxProps = {
  content: string;
};

export default function MessageActionsBox(props: Readonly<MessageActionsBoxProps>) {
  const [feedbackId, setFeedbackId] = useState("");

  const [likeClicked, setLikeClicked] = useState(false);
  const [dislikeClicked, setDislikeClicked] = useState(false);
  const [copyToClipboardFlg, setCopyToClipboardFlg] = useState(false);

  const [showFeedbackPopUp, setShowFeedbackPopUp] = useState(false);

  const handleLikeClick = async () => {
    setLikeClicked(true);
    setDislikeClicked(false);
    setShowFeedbackPopUp(!showFeedbackPopUp);
  };

  const handleDislikeClick = async () => {
    setLikeClicked(false);
    setDislikeClicked(true);
    setShowFeedbackPopUp(!showFeedbackPopUp);
  };

  const copyToClipboard = async (txt: string) => {
    setCopyToClipboardFlg(true);
    navigator.clipboard.writeText(txt);
    await new Promise(() =>
      setTimeout(() => setCopyToClipboardFlg(false), 1500)
    );
  };

  return (
    <div className="flex w-full gap-8 justify-end">
      <div className="flex flex-row gap-2">
        <Button
          icon="pi pi-copy"
          rounded
          onClick={() => copyToClipboard(props.content)}
          aria-label="Send Message"
        />
        <Button
          icon="pi pi-thumbs-up"
          rounded
          onClick={handleLikeClick}
          aria-label="Handle Dislike"
        />
        <Button
          icon="pi pi-thumbs-down"
          rounded
          onClick={handleDislikeClick}
          aria-label="Handle Dislike"
        />
      </div>
    </div>
  );
}
