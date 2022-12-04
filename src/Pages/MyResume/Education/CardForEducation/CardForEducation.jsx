import React from "react";

import styles from "./CardForEducation.module.css";
const CardForEducation = ({
  item: { id, name, teacher, icon },
  themeColor,
}) => {
  return (
    <div
      className={styles.cardContainer}
      onMouseEnter={(e) => {
        e.currentTarget.style.border = `2px solid ${themeColor}`;
        //  .style.fontSize = "5rem";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.border = "0";
      }}
    >
      <div className={styles.left}>
        <div className={styles.top}>
          <p className={styles.name} style={{ color: themeColor }}>
            <span style={{ color: "#fff" }}>Course Name : </span>
            {window.innerWidth < 600 && <br />}
            {name}
          </p>
        </div>
        <p className={styles.teacherName}>
          Teacher Name :{" "}
          <span style={{ color: themeColor }}>
            {window.innerWidth < 600 && <br />}
            {teacher}
          </span>
        </p>
      </div>
      <div className={styles.right} style={{ color: themeColor }}>
        {icon}
      </div>
    </div>
  );
};

export default CardForEducation;
