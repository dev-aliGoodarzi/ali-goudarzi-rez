import React, { useEffect } from "react";
import { me } from "../../Components/ImagesExporter/ImagesExporter";
import ProjectCard from "./ProjectCard/ProjectCard";

import styles from "./MyProjects.module.css";
const MyProjects = ({ themeColor }) => {
  const mySimpleProject = [
    {
      nameForShow: "simple Project1",
      pathForRedirect: "/simpleProject1",
      realRoute: "https://project1.a-goodarzi.ir",
    },
    {
      nameForShow: "simple Project2",
      pathForRedirect: "/simple Project2",
      realRoute: "https://project2.a-goodarzi.ir",
    },
    {
      nameForShow: "simple Project3",
      pathForRedirect: "/simple Project3",
      realRoute: "https://project3.a-goodarzi.ir",
    },
    {
      nameForShow: "simple Project4",
      pathForRedirect: "/simpleProject4",
      realRoute: "https://project4.a-goodarzi.ir",
    },
    {
      nameForShow: "simple Project5",
      pathForRedirect: "/simpleProject5",
      realRoute: "https://project5.a-goodarzi.ir",
    },
    {
      nameForShow: "simple Project6",
      pathForRedirect: "/simpleProject6",
      realRoute: "https://project6.a-goodarzi.ir",
    },
    {
      nameForShow: "simple Project7",
      pathForRedirect: "/simpleProject7",
      realRoute: "https://project7.a-goodarzi.ir",
    },
    {
      nameForShow: "simple Project8",
      pathForRedirect: "/simpleProject8",
      realRoute: "https://project8.a-goodarzi.ir",
    },
    {
      nameForShow: "simple Project9",
      pathForRedirect: "/simpleProject9",
      realRoute: "https://project9.a-goodarzi.ir",
    },
    {
      nameForShow: "simple Project10",
      pathForRedirect: "/simpleProject10",
      realRoute: "https://project10.a-goodarzi.ir",
    },
  ];
  const myAdvanceProjects = [
    {
      nameForShow: "Chocolate shop",
      pathForRedirect: "/ch-land",
      realRoute: "https://chocolatland.com/",
    },
    {
      nameForShow: "Online Calculator",
      pathForRedirect: "/calculator",
      realRoute: "https://calculator.a-goodarzi.ir",
    },
    {
      nameForShow: "CV Creator",
      pathForRedirect: "/cv-creator",
      realRoute: "https://resume-builder.a-goodarzi.ir/",
    },
    {
      nameForShow: "Simple React.Js Shop",
      pathForRedirect: "/shop1",
      realRoute: "https://shop1.a-goodarzi.ir",
    },
    {
      nameForShow: "Simple React.Js Shop",
      pathForRedirect: "/shop2",
      realRoute: "https://shop2.a-goodarzi.ir",
    },
    {
      nameForShow: "Simple React.Js contact-creator",
      pathForRedirect: "/contact-creator",
      realRoute: "https://contact-creator.a-goodarzi.ir",
    },
    {
      nameForShow: "Simple React.Js newsWeb",
      pathForRedirect: "/siah-sefid-mag",
      realRoute: "https://siah-sefid-mag.ir",
    },
    {
      nameForShow: "Simple React.Js fastFood Shop",
      pathForRedirect: "/my-pizza",
      realRoute: "https://my-pizza.ir",
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
        <img src={me} alt="my-pic" className="object-cover"/>
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
