import React, { Fragment } from "react";
import { getContextValue } from "../../../context";
import PostCard from "../../postCard/PostCard";

const byCreationDate = ([, lastPost], [, nextPost]) =>
  nextPost.creationDate - lastPost.creationDate;

const toPostsCards = ([id, post]) => <PostCard {...post} key={id} />;

const getCardsFromPosts = posts =>
  Object.entries(posts)
    .sort(byCreationDate)
    .map(toPostsCards);

const PostsCards = () => {
  const [isLoading, posts] = getContextValue().getPostsState;
  console.log(posts);
  const cards = getCardsFromPosts(posts);

  const loadingMessage = <p>Loading...</p>;

  return <Fragment>{isLoading ? loadingMessage : cards}</Fragment>;
};

export default PostsCards;
