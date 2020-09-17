import React from "react";
import CardWithTitle from "../cards/CardWithTitle";
import PostContentForm from "./PostContentForm";
import Button from "../Button";
import { PostCreatorProvider, PostCreatorConsumer } from "./context";

const PostCreator = () => {
  return (
    <PostCreatorProvider>
      <PostCreatorConsumer>
        {({ text, mediaFiles }) => {
          const formId = "post-creator-form";
          const textIsFilled = text.trim() !== "";
          const hasMediaFiles = mediaFiles.length > 0;
          const canSendThePost = textIsFilled || hasMediaFiles;

          return (
            <CardWithTitle title="Crear publicación">
              <PostContentForm
                {...{
                  formId,
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
        }}
      </PostCreatorConsumer>
    </PostCreatorProvider>
  );
};

export default PostCreator;
