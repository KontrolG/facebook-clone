import React from "react";
import CardWithTitle from "../cards/CardWithTitle";
import PostContentForm from "./PostContentForm";
import ButtonPrimary from "../ButtonPrimary";

const PostCreator = () => (
  <CardWithTitle title="Crear publicación">
    <PostContentForm />
    <footer>
      <ButtonPrimary isDisabled>Publicar</ButtonPrimary>
    </footer>
  </CardWithTitle>
);

export default PostCreator;
