import React from "react";

import styles from "./SystemCard.module.css";

const SystemCard = ({
  data: { id, hardwareName, hardwareAbout, icon },
  themeColor,
  fontSize,
}) => {
  return (
    <div className={styles.card}>
      <img src={icon} alt="" />
      <div className={styles.contentShower}>
        <p
          className={styles.name}
          style={{
            fontSize: `${fontSize && `${fontSize}rem`}`,
            color: themeColor,
          }}
        >
          {hardwareName}
        </p>
        <p
          className={styles.about}
          style={{
            fontSize: `${fontSize && `${fontSize}rem`}`,
            color: themeColor,
          }}
        >
          {hardwareAbout}
        </p>
      </div>
    </div>
  );
};

export default SystemCard;
