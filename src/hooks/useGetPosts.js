import { useState, useEffect } from "react";
import Post from "../firebase-utils/postModel";

const useGetPosts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState({});

  const loadPostOnMounting = () => {
    (async () => {
      const posts = (await Post.getAll()) || {};
      setPosts(posts);
      setIsLoading(false);
    })();
  };

  useEffect(loadPostOnMounting, []);
  return [isLoading, posts, setPosts];
};

export default useGetPosts;
