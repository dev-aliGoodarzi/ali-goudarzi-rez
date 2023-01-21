import React from "react";

import { NavLink } from "react-router-dom";

const LinkCustom = ({
  data: { id, to, icon, dataTip, isBackgroundColored },
  onClick,
  themeColor,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <NavLink
      id={id}
      style={({ isActive }) => {
        return isActive ? { color: `${themeColor}` } : { color: "#fff" };
      }}
      data-tip={dataTip}
      to={to}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {icon}
    </NavLink>
  );
};

export default LinkCustom;
