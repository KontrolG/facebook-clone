import React from "react";
import PostCreator from "../../postCreator/PostCreator";
import PostsCardsWithErrorBoundary from "./PostsCardsWithErrorBoundary";

const PostsMain = () => {
  return (
    <main>
      <PostCreator />
      <PostsCardsWithErrorBoundary />
    </main>
  );
};

export default PostsMain;
