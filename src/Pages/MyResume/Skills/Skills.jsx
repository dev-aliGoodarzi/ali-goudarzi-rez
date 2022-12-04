// React
import React from "react";
// React
// CSS
import styles from "../MyResume.module.css";
// CSS
// Components
import CardForSkills from "./CardForSkills/CardForSkills";
// Components

const Skills = ({ themeColor }) => {
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
    <>
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
    </>
  );
};

export default Skills;
