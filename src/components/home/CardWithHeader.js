import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";

const CardWithHeader = ({ header, children }) => (
  <Card>
    <header>{header}</header>
    {children}
  </Card>
);

CardWithHeader.propTypes = {
  header: PropTypes.element.isRequired
};

export default CardWithHeader;
