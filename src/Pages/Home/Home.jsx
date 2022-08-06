import React, { useEffect, useState } from "react";

import styles from "./Home.module.css";

import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.overlay}></div>
      <div className={styles.centerContent}>
        <p className={styles.name}>
          <span>Ali</span>
          <span>Goudarzi</span>
        </p>
        <div className={styles.job}>
          <span>I Am A </span>
          <Typewriter
            options={{
              strings: ["Web Developer", "Freelancer"],
              autoStart: true,
              loop: true,
              wrapperClassName: "ss",
              cursorClassName: "cur",
              styles: { height: "100%", display: "flex", flexDirection: "row" }
            }}
          />
        </div>
      </div>

    </div>
  );
};

export default Home;
