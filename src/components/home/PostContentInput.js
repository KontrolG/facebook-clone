import React, { useState, useEffect } from "react";
import ProfilePhotoMiniature from "./ProfilePhotoMiniature";

const PostContentInput = () => {
  const [text, setText] = useState("");
  useEffect(() => console.log(text));

  const changeText = event => {
    const { value } = event.target;
    setText(value);
  };

  const getRowsFromTextLength = rowLength =>
    Math.round(text.length / rowLength);
  console.log(getRowsFromTextLength(46));
  return (
    <figure className="post-content-wrapper">
      <ProfilePhotoMiniature />
      <figcaption>
        <textarea
          spellCheck
          value={text}
          onChange={changeText}
          rows={getRowsFromTextLength(46)}
          placeholder="¿Qué estás pensando, Georgelyz?"
        />
      </figcaption>
    </figure>
  );
};

export default PostContentInput;
