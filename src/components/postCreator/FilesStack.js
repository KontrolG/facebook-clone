import React from "react";
import { v4 as getRandomId } from "uuid";

const FileItem = ({ file }) => {
  const [uploadProgress, setUploadProgress] = React.useState(0);

  const isDone = uploadProgress === 100;
  return (
    <li
      key={getRandomId()}
      data-is-done={isDone}
      style={{ "--progress": uploadProgress }}
    >
      <button className="gray-bg">⨯</button>
      <img src={URL.createObjectURL(file)} />
    </li>
  );
};

const FilesStack = ({ files }) => {
  const toFileItem = ({ file }) => <FileItem file={file} />;

  const filesItems = files.map(toFileItem);

  return (
    <ul className="file-stack">
      {/* <li data-is-done="false" style={{ "--progress": 77 }}>
        <button className="gray-bg">⨯</button>
        <img src="img/test.jpg" />
      </li> */}
      {filesItems}
    </ul>
  );
};

export default FilesStack;
