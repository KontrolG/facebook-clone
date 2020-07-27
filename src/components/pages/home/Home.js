import React, { useState } from "react";
import { Provider, getContextValue } from "../../../context";
import useGetPosts from "../../../hooks/useGetPosts";
import SearchBar from "../../searchBar/SearchBar";
import PostsMain from "./PostsMain";
import "./Home.css";

const Home = () => {
  const getPostsState = useGetPosts();
  const searchQueryState = useState("");
  const { user } = getContextValue();

  return (
    <Provider value={{ user, getPostsState, searchQueryState }}>
      <SearchBar />
      <PostsMain />
    </Provider>
  );
};

export default Home;
