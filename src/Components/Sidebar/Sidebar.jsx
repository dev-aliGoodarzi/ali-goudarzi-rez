// React
import React from "react";
// React
// **********************************************
// CSS
import styles from "./Sidebar.module.css";
// CSS
// **********************************************
// Modules And Components
import { Link } from "react-router-dom";
// Modules And Components
// **********************************************
// Images
//top
import { AiOutlineHome } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { FiSettings } from "react-icons/fi";
import { AiOutlineEye } from "react-icons/ai";
import { BsNewspaper } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
//top
//bottom
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import { BsDiscord } from "react-icons/bs";
//bottom
// Images
// **********************************************
const Sidebar = ({ themeColor }) => {
  const hyperLinksRefTop = React.createRef();
  const hyperLinksRefBottom = React.createRef();
  const colorChanger = (event, selectedParentRef) => {
    [...selectedParentRef.current.children].forEach((item) => {
      [...item.children].forEach(
        (selectedEl) => (selectedEl.style.color = "#fff")
      );
    });
    event.currentTarget.style.color = themeColor;
  };
  return (
    <aside className={styles.asideContainer}>
      <div className={styles.top}>
        <div className={styles.logo} style={{ background: themeColor }}>
          A
        </div>
        <div className={styles.helperLinks} ref={hyperLinksRefTop}>
          <Link to="/">
            <AiOutlineHome
              onClick={(e) => colorChanger(e, hyperLinksRefTop)}
              style={{ color: themeColor }}
            />
          </Link>
          <Link to="/about-me">
            <IoPersonOutline
              onClick={(e) => colorChanger(e, hyperLinksRefTop)}
            />
          </Link>
          <Link to="/resume">
            <FiSettings onClick={(e) => colorChanger(e, hyperLinksRefTop)} />
          </Link>
          <Link to="/portfolio">
            <AiOutlineEye onClick={(e) => colorChanger(e, hyperLinksRefTop)} />
          </Link>
          <Link to="/blog">
            <BsNewspaper onClick={(e) => colorChanger(e, hyperLinksRefTop)} />
          </Link>
          <Link to="/contact-me">
            <AiOutlineMail onClick={(e) => colorChanger(e, hyperLinksRefTop)} />
          </Link>
        </div>
      </div>
      <div className={styles.bottomLinks}>
        <div className={styles.helperLinks} ref={hyperLinksRefBottom}>
          <Link to="/instagram">
            <AiOutlineInstagram
              onClick={(e) => colorChanger(e, hyperLinksRefBottom)}
            />
          </Link>
          <Link to="/my-github">
            <AiFillGithub
              onClick={(e) => colorChanger(e, hyperLinksRefBottom)}
            />
          </Link>
          <Link to="/my-telegram">
            <BsTelegram onClick={(e) => colorChanger(e, hyperLinksRefBottom)} />
          </Link>
          <Link to="/my-discord">
            <BsDiscord onClick={(e) => colorChanger(e, hyperLinksRefBottom)} />
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
