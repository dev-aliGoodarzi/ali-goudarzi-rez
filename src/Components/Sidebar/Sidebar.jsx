// React
import React, { useState } from "react";
// React
// **********************************************
// CSS
import styles from "./Sidebar.module.css";
// CSS
// **********************************************
// Modules And Components
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
import ReactTooltip from "react-tooltip";
import LinkCustom from "./LinkCustom/LinkCustom";
import { GiHamburgerMenu } from "react-icons/gi";
//bottom
// Images
// **********************************************
const Sidebar = ({ themeColor }) => {
  // ****************** State for Change SideBar Color ******************
  const [topLinksArray, setTopLinksArray] = useState([
    {
      id: "l-1",
      to: "/",
      dataTip: "Home",
      icon: <AiOutlineHome color="inherit" />,
      isBackgroundColored: true,
    },
    {
      id: "l-2",
      to: "/about-me",
      dataTip: "AboutMe",
      icon: <IoPersonOutline color="inherit" />,
      isBackgroundColored: false,
    },

    {
      id: "l-4",
      to: "/my-resume",
      dataTip: "my resume",
      icon: <FiSettings color="inherit" />,
      isBackgroundColored: false,
    },
    {
      id: "l-5",
      to: "/portfolio",
      dataTip: "my portfolio",
      icon: <AiOutlineEye color="inherit" />,
      isBackgroundColored: false,
    },
    {
      id: "l-6",
      to: "/blog",
      dataTip: "blog",
      icon: <BsNewspaper color="inherit" />,
      isBackgroundColored: false,
    },
    {
      id: "l-7",
      to: "/contact-me",
      dataTip: "contact me",
      icon: <AiOutlineMail color="inherit" />,
      isBackgroundColored: false,
    },
  ]);
  const [bottomLinksArray, setBottomLinksArray] = useState([
    {
      id: "l-8",
      to: "/instagram",
      dataTip: "my Instagram Account",
      icon: <AiOutlineInstagram color="inherit" />,
      isBackgroundColored: true,
    },
    {
      id: "l-9",
      to: "/my-github",
      dataTip: "my github Account",
      icon: <AiFillGithub color="inherit" />,
      isBackgroundColored: false,
    },
    {
      id: "l-10",
      to: "/my-telegram",
      dataTip: "my telegram Account",
      icon: <BsTelegram color="inherit" />,
      isBackgroundColored: false,
    },
    {
      id: "l-11",
      to: "/my-discord",
      dataTip: "my discord Account",
      icon: <BsDiscord color="inherit" />,
      isBackgroundColored: false,
    },
  ]);
  // ****************** State for Change SideBar Color ******************
  //
  // ****************** State for toggleMenu In Mobile ******************
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // ****************** State for toggleMenu In Mobile ******************
  //
  // ***************** for Hide React Tooltip *****************
  const [isTooltipActive, setIsTooltipActive] = useState(false);
  // ***************** for Hide React Tooltip *****************
  //
  // ***************** Changing Color Based On state *****************
  //
  // ***************** hamburgerMenuRef *****************
  const hamburgerMenuRef = React.createRef();
  // ***************** hamburgerMenuRef *****************

  const colorChangerTop = (btnId) => {
    const topLinksArrayState = [...topLinksArray];
    const filteredState = topLinksArrayState.map((item) => {
      return {
        ...item,
        isBackgroundColored: false,
      };
    });
    const selectedItemIndex = filteredState.findIndex(
      (item) => item.id === btnId
    );
    filteredState[selectedItemIndex].isBackgroundColored = true;
    setTopLinksArray(filteredState);
  };
  const colorChangerBottom = (btnId) => {
    const bottomLinksArrayState = [...bottomLinksArray];
    const filteredState = bottomLinksArrayState.map((item) => {
      return {
        ...item,
        isBackgroundColored: false,
      };
    });
    const selectedItemIndex = filteredState.findIndex(
      (item) => item.id === btnId
    );
    filteredState[selectedItemIndex].isBackgroundColored = true;
    setBottomLinksArray(filteredState);
  };
  // ***************** Changing Color Based On state *****************
  return (
    <aside className={styles.asideContainer}>
      {isTooltipActive && <ReactTooltip />}
      <div className={styles.top} id="test">
        <div className={styles.logo} style={{ background: themeColor }}>
          {window.innerWidth < 600 ? (
            <div
              className={styles.hamburgerMenuContainer}
              ref={hamburgerMenuRef}
              onClick={() => setIsMenuOpen((prevState) => !prevState)}
            >
              <GiHamburgerMenu />
            </div>
          ) : (
            "A"
          )}
        </div>
        {}
        <div
          className={`${styles.helperLinks} ${
            window.innerWidth < 600 && isMenuOpen && styles.open
          }`}
        >
          {topLinksArray.map((item) => (
            <LinkCustom
              data={item}
              key={item.id}
              themeColor={themeColor}
              onClick={(e) => {
                colorChangerTop(e.currentTarget.id);
                setIsMenuOpen(false);
              }}
              onMouseEnter={() => setIsTooltipActive(true)}
              onMouseLeave={() => {
                setIsTooltipActive(false);
                setTimeout(() => setIsTooltipActive(true), 50);
              }}
            ></LinkCustom>
          ))}
        </div>
      </div>
      <div className={styles.bottomLinks}>
        <div className={styles.helperLinks}>
          {bottomLinksArray.map((item) => (
            <LinkCustom
              data={item}
              key={item.id}
              themeColor={themeColor}
              onClick={(e) => {
                colorChangerBottom(e.currentTarget.id);
              }}
              onMouseEnter={() => setIsTooltipActive(true)}
              onMouseLeave={() => {
                setIsTooltipActive(false);
                setTimeout(() => setIsTooltipActive(true), 50);
              }}
            />
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
