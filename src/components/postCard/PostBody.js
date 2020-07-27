import React, { Fragment } from "react";
import MediaItems from "./MediaItems";

const PostBody = ({ text, mediaFiles }) => {
  const hasText = text !== "";
  const textParagraph = hasText ? <p>{text}</p> : null;
  const mediaFilesEntries = Object.entries(mediaFiles);
  const hasMediaFilesEntries = mediaFilesEntries.length > 0;
  const mediaItems = hasMediaFilesEntries ? (
    <MediaItems items={mediaFilesEntries} />
  ) : null;

  return (
    <article className="post-body">
      {textParagraph}
      {mediaItems}
    </article>
  );
};

PostBody.defaultProps = {
  mediaFiles: {}
};

export default PostBody;
