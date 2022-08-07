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
  // refs For color Change
  const hyperLinksRefTop = React.createRef();
  const hyperLinksRefBottom = React.createRef();
  // refs For color Change
  // for Hide React Tooltip
  const [isTooltipActive, setIsTooltipActive] = useState(false);
  // for Hide React Tooltip
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
      {isTooltipActive && <ReactTooltip />}
      <div className={styles.top}>
        <div className={styles.logo} style={{ background: themeColor }}>
          A
        </div>
        <div className={styles.helperLinks} ref={hyperLinksRefTop}>
          <Link to="/" data-tip="Home">
            <AiOutlineHome
              onMouseEnter={() => setIsTooltipActive(true)}
              onMouseLeave={() => {
                setIsTooltipActive(false);
                setTimeout(() => setIsTooltipActive(true), 50);
              }}
              onClick={(e) => colorChanger(e, hyperLinksRefTop)}
              style={{ color: themeColor }}
            />
          </Link>
          <Link
            to="/about-me"
            data-tip="AboutMe"
            onMouseEnter={() => setIsTooltipActive(true)}
            onMouseLeave={() => {
              setIsTooltipActive(false);
              setTimeout(() => setIsTooltipActive(true), 50);
            }}
          >
            <IoPersonOutline
              onClick={(e) => colorChanger(e, hyperLinksRefTop)}
            />
          </Link>
          <Link
            to="/my-system"
            onMouseEnter={() => setIsTooltipActive(true)}
            onMouseLeave={() => {
              setIsTooltipActive(false);
              setTimeout(() => setIsTooltipActive(true), 50);
            }}
            data-tip="my system"
          >
            <MdComputer onClick={(e) => colorChanger(e, hyperLinksRefTop)} />
          </Link>
          <Link
            to="/resume"
            onMouseEnter={() => setIsTooltipActive(true)}
            onMouseLeave={() => {
              setIsTooltipActive(false);
              setTimeout(() => setIsTooltipActive(true), 50);
            }}
            data-tip="my resume"
          >
            <FiSettings onClick={(e) => colorChanger(e, hyperLinksRefTop)} />
          </Link>
          <Link
            to="/portfolio"
            onMouseEnter={() => setIsTooltipActive(true)}
            onMouseLeave={() => {
              setIsTooltipActive(false);
              setTimeout(() => setIsTooltipActive(true), 50);
            }}
            data-tip="my portfolio"
          >
            <AiOutlineEye onClick={(e) => colorChanger(e, hyperLinksRefTop)} />
          </Link>
          <Link
            to="/blog"
            onMouseEnter={() => setIsTooltipActive(true)}
            onMouseLeave={() => {
              setIsTooltipActive(false);
              setTimeout(() => setIsTooltipActive(true), 50);
            }}
            data-tip="blog"
          >
            <BsNewspaper onClick={(e) => colorChanger(e, hyperLinksRefTop)} />
          </Link>
          <Link
            to="/contact-me"
            onMouseEnter={() => setIsTooltipActive(true)}
            onMouseLeave={() => {
              setIsTooltipActive(false);
              setTimeout(() => setIsTooltipActive(true), 50);
            }}
            data-tip="contact me"
          >
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
