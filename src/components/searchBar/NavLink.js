import React from "react";
import { v4 as getRandomId } from "uuid";

const NavLink = ({ to, className, children }) => (
  <li key={getRandomId()} className={className}>
    <a href={to}>{children}</a>
  </li>
);

NavLink.defaultProps = {
  to: "#"
};

export default NavLink;
