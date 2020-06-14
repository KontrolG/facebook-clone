import React from "react";

const getPStyle = displayMsg => ({
  fontStyle: "italic",
  opacity: displayMsg ? 1 : 0,
  transition: "opacity 0.5s"
});

const Message = ({ name, previousName, displayMsg }) => {
  return (
    <header>
      <h1>Hello {name}!</h1>
      <p style={getPStyle(displayMsg)}>
        Name change from {previousName} to {name}
      </p>
    </header>
  );
};

export default Message;
