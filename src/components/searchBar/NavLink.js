import React from "react";

const NavLink = ({ to, className, children }) => (
  <li className={className}>
    <a href={to}>{children}</a>
  </li>
);

NavLink.defaultProps = {
  to: "#"
};

export default NavLink;
