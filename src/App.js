import React, { useState, useEffect } from "react";
import { Provider } from "./context";
import SearchBar from "./components/searchBar/SearchBar";
import Home from "./components/pages/home/Home";
import Post from "./firebase-utils/PostModel";
import "./App.css";

const useGetPosts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState({});

  const loadPostOnMounting = () => {
    (async () => {
      setIsLoading(true);
      const posts = await Post.getAll();
      setPosts(posts || {});
      setIsLoading(false);
    })();
  };

  useEffect(loadPostOnMounting, []);

  return [isLoading, posts, setPosts];
};

const App = () => {
  const user = {
    name: { first: "Georgelyz", last: "Martinez" },
    photo: "img/test.jpg"
  };

  const getPostsState = useGetPosts();
  const searchQueryState = useState("");

  return (
    <Provider value={{ user, getPostsState, searchQueryState }}>
      <SearchBar />
      <Home />
    </Provider>
  );
};

export default App;
