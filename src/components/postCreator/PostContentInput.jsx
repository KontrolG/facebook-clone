import React from "react";
import { useUserContext } from "../../contexts/UserContext";
import ProfilePhotoMiniature from "../ProfilePhotoMiniature";
import TextareaWithLineBreaks from "./TextareaWithLineBreaks";
import { usePostCreatorContext } from "./context";

const PostContentInput = ({ inputRef }) => {
  const { setText } = usePostCreatorContext();

  const changeText = event => {
    const { value } = event.target;
    setText(value.join("\r\n"));
  };

  const { user } = useUserContext();

  return (
    <figure className="post-content-wrapper">
      <ProfilePhotoMiniature userPhotoSrc={user.photo} />
      <figcaption>
        <TextareaWithLineBreaks
          title="Escribir publicación"
          placeholder={`¿Qué estás pensando, ${user.name.first}?`}
          onChange={changeText}
          ref={inputRef}
        />
      </figcaption>
    </figure>
  );
};

export default PostContentInput;
