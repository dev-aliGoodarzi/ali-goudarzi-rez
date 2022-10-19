// React
import React from "react";
// React
// CSS
import styles from "./ContactCard.module.css";
// CSS

const ContactCard = ({ data: { name, value, icon }, themeColor }) => {
  return (
    <a
      href={name === "call" ? `tel:${value}` : `mailto:${value}`}
      className={styles.contactCardItem}
      onMouseEnter={(e) => {
        e.currentTarget.style.border = `2px solid ${themeColor}`;
        e.currentTarget.style.borderColor = `${themeColor}`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderWidth = "0";
      }}
    >
      {icon}
      {name === "call" && <span>{value}</span>}
      {name === "mail" && <span>{value}</span>}
    </a>
  );
};

export default ContactCard;
