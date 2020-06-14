import React from "react";

const toPersonItem = (person, index) => (
  <li key={index}>{person} has arrived!</li>
);

const People = ({ children: people }) => {
  const listItems = people.map(toPersonItem);
  return <ol className="people">{listItems}</ol>;
};

export default People;
