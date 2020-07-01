import React, { Fragment } from "react";
import { Consumer } from "../../../context";
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

const Home = () => {
  return (
    <main>
      <PostCreator />
      <PostCards />
    </main>
  );
};

export default Home;
