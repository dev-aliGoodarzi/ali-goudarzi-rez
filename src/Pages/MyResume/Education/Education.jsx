// React
import React from "react";
// React
// CSS
import styles from "../MyResume.module.css";
// CSS
// Components
import CardForEducation from "./CardForEducation/CardForEducation";
// Components
// Images
import { FaNodeJs } from "react-icons/fa";
import { IoLogoPwa, IoLogoReact } from "react-icons/io5";
import { SiExpress, SiJavascript, SiTypescript } from "react-icons/si";
import { AiOutlineHtml5 } from "react-icons/ai";
// Images

const Education = ({ themeColor }) => {
  const education = [
    {
      id: "edu-1",
      name: "HTML5 & CSS3 , SASS & SCSS",
      teacher: "Mosh Hamedani",
      icon: <AiOutlineHtml5 />,
    },
    {
      id: "edu-2",
      name: "Java-Script",
      teacher: "Mosh Hamedani",
      icon: <SiJavascript />,
    },
    {
      id: "edu-3",
      name: "Java-Script",
      teacher: "Iman Madaeny",
      icon: <SiJavascript />,
    },
    {
      id: "edu-4",
      name: "TypeScript",
      teacher: "Iman Madaeny",
      icon: <SiTypescript />,
    },
    {
      id: "edu-5",
      name: "React.Js",
      teacher: "Saheb Mohammadi",
      icon: <IoLogoReact />,
    },
    {
      id: "edu-6",
      name: "React.Js",
      teacher: "Mosh Hamedani",
      icon: <IoLogoReact />,
    },
    {
      id: "edu-7",
      name: "PWA",
      teacher: "Iman Madaeny",
      icon: <IoLogoPwa />,
    },
    {
      id: "edu-8",
      name: "Node.Js ( Learning )",
      teacher: "Mosh Hamedani",
      icon: <FaNodeJs />,
    },
    {
      id: "edu-9",
      name: "Express.Js ( Learning )",
      teacher: "Mosh Hamedani",
      icon: <SiExpress />,
    },
    {
      id: "edu-10",
      name: "Node.Js ( Learning )",
      teacher: "Erfan Yousefi",
      icon: <FaNodeJs />,
    },
    {
      id: "edu-11",
      name: "Express.Js ( Learning )",
      teacher: "Erfan Yousefi",
      icon: <SiExpress />,
    },
  ];

  return (
    <>
      <div className={styles.educationContainer}>
        <p className={styles.containerName}>
          <span style={{ color: themeColor }}>My</span> Education
        </p>
        {education.map((item) => {
          return (
            <CardForEducation
              key={item.id}
              item={item}
              themeColor={themeColor}
            />
          );
        })}
      </div>
    </>
  );
};

export default Education;
