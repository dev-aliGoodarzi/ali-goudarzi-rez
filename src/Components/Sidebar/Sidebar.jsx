// React
import React, { useState } from "react";
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
import { MdComputer } from "react-icons/md";
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
import ReactTooltip from "react-tooltip";
//bottom
// Images
// **********************************************
const Sidebar = ({ themeColor }) => {
  // ******************for Change SideBar Color******************
  // ******************for Change SideBar Color******************
  //
  // ***************** for Hide React Tooltip *****************
  const [isTooltipActive, setIsTooltipActive] = useState(false);
  // ***************** for Hide React Tooltip *****************
  const colorChanger = (btnId) => {
    const allLinks = document.getElementById("test").children[1].children;
    [...allLinks].forEach((item) => (item.children[0].style.color = "#fff"));
    document.getElementById(btnId).children[0].style.color = themeColor;
  };
  return (
    <aside className={styles.asideContainer}>
      {isTooltipActive && <ReactTooltip />}
      <div className={styles.top} id="test">
        <div className={styles.logo} style={{ background: themeColor }}>
          A
        </div>
        <div className={styles.helperLinks}>
          <Link
            to="/"
            data-tip="Home"
            id="home"
            onClick={(e) => {
              colorChanger(e.currentTarget.id);
            }}
          >
            <AiOutlineHome
              onMouseEnter={() => setIsTooltipActive(true)}
              onMouseLeave={() => {
                setIsTooltipActive(false);
                setTimeout(() => setIsTooltipActive(true), 50);
              }}
              style={{ color: themeColor }}
            />
          </Link>
          <Link
            to="/about-me"
            data-tip="AboutMe"
            id="AboutMe"
            onMouseEnter={() => setIsTooltipActive(true)}
            onMouseLeave={() => {
              setIsTooltipActive(false);
              setTimeout(() => setIsTooltipActive(true), 50);
            }}
            style={{ color: themeColor }}
            onClick={(e) => {
              colorChanger(e.currentTarget.id);
            }}
          >
            <IoPersonOutline />
          </Link>
          <Link
            to="/my-system"
            id="my-system"
            data-tip="my system"
            onMouseEnter={() => setIsTooltipActive(true)}
            onMouseLeave={() => {
              setIsTooltipActive(false);
              setTimeout(() => setIsTooltipActive(true), 50);
            }}
            onClick={(e) => {
              colorChanger(e.currentTarget.id);
            }}
          >
            <MdComputer />
          </Link>
          <Link
            to="/resume"
            id="my-resume"
            data-tip="my resume"
            onMouseEnter={() => setIsTooltipActive(true)}
            onMouseLeave={() => {
              setIsTooltipActive(false);
              setTimeout(() => setIsTooltipActive(true), 50);
            }}
            onClick={(e) => {
              colorChanger(e.currentTarget.id);
            }}
          >
            <FiSettings />
          </Link>
          <Link
            to="/portfolio"
            id="portfolio"
            data-tip="my portfolio"
            onMouseEnter={() => setIsTooltipActive(true)}
            onMouseLeave={() => {
              setIsTooltipActive(false);
              setTimeout(() => setIsTooltipActive(true), 50);
            }}
            onClick={(e) => {
              colorChanger(e.currentTarget.id);
            }}
          >
            <AiOutlineEye />
          </Link>
          <Link
            to="/blog"
            id="blog"
            data-tip="blog"
            onMouseEnter={() => setIsTooltipActive(true)}
            onMouseLeave={() => {
              setIsTooltipActive(false);
              setTimeout(() => setIsTooltipActive(true), 50);
            }}
            onClick={(e) => {
              colorChanger(e.currentTarget.id);
            }}
          >
            <BsNewspaper />
          </Link>
          <Link
            to="/contact-me"
            data-tip="contact me"
            id="contact-me"
            onMouseEnter={() => setIsTooltipActive(true)}
            onMouseLeave={() => {
              setIsTooltipActive(false);
              setTimeout(() => setIsTooltipActive(true), 50);
            }}
            onClick={(e) => {
              colorChanger(e.currentTarget.id);
            }}
          >
            <AiOutlineMail />
          </Link>
        </div>
      </div>
      <div className={styles.bottomLinks}>
        <div className={styles.helperLinks}>
          <Link
            to="/instagram"
            onMouseEnter={() => setIsTooltipActive(true)}
            onMouseLeave={() => {
              setIsTooltipActive(false);
              setTimeout(() => setIsTooltipActive(true), 50);
            }}
            onClick={(e) => {
              colorChanger(e.currentTarget.id);
            }}
          >
            <AiOutlineInstagram />
          </Link>
          <Link
            to="/my-github"
            onMouseEnter={() => setIsTooltipActive(true)}
            onMouseLeave={() => {
              setIsTooltipActive(false);
              setTimeout(() => setIsTooltipActive(true), 50);
            }}
            onClick={(e) => {
              colorChanger(e.currentTarget.id);
            }}
          >
            <AiFillGithub />
          </Link>
          <Link
            to="/my-telegram"
            onMouseEnter={() => setIsTooltipActive(true)}
            onMouseLeave={() => {
              setIsTooltipActive(false);
              setTimeout(() => setIsTooltipActive(true), 50);
            }}
            onClick={(e) => {
              colorChanger(e.currentTarget.id);
            }}
          >
            <BsTelegram />
          </Link>
          <Link
            to="/my-discord"
            onMouseEnter={() => setIsTooltipActive(true)}
            onMouseLeave={() => {
              setIsTooltipActive(false);
              setTimeout(() => setIsTooltipActive(true), 50);
            }}
            onClick={(e) => {
              colorChanger(e.currentTarget.id);
            }}
          >
            <BsDiscord />
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
