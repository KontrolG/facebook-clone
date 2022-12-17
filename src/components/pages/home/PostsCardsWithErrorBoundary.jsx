import React from "react";
import PostsCards from "./PostsCards";
import withErrorBoundary from "../../withErrorBoundary";

const errorMessage = (
  <p style={{ textAlign: "center", color: "darkred" }}>
    ¡Algo ha salido mal! Intenta nuevamente.
  </p>
);

const PostsCardswithErrorBoundary = PostsCards;

export default PostsCardswithErrorBoundary;
