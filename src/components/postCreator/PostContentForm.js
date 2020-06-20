import React from "react";
import FileStack from "./FileStack";
import FormOptions from "./FormOptions";
import PostContentInput from "./PostContentWrapper";

const preventDefaultEvent = event => event.preventDefault();

const PostContentForm = () => (
  <form className="post-content" onSubmit={preventDefaultEvent}>
    <PostContentInput />
    <FileStack />
    <FormOptions />
  </form>
);

export default PostContentForm;
