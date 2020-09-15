import React from "react";
import FilesStack from "./FilesStack";
import FilesUploader from "./FilesUploader";

const FilesManager = ({
  mediaFileInputId,
  mediaFiles,
  addMediaFiles,
  removeMediaFile
}) => {
  return (
    <>
      <FilesStack files={mediaFiles} removeMediaFile={removeMediaFile} />
      <FilesUploader {...{ mediaFileInputId, addMediaFiles }} />
    </>
  );
};

export default FilesManager;
