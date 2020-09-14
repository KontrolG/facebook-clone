import React from "react";
import { usePostsContext } from "../../../contexts/PostsContext";
import PostCard from "../../postCard/PostCard";

const byCreationDate = ([, lastPost], [, nextPost]) =>
  nextPost.creationDate - lastPost.creationDate;

const toPostsCards = ([id, post]) => <PostCard {...post} key={id} />;

const getCardsFromPosts = posts =>
  Object.entries(posts)
    .sort(byCreationDate)
    .map(toPostsCards);

const PostsCards = () => {
  const { isLoading, posts } = usePostsContext();
  const cards = getCardsFromPosts(posts);

  const loadingMessage = (
    <p style={{ textAlign: "center", marginTop: "1rem" }}>Cargando...</p>
  );

  return isLoading ? loadingMessage : cards;
};

export default PostsCards;
