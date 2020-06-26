import React, {Fragment} from "react";
import FilesStack from "./FilesStack";
import FilesUploader from "./FilesUploader";

const FilesManager = ({ mediaFileInputId, mediaFiles, setMediaFiles }) => {
  return (
    <Fragment>
      <FilesStack files={mediaFiles}/>
      <FilesUploader {...{mediaFileInputId, setMediaFiles}}/>
    </Fragment>
  );
};

export default FilesManager;
