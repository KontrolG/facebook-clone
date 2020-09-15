import React from "react";
import FileItem from "./FileItem";

const toFileItem = removeMediaFile => file => (
  <FileItem file={file} key={file.id} removeMediaFile={removeMediaFile} />
);

const FilesStack = ({ files, removeMediaFile }) => {
  const filesItems = files.map(toFileItem(removeMediaFile));

  return <ul className="file-stack">{filesItems}</ul>;
};

export default FilesStack;
