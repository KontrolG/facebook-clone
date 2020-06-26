import React from "react";

const FilesUploader = ({ mediaFileInputId, setMediaFiles }) => {
  const acceptedFilesTypes =
    "image/*,image/heif,image/heic,video/*,video/mp4,video/x-m4v,video/x-matroska";

  const addMediaFiles = event => {
    const newFiles = event.target.files;
    const newMediaFiles = Array.from(newFiles).map(toMediaFile);
    setMediaFiles(mediaFiles => [...mediaFiles, ...newMediaFiles]);
  };

  const toMediaFile = file => ({ uploadProgress: 0, file });

  return (
    <input
      id={mediaFileInputId}
      multiple
      type="file"
      accept={acceptedFilesTypes}
      onChange={addMediaFiles}
    />
  );
};

export default FilesUploader;
