import React, { useState, useEffect, useMemo } from "react";
import ProfilePhotoMiniature from "../ProfilePhotoMiniature";
import TextareaWithLineBreaks from "./TextareaWithLineBreaks";

const PostContentInput = () => {
  const [text, setText] = useState("");
  useEffect(() => console.log(text));

  const changeText = event => {
    const { value } = event.target;
    setText(value.join("\r\n"));
  };

  return (
    <figure className="post-content-wrapper">
      <ProfilePhotoMiniature />
      <figcaption>
        <TextareaWithLineBreaks
          title="Escribir publicación"
          placeholder="¿Qué estás pensando, Georgelyz?"
          onChange={changeText}
        />
      </figcaption>
    </figure>
  );
};

export default PostContentInput;
