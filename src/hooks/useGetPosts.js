import { useState, useEffect } from "react";
import Post from "../firebase-utils/postModel";

const useGetPosts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState({});

  const fetchPost = async () => {
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

  const loadPostOnMounting = () => {
    fetchPost();
  };

  useEffect(loadPostOnMounting, []);

  return [isLoading, posts, setPosts];
};

export default useGetPosts;
