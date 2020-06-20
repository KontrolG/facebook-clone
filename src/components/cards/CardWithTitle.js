import React from "react";
import PropTypes from "prop-types";
import CardWithHeader from "./CardWithHeader";

const CardWithTitle = ({ title, children }) => {
  const cardTitle = <h4 className="gray-bg">{title}</h4>;

  return <CardWithHeader header={cardTitle}>{children}</CardWithHeader>;
};

CardWithTitle.propTypes = {
  title: PropTypes.string.isRequired
};

export default CardWithTitle;
