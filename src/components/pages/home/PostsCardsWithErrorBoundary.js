import React from "react";
import PostsCards from "./PostsCards";
import withErrorBoundary from "../../withErrorBoundary";

const errorMessage = (
  <p style={{ textAlign: "center", color: "darkred" }}>
    Something when really wrong!
  </p>
);

const PostsCardswithErrorBoundary = withErrorBoundary(PostsCards, errorMessage);

export default PostsCardswithErrorBoundary;
