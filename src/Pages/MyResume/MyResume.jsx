// React
import React, { useEffect } from "react";
// React
// Components & Modules
import CardForEducation from "./CardForEducation/CardForEducation";
// Components & Modules
// Images
import { me } from "../../Components/ImagesExporter/ImagesExporter";
import { AiOutlineHtml5 } from "react-icons/ai";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
// Images
// CSS
import styles from "./MyResume.module.css";
import CardForSkills from "./CardForSkills/CardForSkills";
// CSS
const MyResume = ({ themeColor, fontSize }) => {
  const resumeContainerRef = React.createRef();
  useEffect(() => {
    const timeOut = setTimeout(() => {
      resumeContainerRef.current.style.opacity = 1;
    }, 100);
    return () => {
      clearTimeout(timeOut);
    };
  }, [resumeContainerRef]);

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
      name: "Node.Js ( Learning )",
      teacher: "Erfan Yousefi",
      icon: <FaNodeJs />,
    },
    {
      id: "edu-8",
      name: "Express.Js ( Learning )",
      teacher: "Erfan Yousefi",
      icon: <SiExpress />,
    },
  ];
  const selfSkills = [
    {
      id: "self-1",
      name: "Lang (Per) Native",
      value: 100,
    },
    {
      id: "self-2",
      name: "Communication",
      value: 90,
    },
    {
      id: "self-3",
      name: "Team Work",
      value: 75,
    },
    {
      id: "self-4",
      name: "Lang (Eng)",
      value: 70,
    },
  ];
  const basicSkills = [
    {
      id: "c-code",
      name: "clean code",
      value: 90,
    },
    {
      id: "linux",
      name: "Linux",
      value: 70,
    },
    {
      id: "git",
      name: "GIT",
      value: 50,
    },
  ];
  const frontEndSkills = [
    {
      id: "frontEnd1",
      name: "HTML5 & CSS3",
      value: 90,
    },
    {
      id: "frontEnd2",
      name: "SASS & SCSS",
      value: 85,
    },
    {
      id: "frontEnd3",
      name: "JavaScript",
      value: 85,
    },
    {
      id: "frontEnd4",
      name: "React.Js",
      value: 80,
    },
    {
      id: "frontEnd5",
      name: "React Hooks",
      value: 70,
    },
    {
      id: "frontEnd6",
      name: "TypeScript",
      value: 60,
    },
    {
      id: "frontEnd7",
      name: "Tailwind",
      value: 50,
    },
  ];
  const backEndSkills = [
    {
      id: "backend 1",
      name: "Node.Js (Learning)",
      value: 25,
    },
    {
      id: "backend 2",
      name: "Express.Js (Learning)",
      value: 10,
    },
    {
      id: "backend 3",
      name: "SQL (Learning)",
      value: 5,
    },
    {
      id: "backend 4",
      name: "MongoDB (Learning)",
      value: 5,
    },
    {
      id: "backend 5",
      name: "Graph QL (Learning)",
      value: 5,
    },
    {
      id: "backend 6",
      name: "Redis (Learning)",
      value: 5,
    },
    {
      id: "backend 7",
      name: "Elastic Search (Learning)",
      value: 5,
    },
    {
      id: "backend 8",
      name: "Socket Writing (Learning)",
      value: 5,
    },
    {
      id: "backend 9",
      name: "Rabbit MQ (Learning)",
      value: 5,
    },
  ];

  return (
    <div className={styles.resumeContainer} ref={resumeContainerRef}>
      <div className={styles.left}>
        <p className={styles.title}>RESUME</p>
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

        <div className={styles.selfSkills}>
          <p className={styles.containerName}>
            <span style={{ color: themeColor }}>My Self</span> Skills
          </p>
          <div className={styles.skillsProgressContainer}>
            {selfSkills.map((item) => {
              return (
                <CardForSkills
                  key={item.id}
                  item={item}
                  themeColor={themeColor}
                />
              );
            })}
          </div>
        </div>
        <div className={styles.programmingSkillsContainer}>
          <p className={styles.containerName}>
            <span style={{ color: themeColor }}>Basic </span> Skills
          </p>
          <div className={styles.skillsProgressContainer}>
            {basicSkills.map((item) => {
              return (
                <CardForSkills
                  key={item.id}
                  item={item}
                  themeColor={themeColor}
                />
              );
            })}
          </div>
        </div>
        <div className={styles.programmingSkillsContainer}>
          <p className={styles.containerName}>
            <span style={{ color: themeColor }}>Front-End</span> Skills
          </p>
          <div className={styles.skillsProgressContainer}>
            {frontEndSkills.map((item) => {
              return (
                <CardForSkills
                  key={item.id}
                  item={item}
                  themeColor={themeColor}
                />
              );
            })}
          </div>
        </div>
        <div className={styles.programmingSkillsContainer}>
          <p className={styles.containerName}>
            <span style={{ color: themeColor }}>Back-End</span> Skills
          </p>
          <div className={styles.skillsProgressContainer}>
            {backEndSkills.map((item) => {
              return (
                <CardForSkills
                  key={item.id}
                  item={item}
                  themeColor={themeColor}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img src={me} alt="my-pic" />
      </div>
    </div>
  );
};

export default MyResume;
