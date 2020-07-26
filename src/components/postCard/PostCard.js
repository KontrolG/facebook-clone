import React from "react";
import CardWithHeader from "../cards/CardWithHeader";
import PostHeader from "./PostHeader";
import PostBody from "./PostBody";

const PostCard = ({ text, user, creationDate }) => {
  const header = <PostHeader {...{ user, creationDate }} />;
  return (
    <CardWithHeader header={header}>
      <PostBody {...{ text }} />
    </CardWithHeader>
  );
};

export default PostCard;
