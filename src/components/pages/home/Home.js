import React, { Fragment } from "react";
import { Consumer } from "../../../context";
import withErrorBoundary from "../../withErrorBoundary";
import PostCreator from "../../postCreator/PostCreator";
import PostCard from "../../postCard/PostCard";
import "./Home.css";

const PostCards = () => <Consumer>{renderCardsFromContextPost}</Consumer>;

const renderCardsFromContextPost = ({ postState }) => {
  const [post] = postState;
  const cards = post.map(toPostCards);
  return <Fragment>{cards}</Fragment>;
};

const toPostCards = post => <PostCard {...post} key={post._id} />;

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
