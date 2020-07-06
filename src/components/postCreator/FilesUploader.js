import React from "react";

const FilesUploader = ({ mediaFileInputId, addMediaFiles }) => {
  const acceptedFilesTypes =
    "image/*,image/heif,image/heic,video/*,video/mp4,video/x-m4v,video/x-matroska";

  const addInputMediaFiles = event => {
    const newFiles = event.target.files;
    addMediaFiles(newFiles);
  };

  return (
    <input
      id={mediaFileInputId}
      multiple
      type="file"
      accept={acceptedFilesTypes}
      onChange={addInputMediaFiles}
    />
  );
};

export default FilesUploader;
