import React, { Fragment } from "react";
import { Consumer } from "../../../context";
import withErrorBoundary from "../../withErrorBoundary";
import PostCreator from "../../postCreator/PostCreator";
import PostCard from "../../postCard/PostCard";
import "./Home.css";

const PostCards = () => <Consumer>{renderCardsFromContextPost}</Consumer>;

const renderCardsFromContextPost = ({ getPostsState }) => {
  const [isLoading, posts] = getPostsState;
  console.log(posts);
  const cards = Object.entries(posts).map(toPostsCards);
  return <Fragment>{isLoading ? "Loading..." : cards}</Fragment>;
};

const toPostsCards = ([id, post]) => <PostCard {...post} key={id} />;

const errorMessage = <p style={{ textAlign: "center" }}>There was an error!</p>;

const PostCardswithErrorBoundary = withErrorBoundary(PostCards, errorMessage);

const Home = () => {
  return (
    <main>
      <PostCreator />
      <PostCardswithErrorBoundary />
    </main>
  );
};

export default Home;
