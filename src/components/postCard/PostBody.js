import React, { Fragment } from "react";
import MediaItems from "./MediaItems";

const PostBody = ({ text }) => {
  const textParagraph = text !== "" ? <p>{text}</p> : null;

  return (
    <article className="post-body">
      {textParagraph}
      <MediaItems
        items={[
          "img/test.jpg",
          "img/test.jpg",
          "img/test.jpg",
          "img/test.jpg",
          "img/test.jpg"
        ]}
      />
    </article>
  );
};

export default PostBody;
