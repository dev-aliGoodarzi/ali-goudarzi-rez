import React, { useEffect } from "react";
import { me } from "../../Components/ImagesExporter/ImagesExporter";
import ProjectCard from "./ProjectCard/ProjectCard";

import styles from "./MyProjects.module.css";
const MyProjects = ({ themeColor }) => {
  const mySimpleProject = [
    {
      nameForShow: "simple Project1",
      pathForRedirect: "/simpleProject1",
    },
    {
      nameForShow: "simple Project2",
      pathForRedirect: "/simple Project2",
    },
    {
      nameForShow: "simple Project3",
      pathForRedirect: "/simple Project3",
    },
    {
      nameForShow: "simple Project4",
      pathForRedirect: "/simpleProject4",
    },
    {
      nameForShow: "simple Project5",
      pathForRedirect: "/simpleProject5",
    },
    {
      nameForShow: "simple Project6",
      pathForRedirect: "/simpleProject6",
    },
    {
      nameForShow: "simple Project7",
      pathForRedirect: "/simpleProject7",
    },
    {
      nameForShow: "simple Project8",
      pathForRedirect: "/simpleProject8",
    },
    {
      nameForShow: "simple Project9",
      pathForRedirect: "/simpleProject9",
    },
    {
      nameForShow: "simple Project10",
      pathForRedirect: "/simpleProject10",
    },
  ];
  const myAdvanceProjects = [
    {
      nameForShow: "Chocolate shop",
      pathForRedirect: "/ch-land",
    },
    {
      nameForShow: "Online Calculator",
      pathForRedirect: "/calculator",
    },
    {
      nameForShow: "CV Creator",
      pathForRedirect: "/cv-creator",
    },
    {
      nameForShow: "Simple React.Js Shop",
      pathForRedirect: "/shop1",
    },
    {
      nameForShow: "Simple React.Js Shop",
      pathForRedirect: "/shop2",
    },
    {
      nameForShow: "Simple React.Js contact-creator",
      pathForRedirect: "/contact-creator",
    },
    {
      nameForShow: "Simple React.Js newsWeb",
      pathForRedirect: "/siah-sefid-mag",
    },
    {
      nameForShow: "Simple React.Js fastFood Shop",
      pathForRedirect: "/my-pizza",
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
    <div className={styles.projectsContainer} ref={projectsRef}>
      <div className={styles.imageContainer}>
        <img src={me} alt="my-pic" />
      </div>
      <div
        className={`flex flex-col items-center justify-center  ${styles.projects}`}
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
