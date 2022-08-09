// React
import React from "react";
import { Fade } from "react-reveal";
import {
  caseIcon,
  cpu,
  gpu,
  hdd,
  mb,
  monitor,
  mySystemBgImg,
  ram,
} from "../../Components/ImagesExporter/ImagesExporter";
// React

// CSS
import styles from "./MySystem.module.css";
import SystemCard from "./SystemCard/SystemCard";
// CSS
const MySystem = ({ themeColor, fontSize }) => {
  const system = [
    {
      id: 1,
      hardwareName: "CPU",
      hardwareAbout: "Intel I5 7500",
      iconType: "component",
      icon: cpu,
      goFrom: "left",
    },
    {
      id: 2,
      hardwareName: "MotherBoard",
      hardwareAbout: "ASUS Z270-p D4",
      icon: mb,
      goFrom: "right",
    },
    {
      id: 3,
      hardwareName: "GPU",
      hardwareAbout: "ASUS GTX 1650 Dual",
      icon: gpu,
      goFrom: "left",
    },
    {
      id: 4,
      hardwareName: "Ram",
      hardwareAbout: "1x 16gb Apacer 2400mhz",
      icon: ram,
      goFrom: "right",
    },
    {
      id: 6,
      hardwareName: "H.D.D",
      hardwareAbout: "1TB WD-EZEX",
      icon: hdd,
      goFrom: "right",
    },
    {
      id: 7,
      hardwareName: "Monitor 1",
      hardwareAbout: "Samsung LFT350 27' ",
      icon: monitor,
      goFrom: "left",
    },
    {
      id: 8,
      hardwareName: "Monitor 2",
      hardwareAbout: "ASUS VP228HE 22' ",
      icon: monitor,
      goFrom: "right",
    },
    {
      id: 9,
      hardwareName: "CASE",
      hardwareAbout: "MasterTech S500",
      iconType: "user",
      icon: caseIcon,
      goFrom: "left",
    },
  ];
  return (
    <div className={styles.mySystemContainer}>
      <div className={styles.bg}>
        <div className={styles.darking}></div>
        <img className={styles.bg} src={mySystemBgImg} alt="" />
      </div>
      <h1>My System</h1>
      <div className={styles.systemContainer}>
        {system.map((item) => {
          return (
            <Fade
              left={item.goFrom === "left"}
              right={item.goFrom === "right"}
              key={item.id}
            >
              <SystemCard
                data={item}
                themeColor={themeColor}
                fontSize={fontSize}
              />
            </Fade>
          );
        })}
      </div>
    </div>
  );
};

export default MySystem;
