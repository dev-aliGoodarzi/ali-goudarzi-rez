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
      name: "Clean code",
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
    {
      id: "docker",
      name: "Docker ( Learning )",
      value: 10,
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
  const programmingLanguagesSkills = [
    {
      id: "frontEnd3",
      name: "JavaScript",
      value: 90,
    },
    {
      id: "frontEnd6",
      name: "TypeScript",
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
      value: 90,
    },

    {
      id: "frontEnd4",
      name: "React.Js ( .tsx )",
      value: 85,
    },
    {
      id: "frontEnd5",
      name: "React Hooks",
      value: 80,
    },

    {
      id: "frontEnd7",
      name: "Tailwind",
      value: 60,
    },
  ];
  const backEndSkills = [
    {
      id: "backend 1",
      name: "Node.Js (Learning)",
      value: 40,
    },
    {
      id: "backend 2",
      name: "Express.Js (Learning)",
      value: 30,
    },
    {
      id: "backend 10",
      name: "Koa.Js (Learning)",
      value: 5,
    },
    {
      id: "backend 16",
      name: "Fastify.Js (Learning)",
      value: 5,
    },
  ];
  const databaseSkills = [
    {
      id: "backend 3",
      name: "SQL (Learning)",
      value: 5,
    },
    {
      id: "backend 4",
      name: "NoSQL => MongoDB (Learning)",
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
  ];
  const microServiceSkills = [
    {
      id: "backend 9",
      name: "Rabbit MQ (Learning)",
      value: 5,
    },
    {
      id: "backend 15",
      name: "gRPC (Learning)",
      value: 5,
    },
  ];
  const apiWritingSkills = [
    {
      id: "backend 12",
      name: "REST Api",
      value: 70,
    },
    {
      id: "backend 5",
      name: "Graph QL (Learning)",
      value: 5,
    },
    {
      id: "backend 8",
      name: "Socket Writing (Learning)",
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
      <div className={styles.selfSkills}>
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
      <div className={styles.selfSkills}>
        <p className={styles.containerName}>
          <span style={{ color: themeColor }}>Programming </span> Skills
        </p>
        <div className={styles.skillsProgressContainer}>
          {programmingLanguagesSkills.map((item) => {
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
      <div className={styles.selfSkills}>
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
      <div className={styles.selfSkills}>
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
      </div>{" "}
      <div className={styles.selfSkills}>
        <p className={styles.containerName}>
          <span style={{ color: themeColor }}>Data Base</span> Skills
        </p>
        <div className={styles.skillsProgressContainer}>
          {databaseSkills.map((item) => {
            return (
              <CardForSkills
                key={item.id}
                item={item}
                themeColor={themeColor}
              />
            );
          })}
        </div>
      </div>{" "}
      <div className={styles.selfSkills}>
        <p className={styles.containerName}>
          <span style={{ color: themeColor }}>Api Writing</span> Skills
        </p>
        <div className={styles.skillsProgressContainer}>
          {apiWritingSkills.map((item) => {
            return (
              <CardForSkills
                key={item.id}
                item={item}
                themeColor={themeColor}
              />
            );
          })}
        </div>
      </div>{" "}
      <div className={styles.selfSkills}>
        <p className={styles.containerName}>
          <span style={{ color: themeColor }}>MicroService</span> Skills
        </p>
        <div className={styles.skillsProgressContainer}>
          {microServiceSkills.map((item) => {
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
