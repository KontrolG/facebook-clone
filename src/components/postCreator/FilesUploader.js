import React from "react";
import getFileMediaType from "../../utils/getFileMediaType";

const acceptedFilesTypes =
  "image/*, image/heif, image/heic, video/*, video/mp4, video/x-m4v, video/x-matroska";

const hasAllowedType = file => {
  const fileType = getFileMediaType(file.type);
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
      accept={acceptedFilesTypes}
      onChange={addInputMediaFiles}
    />
  );
};

export default FilesUploader;
