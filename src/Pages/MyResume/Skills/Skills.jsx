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
      value: 60,
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
      value: 85,
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
      value: 80,
    },
    {
      id: "frontEnd88",
      name: "C#",
      value: 40,
    },
    {
      id: "frontEnd65",
      name: "Python",
      value: 20,
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
      value: 85,
    },
    {
      id: "frontEnd8",
      name: "PWA",
      value: 75,
    },
    {
      id: "frontEnd7",
      name: "Tailwind",
      value: 70,
    },
  ];
  const backEndSkills = [
    {
      id: "backend 1",
      name: "Node.Js",
      value: 40,
    },
    {
      id: "backend 2",
      name: "Express.Js",
      value: 30,
    },
    {
      id: "backend 10",
      name: "Koa.Js",
      value: 5,
    },
    {
      id: "backend 16",
      name: "Fastify.Js",
      value: 5,
    },
  ];
  const databaseSkills = [
    {
      id: "backend 3",
      name: "SQL",
      value: 5,
    },
    {
      id: "backend 4",
      name: "NoSQL => MongoDB",
      value: 5,
    },
    {
      id: "backend 6",
      name: "Redis",
      value: 5,
    },
    {
      id: "backend 7",
      name: "Elastic Search",
      value: 5,
    },
  ];
  const microServiceSkills = [
    {
      id: "backend 9",
      name: "Rabbit MQ",
      value: 5,
    },
    {
      id: "backend 15",
      name: "gRPC",
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
      name: "Graph QL",
      value: 5,
    },
    {
      id: "backend 8",
      name: "Socket Writing",
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
          <span style={{ color: themeColor }}>Back-End</span> Skills{" "}
          <span
            style={{
              color: themeColor,
              fontSize: "60%",
              marginLeft: "2rem",
              marginTop: "0.4rem",
            }}
          >
            {`( Learning )`}
          </span>
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
      <div className={styles.selfSkills}>
        <p className={styles.containerName}>
          <span style={{ color: themeColor }}>Data Base</span> Skills
          <span
            style={{
              color: themeColor,
              fontSize: "60%",
              marginLeft: "2rem",
              marginTop: "0.4rem",
            }}
          >
            {`( Learning )`}
          </span>
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
      </div>
      <div className={styles.selfSkills}>
        <p className={styles.containerName}>
          <span style={{ color: themeColor }}>Api Writing</span> Skills
          <span
            style={{
              color: themeColor,
              fontSize: "60%",
              marginLeft: "2rem",
              marginTop: "0.4rem",
            }}
          >
            {`( Learning )`}
          </span>
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
      </div>
      <div className={styles.selfSkills}>
        <p className={styles.containerName}>
          <span style={{ color: themeColor }}>MicroService</span> Skills
          <span
            style={{
              color: themeColor,
              fontSize: "60%",
              marginLeft: "2rem",
              marginTop: "0.4rem",
            }}
          >
            {`( Learning )`}
          </span>
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
