import React, { createRef, useEffect } from "react";
import PropTypes from "prop-types";
import { usePhotoUploaderContext } from "./context";

const UploadButton = ({ children, imageFileTypes, overlapping }) => {
  const { setImage } = usePhotoUploaderContext();
  const inputRef = createRef();

  const UploadButtonStyle = {
    marginTop: overlapping ? "-20%" : "0.5rem"
  };

  const clickInput = () => {
    inputRef.current.click();
  };

  const restartInput = () => {
    inputRef.current.value = null;
    setImage(null);
  };

  const changeImage = ({ target }) => {
    const [photo] = target.files;
    setImage(photo);
  };

  return (
    <div style={UploadButtonStyle}>
      <input
        type="file"
        accept={imageFileTypes}
        onChange={changeImage}
        ref={inputRef}
        hidden
      />
      {children(clickInput, restartInput)}
    </div>
  );
};

UploadButton.defaultProps = {
  children: () => null,
  overlapping: false
};

UploadButton.propTypes = {
  children: PropTypes.func,
  overlapping: PropTypes.bool
};

export default UploadButton;
