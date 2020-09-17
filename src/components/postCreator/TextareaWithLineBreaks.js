import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const preventBlurOnTab = event => {
  const hasPressedTab = event.key === "Tab";
  if (hasPressedTab) event.preventDefault();
};

const getValueFromChildNodes = element => {
  const { childNodes } = element;
  return Array.from(childNodes).map(toTextContent);
};

const toTextContent = node => node.textContent;

const TextareaWithLineBreaks = forwardRef(
  ({ className, onChange, title, placeholder }, ref) => {
    const callOnChangeWithValue = event => {
      const { target } = event;
      target.value = getValueFromChildNodes(target);
      onChange(event);
    };

    return (
      <div
        className={`textarea-with-line-breaks ${className}`}
        title={title}
        placeholder={placeholder}
        contentEditable
        onKeyDown={preventBlurOnTab}
        onKeyUp={callOnChangeWithValue}
        ref={ref}
      />
    );
  }
);

TextareaWithLineBreaks.defaultProps = {
  className: undefined
};

TextareaWithLineBreaks.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func
};

export default TextareaWithLineBreaks;
