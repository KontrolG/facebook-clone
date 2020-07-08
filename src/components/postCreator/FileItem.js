import React, { useState } from "react";

const FileItem = ({ file }) => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const isDone = uploadProgress === 100;
  return (
    <li data-is-done={isDone} style={{ "--progress": uploadProgress }}>
      <button>⨯</button>
      <img src={URL.createObjectURL(file)} />
    </li>
  );
};

export default FileItem;
