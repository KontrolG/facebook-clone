import React from "react";
import useToggle from "../../hooks/useToggle";
import Button from "../Button";

const PostHeaderDropdown = props => {
  const [isOpen, toggleIsOpen] = useToggle(false);

  const closeDropDown = event => {
    if (isOpen) {
      toggleIsOpen();
    }
  };

  return (
    <div className="post-options">
      <Button
        className="post-option-dropdown-button"
        onClick={toggleIsOpen}
        onBlur={closeDropDown}
      >
        v
      </Button>
      <ul className={`post-option-dropdown-list card ${isOpen ? "open" : ""}`}>
        <li onClick={event => alert("funciona")}>
          <i>e</i> <span>Editar</span>
        </li>
        <li>
          <i>x</i> <span>Eliminar</span>
        </li>
      </ul>
    </div>
  );
};

export default PostHeaderDropdown;
