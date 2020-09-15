import React, { useState, useEffect } from "react";
import CardWithTitle from "../cards/CardWithTitle";
import PostContentForm from "./PostContentForm";
import Button from "../Button";

const PostCreator = () => {
  const [text, setText] = useState("");
  const [mediaFiles, setMediaFiles] = useState([]);

  const formId = "post-creator-form";

  const textIsFilled = text.trim() !== "";
  const hasMediaFiles = mediaFiles.length > 0;
  const canSendThePost = textIsFilled || hasMediaFiles;

  return (
    <CardWithTitle title="Crear publicación">
      <PostContentForm
        {...{
          formId,
          text,
          setText,
          mediaFiles,
          setMediaFiles,
          canSendThePost
        }}
      />
      <footer>
        <Button
          type="submit"
          primary
          fullWidth
          formId={formId}
          isDisabled={!canSendThePost}
        >
          Publicar
        </Button>
      </footer>
    </CardWithTitle>
  );
};

export default PostCreator;
