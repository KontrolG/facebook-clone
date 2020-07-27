import React from "react";
import { v4 as getRandomId } from "uuid";
import FileItem from "./FileItem";

const toFileItem = file => <FileItem file={file} key={getRandomId()} />;

const FilesStack = ({ files }) => {
  const filesItems = files.map(toFileItem);

  return <ul className="file-stack">{filesItems}</ul>;
};

export default FilesStack;
