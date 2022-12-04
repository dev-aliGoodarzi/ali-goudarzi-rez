import React, { useEffect } from "react";
import { me } from "../../Components/ImagesExporter/ImagesExporter";

import { AiOutlineHtml5 } from "react-icons/ai";
import { MdComputer } from "react-icons/md";
import { GiAutoRepair } from "react-icons/gi";
import { FaNodeJs } from "react-icons/fa";

import styles from "./AboutMe.module.css";
import ServicesCard from "./ServicesCard/ServicesCard";
const AboutMe = ({ themeColor, fontSize }) => {
  const aboutRef = React.createRef();
  useEffect(() => {
    const timeOut = setTimeout(() => {
      aboutRef.current.style.opacity = 1;
    }, 100);
    return () => {
      clearTimeout(timeOut);
    };
  }, [aboutRef]);
  const myServices = [
    {
      id: "service-1",
      name: "FrontEnd Web Development",
      image: <AiOutlineHtml5 />,
      content:
        "Modern and mobile-ready website with newest Technology such as React.js .",
    },
    {
      id: "service-2",
      name: "Backend Web Development",
      image: <FaNodeJs />,
      content: "Currently I'm Learning Node.js & Express.Js .",
    },
    {
      id: "service-3",
      name: "build your dream PC",
      image: <MdComputer />,
      content:
        "I can help you to build Your Dream PC & help you to buy best hardware on your money .",
    },
    {
      id: "service-4",
      name: "system repair",
      image: <GiAutoRepair />,
      content:
        "Repairing old systems are so mad , I can help you to repair it and make it fresh .",
    },
  ];
  return (
    <div className={styles.aboutMePageCntainer} ref={aboutRef}>
      <div className={styles.advantagesContainer}>
        <p className={styles.title}>ABOUT ME</p>
        <p className={styles.aboutMe}>
          <span style={{ color: themeColor }}>Hello, I’m Ali</span>, FrontEnd
          web-developer based on Iran / Malayer. I have rich experience in web
          Developing & building and customization . Also I am good at{" "}
          <span style={{ color: themeColor }}>
            html , css , JavaScript , TypeScript , React-TypeScript .
          </span>{" "}
          <br />
          <span>
            Im Trying To be{" ---- "}
            <span style={{ color: themeColor }}>Fullstack{"<MERN>"}</span>
            {" ---- "}
            Developer{"  "} {" :) "}
          </span>
        </p>
        <div className={styles.myServices}>
          <p className={styles.myServicesLOGO}>
            <span
              style={{
                color: themeColor,
                fontSize: `${fontSize && `${fontSize}rem`}`,
              }}
            >
              My
            </span>{" "}
            <span
              style={{
                color: "#fff",
                fontSize: `${fontSize && `${fontSize}rem`}`,
              }}
            >
              Services
            </span>
          </p>
          {myServices.map((item) => (
            <ServicesCard
              key={item.id}
              item={item}
              themeColor={themeColor}
              fontSize={fontSize}
            />
          ))}
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img src={me} alt="my-pic" />
      </div>
    </div>
  );
};

export default AboutMe;
