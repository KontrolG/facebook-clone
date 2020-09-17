import React from "react";
import FileItem from "./FileItem";
import { usePostCreatorContext } from "./context";

const toFileItem = file => <FileItem file={file} key={file.id} />;

const FilesStack = () => {
  const { mediaFiles } = usePostCreatorContext();

  const filesItems = mediaFiles.map(toFileItem);

  return <ul className="file-stack">{filesItems}</ul>;
};

export default FilesStack;
