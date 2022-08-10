import React from "react";

import styles from "./CardForEducation.module.css";
const CardForEducation = ({ item: { id, name, teacher }, themeColor }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.top}>
        <p className={styles.name} style={{ color: themeColor }}>
          <span style={{ color: "#fff" }}>Course Name :</span> {name}
        </p>
      </div>
      <p className={styles.teacherName}>Teacher Name : {teacher}</p>
    </div>
  );
};

export default CardForEducation;
