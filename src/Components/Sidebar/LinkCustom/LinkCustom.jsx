import React from "react";

import { Link } from "react-router-dom";

const LinkCustom = ({
  data: { id, to, icon, dataTip, isBackgroundColored },
  onClick,
  themeColor,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <Link
      id={id}
      style={{ color: `${isBackgroundColored ? themeColor : "#fff"}` }}
      data-tip={dataTip}
      to={to}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {icon}
    </Link>
  );
};

export default LinkCustom;
