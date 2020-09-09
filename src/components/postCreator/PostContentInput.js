import React, { useState, useEffect } from "react";
import { useUserContext } from "../../contexts/UserContext";
import ProfilePhotoMiniature from "../ProfilePhotoMiniature";
import TextareaWithLineBreaks from "./TextareaWithLineBreaks";

const PostContentInput = ({ inputRef, setText }) => {
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
