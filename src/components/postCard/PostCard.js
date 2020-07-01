import React from "react";
import CardWithHeader from "../cards/CardWithHeader";
import PostHeader from "./PostHeader";
import PostBody from "./PostBody";

const PostCard = ({ text, user, createAt }) => {
  const header = <PostHeader {...{ user, createAt }} />;
  return (
    <CardWithHeader header={header}>
      <PostBody {...{ text }} />
    </CardWithHeader>
  );
};

export default PostCard;
