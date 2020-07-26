import React from "react";

const FileItem = ({ file }) => {
  return (
    <li>
      <button>⨯</button>
      <img src={URL.createObjectURL(file)} />
    </li>
  );
};

export default FileItem;
