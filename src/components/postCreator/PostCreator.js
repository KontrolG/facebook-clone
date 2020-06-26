import React, { useState, useEffect } from "react";
import CardWithTitle from "../cards/CardWithTitle";
import PostContentForm from "./PostContentForm";
import ButtonPrimary from "../ButtonPrimary";

const PostCreator = () => {
  const [text, setText] = useState("");
  console.log(text);
  const [mediaFiles, setMediaFiles] = useState([]);
  console.log(mediaFiles);

  const isNotDone = ({ uploadProgress }) => uploadProgress < 100;
  const isUploadingFiles = mediaFiles.length > 0 && mediaFiles.some(isNotDone);
  const canSendThePost = text !== "" && !isUploadingFiles;

  return (
    <CardWithTitle title="Crear publicación">
      <PostContentForm {...{ text, setText, mediaFiles, setMediaFiles }} />
      <footer>
        <ButtonPrimary isDisabled={!canSendThePost}>Publicar</ButtonPrimary>
      </footer>
    </CardWithTitle>
  );
};

export default PostCreator;
