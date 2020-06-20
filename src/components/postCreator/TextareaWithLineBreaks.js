import React from "react";
import PropTypes from "prop-types";

const TextareaWithLineBreaks = props => {
  const { className, onChange, ...restProps } = props;

  const preventBlur = event => {
    const hasPressedTab = event.key === "Tab";
    if (hasPressedTab) insertIdentation(event);
  };

  const insertIdentation = event => {
    event.preventDefault();
  };

  const callOnChangeWithValue = event => {
    const { target } = event;
    target.value = getValueFromChildNodes(target);
    if (typeof onChange === "function") onChange(event);
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
      onKeyDown={preventBlur}
      onKeyUp={callOnChangeWithValue}
    ></div>
  );
};

TextareaWithLineBreaks.propTypes = {
  title: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func
};

export default TextareaWithLineBreaks;
