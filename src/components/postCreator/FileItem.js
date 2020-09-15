import React from "react";
import Multimedia from "../Multimedia";
import getFileType from "../../utils/getFileType";

const FileItem = ({ file }) => {
  const fileType = getFileType(file);
  const urlFromFile = URL.createObjectURL(file);

  return (
    <li>
      <button type="button">⨯</button>
      <Multimedia
        fileType={fileType}
        sourceUrl={urlFromFile}
        className="file-preview"
      />
    </li>
  );
};

export default FileItem;
