// React
import React from "react";
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";
// React
// CSS
import styles from "./ProjectCard.module.css";
// CSS
const ProjectCard = ({
  data: { nameForShow, pathForRedirect },
  themeColor,
}) => {
  return (
    <Link
      to={`${pathForRedirect}`}
      className={`flex flex-row items-center justify-center  ${styles.projectCard}`}
      data-tip="click to See"
    >
      <ReactTooltip />
      <span className={styles.left} style={{ color: themeColor }}>
        {nameForShow}
      </span>{" "}
    </Link>
  );
};

export default ProjectCard;
