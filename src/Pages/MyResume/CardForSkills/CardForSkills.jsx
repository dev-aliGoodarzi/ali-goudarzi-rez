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
      <progress
        value={value}
        max={100}
        style={{
          background: "#1d1e21e1",
        }}
      />
    </div>
  );
};

export default CardForSkills;
