import React from "react";
import PropTypes from "prop-types";
import { PhotoUploaderProvider } from "./context";

const PhotoUploader = ({ children, onImageUpload, width, className }) => {
  const photoUploaderStyle = { width };
  return (
    <PhotoUploaderProvider onImageUpload={onImageUpload} width={width}>
      <div style={photoUploaderStyle} className={className}>
        {children}
      </div>
    </PhotoUploaderProvider>
  );
};

PhotoUploader.defaultProps = {
  onImageUpload: () => {},
  width: null,
  className: ""
};

PhotoUploader.propTypes = {
  children: PropTypes.node.isRequired,
  onImageUpload: PropTypes.func,
  width: PropTypes.string,
  className: PropTypes.string
};

export default PhotoUploader;
