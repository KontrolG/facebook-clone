import React from "react";
import { PostsProvider } from "../../../contexts/PostsContext";
import SearchBar from "../../searchBar/SearchBar";
import PostsMain from "./PostsMain";
import "./Home.css";

const Home = () => {
  return (
    <PostsProvider>
      <SearchBar />
      <PostsMain />
    </PostsProvider>
  );
};

export default Home;
