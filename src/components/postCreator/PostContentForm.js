import React, { useState } from "react";
import getUniqueId from "uuid/v4";
import { useUserContext } from "../../contexts/UserContext";
import { usePostsContext } from "../../contexts/PostsContext";
// import postWithMediaFiles from "../../firebase-utils/postWithMediaFiles";
import FilesManager from "./FilesManager";
import FormOptions from "./FormOptions";
import PostContentInput from "./PostContentInput";
import useDragAndDrop from "../../hooks/useDragAndDrop";
import useClassNames from "../../hooks/useClassNames";

const toFilesWithId = file => Object.assign(file, { id: getUniqueId() });

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
  const { user } = useUserContext();
  const { setPosts } = usePostsContext();
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
    addNewPost(createdPost);
  };

  const addNewPost = newPost => {
    setPosts(posts => ({ ...newPost, ...posts }));
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
    const newFilesWithId = Array.from(newFiles).map(toFilesWithId);
    setMediaFiles(mediaFiles => [...mediaFiles, ...newFilesWithId]);
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
