import React, { createContext, useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";

const defaultState = {
  searchQuery: "",
  setSearchQuery: () => {},
  isLoading: false,
  posts: {},
  setPosts: () => {}
};

const PostsContext = createContext(defaultState);

const PostsProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(defaultState.isLoading);
  const [searchQuery, setSearchQuery] = useState(defaultState.searchQuery);
  const [posts, setPosts] = useState(defaultState.posts);

  const fetchPost = async () => {
    setIsLoading(true);
    // const newPosts = (await Post.getAll()) || {};
    const newPosts = {
      "-MGbuKmeEg5a7eQSR51s": {
        creationDate: 1599471181316,
        text: "Saludos!",
        user: {
          name: { first: "Georgelyz", last: "Martinez" },
          photo: "img/test.jpg"
        }
      }
    };
    setPosts(newPosts);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  const providerValue = { isLoading, posts, setPosts };

  return (
    <PostsContext.Provider value={providerValue}>
      {children}
    </PostsContext.Provider>
  );
};

PostsContext.propTypes = {
  children: PropTypes.node.isRequired
};

const usePostsContext = () => {
  const context = useContext(PostsContext);
  if (!context) {
    throw new Error("usePostsContext can only be used within a PostsProvider");
  }
  return context;
};

export default PostsContext;

export { PostsProvider, usePostsContext };
