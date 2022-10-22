// React
import React from "react";
// React
// CSS
import styles from "./CardForSkills.module.css";
// CSS
const CardForSkills = ({ item: { name, value }, themeColor }) => {
  function between(x, min, max) {
    return x >= min && x <= max;
  }
  return (
    <div className={styles.cardForSkills}>
      <div className={`${styles.aboutCurr} `}>
        <div className={`${styles.nameContainer} text-white`}>
          <span style={{ color: themeColor }}>{name}</span> <span>: </span>
          <span>{value}%</span>
        </div>
        <p className={`${styles.levelContainer}`} style={{ color: themeColor }}>
          {between(value, 0, 25) && "Started :)"}
          {between(value, 26, 50) && "Intermediate"}
          {between(value, 51, 70) && "Advanced"}
          {between(value, 71, 100) && "Professional"}
        </p>
      </div>
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
