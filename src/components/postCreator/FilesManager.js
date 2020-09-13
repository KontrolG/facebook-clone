import React from "react";
import FilesStack from "./FilesStack";
import FilesUploader from "./FilesUploader";

const FilesManager = ({ mediaFileInputId, mediaFiles, addMediaFiles }) => {
  return (
    <>
      <FilesStack files={mediaFiles} />
      <FilesUploader {...{ mediaFileInputId, addMediaFiles }} />
    </>
  );
};

export default FilesManager;
