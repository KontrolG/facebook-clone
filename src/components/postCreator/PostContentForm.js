import React, { useState } from "react";
import { getContextValue } from "../../context";
import postWithMediaFiles from "../../firebase-utils/postWithMediaFiles";
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
      mediaFiles,
      creationDate: postWithMediaFiles.timestamp
    };

    clearForm();
    const createdPost = await postWithMediaFiles.createPost(newPost);
    console.log(createdPost);
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
    setMediaFiles(mediaFiles => [...mediaFiles, ...newFiles]);
  };

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
