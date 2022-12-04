import React from "react";

import styles from "./Card.module.css";

import { Link } from "react-router-dom";

const Cards = ({
  item: { id, name, companyName, startTime, endTime, website, aboutPosition },
  themeColor,
  events: { enter, hide },
}) => {
  return (
    <Link
      to={website}
      className={styles.card}
      data-tip={`${
        website !== "NOWEB"
          ? `For Go To   =>  ${website.split("/")[1]} Click `
          : "No Website"
      }`}
      onMouseEnter={(e) => {
        e.currentTarget.style.border = `2px solid ${themeColor}`;
        enter();
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.border = `0`;
        hide();
      }}
    >
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
