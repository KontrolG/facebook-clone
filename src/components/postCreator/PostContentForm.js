import React, { useContext } from "react";
import context from "../../context";
import FilesManager from "./FilesManager";
import FormOptions from "./FormOptions";
import PostContentInput from "./PostContentInput";

const PostContentForm = ({
  formId,
  text,
  setText,
  mediaFiles,
  setMediaFiles
}) => {
  const mediaFileInputId = "media-input";
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

  return (
    <form id={formId} className="post-content" onSubmit={saveNewPost}>
      <PostContentInput {...{ inputRef, text, setText }} />
      <FilesManager {...{ mediaFileInputId, mediaFiles, setMediaFiles }} />
      <FormOptions {...{ mediaFileInputId }} />
    </form>
  );
};

export default PostContentForm;
