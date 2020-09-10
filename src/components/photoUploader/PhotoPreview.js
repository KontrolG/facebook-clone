import React from "react";
import PropTypes from "prop-types";
import { usePhotoUploaderContext } from "./context";

const imagenStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover"
};

const PhotoPreview = ({ defaultImageURL, rounded }) => {
  const { image, photoPreviewHeight } = usePhotoUploaderContext();
  const containerStyle = {
    height: photoPreviewHeight,
    overflow: "hidden",
    borderRadius: rounded ? "50%" : 0
  };

  const imageSrc = image ? URL.createObjectURL(image) : defaultImageURL;
  return (
    <div style={containerStyle}>
      <img src={imageSrc} style={imagenStyle} />
    </div>
  );
};

PhotoPreview.defaultProps = {
  rounded: false
};

PhotoPreview.propTypes = {
  defaultImageURL: PropTypes.string.isRequired,
  rounded: PropTypes.bool
};

export default PhotoPreview;
