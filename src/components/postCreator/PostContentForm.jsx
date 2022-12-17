import React from "react";
import { useUserContext } from "../../contexts/UserContext";
import { usePostsContext } from "../../contexts/PostsContext";
import postWithMediaFiles from "../../firebase-utils/postWithMediaFiles";
import FilesManager from "./FilesManager";
import FormOptions from "./FormOptions";
import PostContentInput from "./PostContentInput";
import useDragAndDrop from "../../hooks/useDragAndDrop";
import useClassNames from "../../hooks/useClassNames";
import { usePostCreatorContext } from "./context";

const PostContentForm = ({ formId, canSendThePost }) => {
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
  const {
    text,
    mediaFiles,
    clearPostCreator,
    addMediaFiles
  } = usePostCreatorContext();

  addClassNameIf(isDragging, "is-dragging");

  const saveNewPost = async event => {
    event.preventDefault();
    if (!canSendThePost) return;

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
    clearPostCreator();
    inputRef.current.textContent = "";
  };

  const addDroppedMediaFiles = event => {
    const newFiles = getDraggedFiles(event);
    addMediaFiles(newFiles);
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
      <PostContentInput inputRef={inputRef} />
      <FilesManager mediaFileInputId={mediaFileInputId} />
      <FormOptions mediaFileInputId={mediaFileInputId} />
    </form>
  );
};

export default PostContentForm;
