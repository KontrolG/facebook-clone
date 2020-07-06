import React, { useState, useContext } from "react";
import context from "../../context";
import FilesManager from "./FilesManager";
import FormOptions from "./FormOptions";
import PostContentInput from "./PostContentInput";
import useDragAndDrop from "../../hooks/useDragAndDrop";

const PostContentForm = ({
  formId,
  text,
  setText,
  mediaFiles,
  setMediaFiles
}) => {
  const mediaFileInputId = "media-input";
  const [
    isDragging,
    changeIsDragging,
    finishDrag,
    getDraggedFiles
  ] = useDragAndDrop(false, { allowedTypes: ["image", "video"] });
  const { user, postState } = useContext(context);
  const inputRef = React.createRef();

  const saveNewPost = event => {
    event.preventDefault();
    const newPost = { user, text, mediaFiles, createAt: new Date() };
    addNewPost(newPost);
    clearForm();
  };

  const addNewPost = newPost => {
    const [, setPost] = postState;
    setPost(post => [newPost, ...post]);
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

  const classNames = ["post-content"];
  if (isDragging) classNames.push("is-dragging");

  const finishDragOnFormLeave = event => {
    const { target } = event;
    if (!isChildrenOf(formId, target)) finishDrag(event);
  };

  const isChildrenOf = (parentId, element) => element.matches(`#${parentId} *`);

  return (
    <form
      id={formId}
      className={classNames.join(" ")}
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
