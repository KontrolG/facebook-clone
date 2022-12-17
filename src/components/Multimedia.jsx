import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const Multimedia = forwardRef(
  ({ fileMediaType, sourceUrl, className }, ref) => {
    if (fileMediaType === "video") {
      return (
        <video controls className={className} ref={ref}>
          <source src={sourceUrl} />
        </video>
      );
    }

    return <img src={sourceUrl} className={className} ref={ref} />;
  }
);

Multimedia.defaultProps = {
  className: null
};

Multimedia.propTypes = {
  fileMediaType: PropTypes.string.isRequired,
  sourceUrl: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default Multimedia;
