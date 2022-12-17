import React, { Fragment } from "react";
import MediaItems from "./MediaItems";

const lineBreak = "\r\n";

const toTextWithLineBreak = (text, lineIndex, lines) => {
  const isLastLine = lineIndex === lines.length - 1;

  return (
    <Fragment key={lineIndex}>
      {text}
      {!isLastLine ? <br /> : null}
    </Fragment>
  );
};

const getMultiLineText = text => {
  const textLines = text.split(lineBreak);
  return textLines.map(toTextWithLineBreak);
};

const PostBody = ({ text, mediaFiles }) => {
  const hasText = text !== "";
  const textParagraph = hasText ? (
    <p>{text.includes(lineBreak) ? getMultiLineText(text) : text}</p>
  ) : null;

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
