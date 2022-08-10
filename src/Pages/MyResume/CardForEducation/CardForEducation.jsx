import React from "react";

import styles from "./CardForEducation.module.css";
const CardForEducation = ({
  item: { id, name, teacher, icon },
  themeColor,
}) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.left}>
        <div className={styles.top}>
          <p className={styles.name} style={{ color: themeColor }}>
            <span style={{ color: "#fff" }}>Course Name :</span> {name}
          </p>
        </div>
        <p className={styles.teacherName}>
          Teacher Name : <span style={{ color: themeColor }}>{teacher}</span>
        </p>
      </div>
      <div className={styles.right} style={{ color: themeColor }}>
        {icon}
      </div>
    </div>
  );
};

export default CardForEducation;
