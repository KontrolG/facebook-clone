import React, { createContext, useState, useEffect, useContext } from "react";
import Post from "../firebase-utils/PostModel";
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
    const newPosts = (await Post.getAll()) || {};
    // const newPosts = {
    //   "-MGbuKmeEg5a7eQSR51s": {
    //     creationDate: 1599471181316,
    //     text: "Saludos!",
    //     user: {
    //       uid: "jJAnG0375XR5YTJjfh9XkY7tACf2",
    //       email: "test@gmail.com",
    //       name: { first: "Test", last: "User" },
    //       photo:
    //         "https://firebasestorage.googleapis.com/v0/b/fb-post-creator.appspot.com/o/profiles-pictures%2Fdefault-profile-picture.jpg?alt=media&token=f82f4d92-2d6e-4720-97d7-3e584dc527db"
    //     }
    //   }
    // };
    setPosts(newPosts);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  const deletePost = async postId => {
    await Post.deleteItem(postId);
    const newPosts = { ...posts };
    delete newPosts[postId];
    setPosts(newPosts);
  };

  const providerValue = { isLoading, posts, setPosts, deletePost };

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
