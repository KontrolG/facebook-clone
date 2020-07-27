import React from "react";
import CardWithHeader from "../cards/CardWithHeader";
import PostHeader from "./PostHeader";
import PostBody from "./PostBody";

const PostCard = ({ text, mediaFiles, user, creationDate }) => {
  const header = <PostHeader {...{ user, creationDate }} />;
  return (
    <CardWithHeader header={header}>
      <PostBody {...{ text, mediaFiles }} />
    </CardWithHeader>
  );
};

export default PostCard;
