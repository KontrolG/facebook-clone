import React from "react";
import FileStack from "./FileStack";
import FormOptions from "./FormOptions";
import PostContentInput from "./PostContentInput";

const PostContentForm = () => (
  <form className="post-content dragging-files">
    <PostContentInput />
    <FileStack />
    <FormOptions />
  </form>
);

export default PostContentForm;
