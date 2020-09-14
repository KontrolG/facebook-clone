import React from "react";
import getFileType from "../../utils/getFileType";

const FileItem = ({ file }) => {
  const fileTypeIsVideo = getFileType(file) === "video";
  const urlFromFile = URL.createObjectURL(file);

  const filePreviewClassName = "file-preview";

  const filePreview = fileTypeIsVideo ? (
    <video controls className={filePreviewClassName}>
      <source src={urlFromFile} type={file.type} />
    </video>
  ) : (
    <img src={urlFromFile} className={filePreviewClassName} />
  );

  return (
    <li>
      <button type="button">⨯</button>
      {filePreview}
    </li>
  );
};

export default FileItem;
