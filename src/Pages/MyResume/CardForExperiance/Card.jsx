import React, { useState } from "react";

import styles from "./Card.module.css";

import ReactTooltip from "react-tooltip";
import { Link } from "react-router-dom";

const Cards = ({
  item: { id, name, companyName, startTime, endTime, website, aboutPosition },
  themeColor,
}) => {
  const [isTooltipActived, setIsTooltipActived] = useState(false);
  return (
    <Link
      to={website}
      className={styles.card}
      data-tip={`${
        website !== "NOWEB"
          ? `For Go To   =>  ${website.split("/")[1]} Click `
          : "No Website"
      }`}
      onMouseEnter={() => setIsTooltipActived(true)}
      onMouseLeave={() => {
        setIsTooltipActived(false);
        setTimeout(() => setIsTooltipActived(true), 50);
      }}
    >
      {isTooltipActived && <ReactTooltip />}
      <div className={styles.top}>
        <p className={styles.name} style={{ color: themeColor }}>
          {name}
        </p>
        <p className={styles.timeAndCompany}>
          {startTime} - {endTime} *|* {companyName}
        </p>
      </div>
      <p className={styles.aboutPosition}>{aboutPosition}</p>
    </Link>
  );
};

export default Cards;
