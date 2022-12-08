import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Setting from "./Components/Setting/Setting";
import Sidebar from "./Components/Sidebar/Sidebar";

import AboutMe from "./Pages/AboutMe/AboutMe";
import Error404 from "./Components/Errors/404__NOT__FOUND/E__404";
import MyProjects from "./Pages/MyProjects/MyProjects";
import MyResume from "./Pages/MyResume/MyResume";
import CustomRedirection from "./Components/CustomRedirector/CustomRedirector";

import musicFile from "./music/music.mp3";
import ContactMe from "./Pages/ContactMe/ContactMe";
// import { Particle } from "./Components/Particle/Particle";
const App = () => {
  const [themeColor, setThemeColor] = useState("#ee6192");
  const [fontSize, setFontSize] = useState();
  const music = new Audio(musicFile);

  useEffect(() => {
    music.play();
    music.addEventListener("ended", () => {
      music.play();
    });
  }, []);

  // const memoParticles = useMemo(() => <Particle />, []);
  const dataForProtFolio = [
    {
      pathForRedirect: "/simpleProject1",
      pathInReal: "https://project1.a-goodarzi.ir",
    },
    {
      pathForRedirect: "/simple Project2",
      pathInReal: "https://project2.a-goodarzi.ir",
    },
    {
      pathForRedirect: "/simple Project3",
      pathInReal: "https://project3.a-goodarzi.ir",
    },
    {
      pathForRedirect: "/simpleProject4",
      pathInReal: "https://project4.a-goodarzi.ir",
    },
    {
      pathForRedirect: "/simpleProject5",
      pathInReal: "https://project5.a-goodarzi.ir",
    },
    {
      pathForRedirect: "/simpleProject6",
      pathInReal: "https://project6.a-goodarzi.ir",
    },
    {
      pathForRedirect: "/simpleProject7",
      pathInReal: "https://project7.a-goodarzi.ir",
    },
    {
      pathForRedirect: "/simpleProject8",
      pathInReal: "https://project8.a-goodarzi.ir",
    },
    {
      pathForRedirect: "/simpleProject9",
      pathInReal: "https://project9.a-goodarzi.ir",
    },
    {
      pathForRedirect: "/simpleProject10",
      pathInReal: "https://project10.a-goodarzi.ir",
    },

    {
      pathForRedirect: "/shop1",
      pathInReal: "https://shop1.a-goodarzi.ir",
    },
    {
      pathForRedirect: "/cv-creator",
      pathInReal: "https://resume-builder.a-goodarzi.ir/",
    },
    {
      pathForRedirect: "/ch-land",
      pathInReal: "https://chocolatland.com/",
    },
    {
      pathForRedirect: "/shop2",
      pathInReal: "https://shop2.a-goodarzi.ir",
    },
    {
      pathForRedirect: "/contact-creator",
      pathInReal: "https://contact-creator.a-goodarzi.ir",
    },
    {
      pathForRedirect: "/siah-sefid-mag",
      pathInReal: "https://siah-sefid-mag.ir",
    },
    {
      pathForRedirect: "/my-pizza",
      pathInReal: "https://my-pizza.ir",
    },
    {
      pathForRedirect: "/calculator",
      pathInReal: "https://calculator.a-goodarzi.ir",
    },
  ];
  return (
    <>
      {/* {memoParticles} */}
      <Sidebar themeColor={themeColor} />
      <Setting
        setThemeColor={setThemeColor}
        themeColor={themeColor}
        setFontSize={setFontSize}
        music={music}
      />
      <Routes>
        <Route
          path="/"
          element={<Home themeColor={themeColor} fontSize={fontSize} />}
        />
        <Route
          path="/about-me"
          element={<AboutMe themeColor={themeColor} fontSize={fontSize} />}
        />
        <Route
          path="/my-resume"
          element={<MyResume themeColor={themeColor} fontSize={fontSize} />}
        />
        <Route
          path="/portfolio"
          element={<MyProjects themeColor={themeColor} fontSize={fontSize} />}
        />
        <Route
          path="/instagram"
          element={
            <CustomRedirection
              selectedOutsideRoute={"https://instagram.com/cpk1.5"}
            />
          }
        />
        <Route
          path="/my-github"
          element={
            <CustomRedirection
              selectedOutsideRoute={"https://github.com/M-r-hydra"}
            />
          }
        />{" "}
        <Route
          path="/my-linkedin"
          element={
            <CustomRedirection
              selectedOutsideRoute={
                "https://www.linkedin.com/in/ali-goudarzi-79a07a238/"
              }
            />
          }
        />
        <Route
          path="/my-telegram"
          element={
            <CustomRedirection selectedOutsideRoute={"t.me/mobogram_server"} />
          }
        />
        <Route
          path="/my-discord"
          element={
            <CustomRedirection
              selectedOutsideRoute={"https://discordapp.com/users/hydra#4547"}
            />
          }
        />
        <Route
          path="/contact-me"
          element={<ContactMe themeColor={themeColor} />}
        />
        {dataForProtFolio.map((item) => (
          <Route
            key={item.pathForRedirect}
            path={item.pathForRedirect}
            element={
              <CustomRedirection selectedOutsideRoute={item.pathInReal} />
            }
          />
        ))}
        <Route path="*" element={<Error404 themeColor={themeColor} />} />
      </Routes>
    </>
  );
};

export default App;
