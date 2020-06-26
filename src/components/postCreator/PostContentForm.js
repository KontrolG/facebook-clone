import React from "react";
import FilesManager from "./FilesManager";
import FormOptions from "./FormOptions";
import PostContentInput from "./PostContentInput";

const preventDefaultEvent = event => event.preventDefault();

const PostContentForm = ({ text, setText, mediaFiles, setMediaFiles }) => {
  const mediaFileInputId = "media-input";

  return (
    <form className="post-content" onSubmit={preventDefaultEvent}>
      <PostContentInput {...{setText}}/>
      <FilesManager {...{ mediaFileInputId, mediaFiles, setMediaFiles }} />
      <FormOptions {...{ mediaFileInputId }} />
    </form>
  );
};

export default PostContentForm;
