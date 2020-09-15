import React, { useCallback } from "react";
import Multimedia from "../Multimedia";
import getFileMediaType from "../../utils/getFileMediaType";

const FileItem = ({ file, removeMediaFile }) => {
  const fileMediaType = getFileMediaType(file.type);
  const urlFromFile = URL.createObjectURL(file);

  const { id } = file;
  const removeItem = useCallback(() => removeMediaFile(id), [id]);

  return (
    <li>
      <button type="button" onClick={removeItem}>
        ⨯
      </button>
      <Multimedia
        fileMediaType={fileMediaType}
        sourceUrl={urlFromFile}
        className="file-preview"
      />
    </li>
  );
};

export default FileItem;
