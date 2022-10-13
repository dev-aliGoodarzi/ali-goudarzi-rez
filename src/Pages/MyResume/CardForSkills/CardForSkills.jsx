// React
import React from "react";
// React
// CSS
import styles from "./CardForSkills.module.css";
// CSS
const CardForSkills = ({ item: { name, value }, themeColor }) => {
  return (
    <div className={styles.cardForSkills}>
      <p style={{ color: themeColor }}>
        <span>{name}</span> : {value}%
      </p>
      <div
        className={styles.likeProgress}
        style={{
          background: "#1d1e21e1",
        }}
      >
        <div style={{ width: `${value}%` }} className={styles.inner}></div>
      </div>
    </div>
  );
};

export default CardForSkills;
