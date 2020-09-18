import React, { createContext, useState, useEffect, useContext } from "react";
import Post from "../firebase-utils/PostModel";
import PropTypes from "prop-types";

const PostsContext = createContext();

const usePostsContext = () => {
  const context = useContext(PostsContext);
  if (!context) {
    throw new Error("usePosts can only be used within a PostsProvider");
  }
  return context;
};

const PostsProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [posts, setPosts] = useState({});

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
    setPosts(posts => {
      const newPosts = { ...posts };
      delete newPosts[postId];
      return newPosts;
    });
  };

  const providerValue = { isLoading, posts, setPosts, deletePost };

  return (
    <PostsContext.Provider value={providerValue}>
      {children}
    </PostsContext.Provider>
  );
};

PostsProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export { PostsProvider, usePostsContext };
