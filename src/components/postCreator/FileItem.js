import React from "react";
import Multimedia from "../Multimedia";
import getFileMediaType from "../../utils/getFileMediaType";

const FileItem = ({ file }) => {
  const fileMediaType = getFileMediaType(file.type);
  const urlFromFile = URL.createObjectURL(file);

  return (
    <li>
      <button type="button">⨯</button>
      <Multimedia
        fileMediaType={fileMediaType}
        sourceUrl={urlFromFile}
        className="file-preview"
      />
    </li>
  );
};

export default FileItem;
