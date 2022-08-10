import React from "react";
import { me } from "../../Components/ImagesExporter/ImagesExporter";
import CardForEducation from "./CardForEducation/CardForEducation";

import Card from "./CardForExperiance/Card";

import styles from "./MyResume.module.css";

const MyResume = ({ themeColor, fontSize }) => {
  const advantages = [
    {
      id: "advantage1",
      name: "HTML5 & CSS3",
      value: 90,
    },
    {
      id: "advantage2",
      name: "SASS & SCSS",
      value: 85,
    },
    {
      id: "advantage3",
      name: "JavaScript",
      value: 80,
    },
    {
      id: "advantage4",
      name: "React.Js",
      value: 70,
    },
    {
      id: "advantage5",
      name: "TypeScript",
      value: 50,
    },
    {
      id: "advantage6",
      name: "Tailwind",
      value: 40,
    },
    {
      id: "advantage7",
      name: "Node.Js",
      value: 20,
    },
    {
      id: "advantage8",
      name: "Express.Js",
      value: 10,
    },
  ];
  const experience = [
    {
      id: "ex-1",
      name: "FrontEnd Web Developer",
      companyName: "Paliz - Sepidar",
      startTime: "2022/dec",
      endTime: "2022/dec",
      website: "/paliz-sepidar",
      aboutPosition: "After Got the Base UI-UX , I Convert it to Code :) ",
    },
    {
      id: "ex-2",
      name: "FrontEnd Web Developer",
      companyName: "Azad IAU",
      startTime: "2022/may",
      endTime: "present",
      website: "/siah-sefid",
      aboutPosition: "For Score In lessions I wrote this WebPage :)",
    },
    {
      id: "ex-3",
      name: "FrontEnd Web Developer",
      companyName: "My self (pizza)",
      startTime: "2021/dec",
      endTime: "2021/dec",
      website: "/pizza-pwa",
      aboutPosition:
        "When I Started Leadrn React.Js I Tryd To build This Project :)",
    },
    {
      id: "ex-4",
      name: "Bank Teller",
      companyName: "Iran PostBank",
      startTime: "2020/dec",
      endTime: "2021/jul",
      aboutPosition: "Nothing , I was Be a bank Teller In Iran PostBank :)",
      website: "NOWEB",
    },
  ];
  const education = [
    {
      id: "edu-1",
      name: "HTML-CSS",
      teacher: "Mosh Hamedani",
    },
    {
      id: "edu-2",
      name: "Java-Script",
      teacher: "Mosh Hamedani",
    },
    {
      id: "edu-3",
      name: "Java-Script",
      teacher: "Iman Madaeny",
    },
    {
      id: "edu-4",
      name: "TypeScript",
      teacher: "Iman Madaeny",
    },
    {
      id: "edu-5",
      name: "React.Js",
      teacher: "Saheb Mohammadi",
    },
    {
      id: "edu-6",
      name: "React.Js",
      teacher: "Mosh Hamedani",
    },
    {
      id: "edu-7",
      name: "Node.Js",
      teacher: "Erfan Yousefi",
    },
    {
      id: "edu-8",
      name: "Express.Js",
      teacher: "Erfan Yousefi",
    },
  ];
  return (
    <div className={styles.resumeContainer}>
      <div className={styles.left}>
        <p className={styles.title}>RESUME</p>
        <div className={styles.experienceContainer}>
          <p className={styles.containerName}>
            <span style={{ color: themeColor }}>My</span> Experience
          </p>{" "}
          {experience.map((item) => {
            return <Card key={item.id} item={item} themeColor={themeColor} />;
          })}
        </div>
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
        <div className={styles.advantagesContainer}>
          {/* ///////
            TRY TO CONTINUE FROM HERE
            //// */}
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img src={me} alt="my-pic" />
      </div>
    </div>
  );
};

export default MyResume;
