import React from "react";

import styles from "./ServicesCard.module.css";
const ServicesCard = ({
  item: { id, name, image, content },
  themeColor,
  fontSize,
}) => {
  return (
    <div
      className={styles.serviceCard}
      onMouseEnter={(event) => {
        event.currentTarget.style.borderColor = themeColor;
      }}
      onMouseOut={(event) => {
        event.currentTarget.style.borderColor = undefined;
      }}
    >
      <div className={styles.logoContainer} style={{ color: themeColor }}>
        {image}
      </div>
      <p
        style={{
          color: themeColor,
          fontWeight: "bold ",
          fontSize: `${fontSize && `${fontSize}rem`}`,
        }}
      >
        {name}
      </p>
      <p
        style={{
          color: themeColor,
          fontSize: `${fontSize && `${fontSize}rem`}`,
        }}
      >
        {content}
      </p>
    </div>
  );
};

export default ServicesCard;
