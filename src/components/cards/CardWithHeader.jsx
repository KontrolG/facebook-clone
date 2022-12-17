import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";

const CardWithHeader = ({ header: headerContent, children }) => (
  <Card>
    <header>{headerContent}</header>
    {children}
  </Card>
);

CardWithHeader.propTypes = {
  header: PropTypes.element.isRequired
};

export default CardWithHeader;
