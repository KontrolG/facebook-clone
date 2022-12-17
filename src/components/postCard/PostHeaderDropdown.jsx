import React, { useCallback } from "react";
import useToggle from "../../hooks/useToggle";
import Button from "../Button";
import { usePostsContext } from "../../contexts/PostsContext";

const PostHeaderDropdown = ({ postId }) => {
  const { deletePost } = usePostsContext();
  const [isOpen, toggleIsOpen] = useToggle(false);

  const removePost = useCallback(event => deletePost(postId), [postId]);

  return (
    <div className="post-options">
      <Button className="post-option-dropdown-button" onClick={toggleIsOpen}>
        v
      </Button>
      <ul className={`post-option-dropdown-list card ${isOpen ? "open" : ""}`}>
        {/* <li >
          <i>e</i> <span>Editar</span>
        </li> */}
        <li onClick={removePost}>
          <i>x</i> <span>Eliminar</span>
        </li>
      </ul>
    </div>
  );
};

export default PostHeaderDropdown;
