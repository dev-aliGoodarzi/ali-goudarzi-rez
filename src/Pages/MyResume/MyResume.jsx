// React
import React, { useEffect } from "react";
// React
// Components & Modules
// Components & Modules
// Images
import { me } from "../../Components/ImagesExporter/ImagesExporter";
// Images
// CSS
import styles from "./MyResume.module.css";
import Education from "./Education/Education";
import Skills from "./Skills/Skills";
// CSS
const MyResume = ({ themeColor }) => {
  const resumeContainerRef = React.createRef();
  useEffect(() => {
    const timeOut = setTimeout(() => {
      resumeContainerRef.current.style.opacity = 1;
    }, 100);
    return () => {
      clearTimeout(timeOut);
    };
  }, [resumeContainerRef]);

  return (
    <div className={styles.resumeContainer} ref={resumeContainerRef}>
      <div className={`${styles.left}`}>
        <p className={styles.title}>RESUME</p>
        <Education themeColor={themeColor} />
        <Skills themeColor={themeColor} />
      </div>
      <div className={styles.imageContainer}>
        <img src={me} alt="my-pic" />
      </div>
    </div>
  );
};

export default MyResume;
