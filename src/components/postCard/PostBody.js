import React, { Fragment } from "react";

const PostBody = ({ text }) => {
  const mediaItems = (
    <li>
      <img src="img/test.jpg" />
    </li>
  );
  return (
    <article className="post-body">
      <p>{text}</p>
      <ul>
        {mediaItems}
        {mediaItems}
        {mediaItems}
        {mediaItems}
      </ul>
    </article>
  );
};

export default PostBody;
