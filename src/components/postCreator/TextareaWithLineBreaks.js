import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const getReferedTextareaWithLineBreaks = ({
  className = "",
  onChange,
  ...restProps
}, ref) => {
  const preventBlurOnTab = event => {
    const hasPressedTab = event.key === "Tab";
    if (hasPressedTab) event.preventDefault();
  };

  const callOnChangeWithValue = event => {
    const { target } = event;
    target.value = getValueFromChildNodes(target);
    onChange(event);
  };

  const getValueFromChildNodes = element => {
    const { childNodes } = element;
    return Array.from(childNodes).map(toTextContent);
  };

  const toTextContent = node => node.textContent;

  return (
    <div
      className={`textarea-with-line-breaks ${className}`}
      {...restProps}
      contentEditable
      onKeyDown={preventBlurOnTab}
      onKeyUp={callOnChangeWithValue}
      ref={ref}
    />
  );
};

const TextareaWithLineBreaks = forwardRef(getReferedTextareaWithLineBreaks);
TextareaWithLineBreaks.propTypes = {
  title: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func
};

export default TextareaWithLineBreaks;
