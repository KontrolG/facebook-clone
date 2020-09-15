import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const Multimedia = forwardRef(({ fileType, sourceUrl, className }, ref) => {
  if (fileType === "video") {
    return (
      <video controls className={className} ref={ref}>
        <source src={sourceUrl} type={file.type} />
      </video>
    );
  }

  return <img src={sourceUrl} className={className} ref={ref} />;
});

Multimedia.defaultProps = {
  className: null
};

Multimedia.propTypes = {
  fileType: PropTypes.string.isRequired,
  sourceUrl: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default Multimedia;
