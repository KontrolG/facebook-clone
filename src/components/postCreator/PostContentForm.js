import React, { useState } from "react";
import { getContextValue } from "../../context";
import Post from "../../firebase-utils/PostModel";
import FilesManager from "./FilesManager";
import FormOptions from "./FormOptions";
import PostContentInput from "./PostContentInput";
import useDragAndDrop from "../../hooks/useDragAndDrop";
import useClassNames from "../../hooks/useClassNames";

const PostContentForm = ({
  formId,
  text,
  setText,
  mediaFiles,
  setMediaFiles
}) => {
  const [
    isDragging,
    changeIsDragging,
    finishDrag,
    getDraggedFiles
  ] = useDragAndDrop(false, { allowedTypes: ["image", "video"] });
  const [getClassNames, addClassNameIf] = useClassNames(["post-content"]);
  const { user, getPostsState } = getContextValue();
  const inputRef = React.createRef();
  const mediaFileInputId = "media-input";

  addClassNameIf(isDragging, "is-dragging");

  const saveNewPost = async event => {
    event.preventDefault();
    const newPost = {
      user,
      text,
      /* mediaFiles, */ creationDate: Post.getTimestamp()
    };

    clearForm();
    const createdPost = await Post.create(newPost);
    addNewPost(createdPost);
  };

  const addNewPost = newPost => {
    const [, , setPosts] = getPostsState;
    setPosts(post => ({ ...newPost, ...post }));
  };

  const clearForm = () => {
    setText("");
    inputRef.current.textContent = "";
    setMediaFiles([]);
  };

  const addDroppedMediaFiles = event => {
    const newFiles = getDraggedFiles(event);
    addMediaFiles(newFiles);
  };

  const addMediaFiles = newFiles => {
    const newMediaFiles = Array.from(newFiles).map(toMediaFile);
    setMediaFiles(mediaFiles => [...mediaFiles, ...newMediaFiles]);
  };

  const toMediaFile = file => ({ uploadProgress: 0, file });

  const finishDragOnFormLeave = event => {
    const { target } = event;
    if (!isChildrenOf(formId, target)) finishDrag(event);
  };

  const isChildrenOf = (parentId, element) => element.matches(`#${parentId} *`);

  return (
    <form
      id={formId}
      className={getClassNames(" ")}
      onSubmit={saveNewPost}
      onDragOver={changeIsDragging}
      onDrop={addDroppedMediaFiles}
      onDragLeave={finishDragOnFormLeave}
    >
      <PostContentInput {...{ inputRef, text, setText }} />
      <FilesManager {...{ mediaFileInputId, mediaFiles, addMediaFiles }} />
      <FormOptions {...{ mediaFileInputId }} />
    </form>
  );
};

export default PostContentForm;
