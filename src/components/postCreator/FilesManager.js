import React from "react";
import FilesStack from "./FilesStack";
import FilesUploader from "./FilesUploader";

const FilesManager = ({ mediaFileInputId }) => {
  return (
    <>
      <FilesStack />
      <FilesUploader mediaFileInputId={mediaFileInputId} />
    </>
  );
};

export default FilesManager;
