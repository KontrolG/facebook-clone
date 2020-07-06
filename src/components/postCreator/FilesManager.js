import React, {Fragment} from "react";
import FilesStack from "./FilesStack";
import FilesUploader from "./FilesUploader";

const FilesManager = ({ mediaFileInputId, mediaFiles, addMediaFiles }) => {
  return (
    <Fragment>
      <FilesStack files={mediaFiles}/>
      <FilesUploader {...{mediaFileInputId, addMediaFiles}}/>
    </Fragment>
  );
};

export default FilesManager;
