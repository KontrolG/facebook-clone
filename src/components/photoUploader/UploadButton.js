import React, { createRef, useEffect } from "react";
import PropTypes from "prop-types";
import { usePhotoUploaderContext } from "./context";

const UploadButton = ({ children, overlapping }) => {
  const { setImage } = usePhotoUploaderContext();
  const inputRef = createRef();

  const clickInput = () => {
    inputRef.current.click();
  };

  useEffect(() => {
    const [photo] = inputRef.current.files;
    setImage(photo);
  }, [inputRef]);

  const UploadButtonStyle = {
    marginTop: overlapping ? "-20%" : "0.5rem"
  };

  return <div style={UploadButtonStyle}>{children(clickInput, inputRef)}</div>;
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
