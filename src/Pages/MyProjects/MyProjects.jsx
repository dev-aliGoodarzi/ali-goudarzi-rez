import React, { useEffect } from "react";
import { me } from "../../Components/ImagesExporter/ImagesExporter";
import ProjectCard from "./ProjectCard/ProjectCard";

import styles from "./MyProjects.module.css";
const MyProjects = ({ themeColor }) => {
  const mySimpleProject = [
    {
      nameForShow: "simple Project1",
      pathForRedirect: "/simpleProject1",
      realRoute: "",
    },
    {
      nameForShow: "simple Project2",
      pathForRedirect: "/simple Project2",
      realRoute: "",
    },
    {
      nameForShow: "simple Project3",
      pathForRedirect: "/simple Project3",
      realRoute: "",
    },
    {
      nameForShow: "simple Project4",
      pathForRedirect: "/simpleProject4",
      realRoute: "",
    },
    {
      nameForShow: "simple Project5",
      pathForRedirect: "/simpleProject5",
      realRoute: "",
    },
    {
      nameForShow: "simple Project6",
      pathForRedirect: "/simpleProject6",
      realRoute: "",
    },
    {
      nameForShow: "simple Project7",
      pathForRedirect: "/simpleProject7",
      realRoute: "",
    },
    {
      nameForShow: "simple Project8",
      pathForRedirect: "/simpleProject8",
      realRoute: "",
    },
    {
      nameForShow: "simple Project9",
      pathForRedirect: "/simpleProject9",
      realRoute: "",
    },
    {
      nameForShow: "simple Project10",
      pathForRedirect: "/simpleProject10",
      realRoute: "",
    },
  ];
  const myAdvanceProjects = [
    {
      nameForShow: "Chocolate shop",
      pathForRedirect: "/ch-land",
      realRoute: "",
    },
    {
      nameForShow: "Online Calculator",
      pathForRedirect: "/calculator",
      realRoute: "",
    },
    {
      nameForShow: "CV Creator",
      pathForRedirect: "/cv-creator",
      realRoute: "",
    },
    {
      nameForShow: "Simple React.Js Shop",
      pathForRedirect: "/shop1",
      realRoute: "",
    },
    {
      nameForShow: "Simple React.Js Shop",
      pathForRedirect: "/shop2",
      realRoute: "",
    },
    {
      nameForShow: "Simple React.Js contact-creator",
      pathForRedirect: "/contact-creator",
      realRoute: "",
    },
    {
      nameForShow: "Simple React.Js newsWeb",
      pathForRedirect: "/siah-sefid-mag",
      realRoute: "",
    },
    {
      nameForShow: "Simple React.Js fastFood Shop",
      pathForRedirect: "/my-pizza",
      realRoute: "",
    },
  ];
  const projectsRef = React.createRef();
  useEffect(() => {
    const timeOut = setTimeout(() => {
      projectsRef.current.style.opacity = 1;
    }, 100);
    return () => {
      clearTimeout(timeOut);
    };
  }, [projectsRef]);
  return (
    <div className={`${styles.projectsContainer}`} ref={projectsRef}>
      <div className={styles.imageContainer}>
        <img src={me} alt="my-pic" />
      </div>
      <div
        className={`flex flex-row items-center justify-center  ${styles.projects}`}
      >
        {myAdvanceProjects.map((item) => {
          return (
            <ProjectCard
              key={item.pathForRedirect}
              data={item}
              themeColor={themeColor}
            />
          );
        })}
        {mySimpleProject.map((item) => {
          return (
            <ProjectCard
              key={item.pathForRedirect}
              data={item}
              themeColor={themeColor}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MyProjects;
