import React from "react";
import Multimedia from "../Multimedia";
import getFileMediaType from "../../utils/getFileMediaType";
import { usePostCreatorContext } from "./context";

const FileItem = ({ file }) => {
  const { removeMediaFile } = usePostCreatorContext();
  const fileMediaType = getFileMediaType(file.type);
  const urlFromFile = URL.createObjectURL(file);

  const removeItem = () => removeMediaFile(file.id);

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
