import React from "react";

const PostHeaderDropdown = props => {
  return (
    <div className="post-options">
      <button type="button" className="post-option-dropdown-button">
        v
      </button>
      <ul className="post-option-dropdown-list">
        <li>Eliminar</li>
      </ul>
    </div>
  );
};

export default PostHeaderDropdown;
