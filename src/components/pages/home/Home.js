import React from "react";
import PostCreator from "../../postCreator/PostCreator";
import PostCard from "../../cards/PostCard";
import "./Home.css";

const Home = () => {
  return (
    <main>
      <PostCreator />
      <PostCard />
    </main>
  );
};

export default Home;
