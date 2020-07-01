import React, { useState, useEffect } from "react";
import { Consumer } from "../../context";
import ProfilePhotoMiniature from "../ProfilePhotoMiniature";
import TextareaWithLineBreaks from "./TextareaWithLineBreaks";

const ProfilePhoto = () => (
  <Consumer>{renderProfileMiniatureFromContextUser}</Consumer>
);

const renderProfileMiniatureFromContextUser = ({ user }) => (
  <ProfilePhotoMiniature userPhotoSrc={user.photo} />
);

const PostContentInput = ({ inputRef, setText }) => {
  const changeText = event => {
    const { value } = event.target;
    setText(value.join("\r\n"));
  };

  return (
    <figure className="post-content-wrapper">
      <ProfilePhoto />
      <figcaption>
        <TextareaWithLineBreaks
          title="Escribir publicación"
          placeholder="¿Qué estás pensando, Georgelyz?"
          onChange={changeText}
          ref={inputRef}
        />
      </figcaption>
    </figure>
  );
};

export default PostContentInput;
