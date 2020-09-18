import React, { createContext, useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";

const PhotoUploaderContext = createContext();

const usePhotoUploaderContext = () => {
  const context = useContext(PhotoUploaderContext);
  if (!context) {
    throw new Error(
      "usePhotoUploaderContext can only be used within a PhotoUploaderProvider, check if you placed this node on the right place!"
    );
  }
  return context;
};

const PhotoUploaderProvider = ({ children, onImageUpload, width }) => {
  const [image, setImage] = useState(null);
  const [photoPreviewHeight, setPhotoPreviewHeight] = useState(width);

  const providerValue = {
    image,
    setImage,
    photoPreviewHeight,
    setPhotoPreviewHeight
  };

  useEffect(() => onImageUpload(image), [image]);

  return (
    <PhotoUploaderContext.Provider value={providerValue}>
      {children}
    </PhotoUploaderContext.Provider>
  );
};

PhotoUploaderProvider.defaultProps = {
  onImageUpload: () => {},
  width: "100px"
};

PhotoUploaderProvider.propTypes = {
  children: PropTypes.node.isRequired,
  onImageUpload: PropTypes.func,
  width: PropTypes.string
};

export { PhotoUploaderProvider, usePhotoUploaderContext };
