import React from "react";

const NavItem = ({ to, className, children }) => (
  <li className={className}>
    <a href={to}>{children}</a>
  </li>
);

NavItem.defaultProps = {
  to: "#"
};

export default NavItem;
