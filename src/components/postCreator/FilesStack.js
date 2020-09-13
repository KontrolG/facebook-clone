import React from "react";
import FileItem from "./FileItem";

const toFileItem = file => <FileItem file={file} key={file.id} />;

const FilesStack = ({ files }) => {
  const filesItems = files.map(toFileItem);

  return <ul className="file-stack">{filesItems}</ul>;
};

export default FilesStack;
