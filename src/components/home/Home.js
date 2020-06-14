import React from "react";
import SearchBar from "./SearchBar";
import PostCreator from "./PostCreator";
import "./Home.css";
import PostCard from "./PostCard";

const Home = () => {
  return (
    <>
      <SearchBar />
      <main>
        <PostCreator />
        <PostCard />
      </main>
    </>
  );
};

export default Home;
