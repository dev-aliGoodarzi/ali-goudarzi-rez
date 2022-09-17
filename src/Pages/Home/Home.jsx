import React, { useEffect } from "react";

import styles from "./Home.module.css";

import Typewriter from "typewriter-effect";

const Home = ({ themeColor, fontSize }) => {
  const homeRef = React.createRef();
  useEffect(() => {
    const timeOut = setTimeout(() => {
      homeRef.current.style.opacity = 1;
    }, 100);
    return () => {
      clearTimeout(timeOut);
    };
  }, [homeRef]);
  return (
    <div className={styles.home} ref={homeRef}>
      <div className={styles.overlay}></div>
      <div className={styles.centerContent}>
        <p className={styles.name}>
          <span>Ali</span>
          <span style={{ fontSize: `${fontSize && `${fontSize}rem`}` }}>
            Goudarzi
          </span>
        </p>
        <div className={styles.job}>
          <span style={{ paddingRight: "1rem" }}>I Am </span>
          <Typewriter
            options={{
              strings: [
                "Mid Level FrontEnd Web Developer .",
                "Freelancer .",
                "Learning right now Node.Js & Express.Js .",
                "Trying To be MERN Stack Web Developer .",
              ],
              autoStart: true,
              loop: true,
              wrapperClassName: "ss",
              cursorClassName: "cur",
              styles: {
                height: "100%",
                display: "flex",
                flexDirection: "row",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
