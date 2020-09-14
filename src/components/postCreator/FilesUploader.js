import React from "react";
const acceptedFilesTypes = [
  "image/*",
  "image/heif",
  "image/heic",
  "video/*",
  "video/mp4",
  "video/x-m4v",
  "video/x-matroska"
];

const hasAllowedType = ({ type }) => {
  const fileType = type.split("/").shift();
  const allowedTypes = ["image", "video"];
  return allowedTypes.includes(fileType);
};

const FilesUploader = ({ mediaFileInputId, addMediaFiles }) => {
  const addInputMediaFiles = ({ target }) => {
    const newFiles = Array.from(target.files).filter(hasAllowedType);
    addMediaFiles(newFiles);
  };

  return (
    <input
      id={mediaFileInputId}
      multiple
      type="file"
      accept={acceptedFilesTypes.join(",")}
      onChange={addInputMediaFiles}
    />
  );
};

export default FilesUploader;
