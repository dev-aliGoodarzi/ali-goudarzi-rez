import React from "react";

import styles from "./Home.module.css";

import Typewriter from "typewriter-effect";

const Home = ({ themeColor, fontSize }) => {
  return (
    <div className={styles.home}>
      <div className={styles.overlay}></div>
      <div className={styles.centerContent}>
        <p className={styles.name}>
          <span>Ali</span>
          <span style={{ fontSize: `${fontSize && `${fontSize}rem`}` }}>
            Goudarzi
          </span>
        </p>
        <div className={styles.job}>
          <span style={{ paddingRight: "3rem" }}>I Am A </span>
          <Typewriter
            options={{
              strings: ["Mid Level FrontEnd Web Developer .", "Freelancer ."],
              autoStart: true,
              loop: true,
              wrapperClassName: "ss",
              cursorClassName: "cur",
              styles: { height: "100%", display: "flex", flexDirection: "row" },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
