// React
import React from "react";
// React
// CSS
import styles from "./ProjectCard.module.css";
// CSS
// Components
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";
// import Iframe from "react-iframe";
// Components
// Modules
// Modules
const ProjectCard = ({
  data: { nameForShow, pathForRedirect, realRoute },
  themeColor,
}) => {
  return (
    <Link
      to={`${pathForRedirect}`}
      className={`flex flex-row items-center justify-center  ${styles.projectCard}`}
      data-tip="click to See"
    >
      <ReactTooltip />
      {/* Show Personal Projects website */}
      {/* <Iframe
        url={realRoute}
        id=""
        className="iframe"
        display="block"
        position="relative"
      /> */}
      {/* Show Personal Projects website */}
      <span className={styles.left} style={{ color: themeColor }}>
        {nameForShow}
      </span>{" "}
    </Link>
  );
};

export default ProjectCard;
