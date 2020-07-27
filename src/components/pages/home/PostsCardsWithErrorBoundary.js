import React from "react";
import PostsCards from "./PostsCards";
import withErrorBoundary from "../../withErrorBoundary";

const errorMessage = <p style={{ textAlign: "center" }}>There was an error!</p>;

const PostsCardswithErrorBoundary = withErrorBoundary(PostsCards, errorMessage);

export default PostsCardswithErrorBoundary;
