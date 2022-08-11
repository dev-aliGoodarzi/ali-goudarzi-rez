import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Setting from "./Components/Setting/Setting";
import Sidebar from "./Components/Sidebar/Sidebar";

import AboutMe from "./Pages/AboutMe/AboutMe";
import E__404 from "./Components/Errors/404__NOT__FOUND/E__404";
import MySystem from "./Pages/MySystem/MySystem";

// import { Particle } from "./Components/Particle/Particle";
import MyResume from "./Pages/MyResume/MyResume";
import CustomRedirection from "./Components/CustomRedirector/CustomRedirector";

const App = () => {
  const [themeColor, setThemeColor] = useState("#ee6192");
  const [fontSize, setFontSize] = useState();

  return (
    <>
      {/* <Particle /> */}
      <Sidebar themeColor={themeColor} />
      <Setting
        setThemeColor={setThemeColor}
        themeColor={themeColor}
        setFontSize={setFontSize}
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
          path="/my-system"
          element={<MySystem themeColor={themeColor} fontSize={fontSize} />}
        />
        <Route
          path="/my-resume"
          element={<MyResume themeColor={themeColor} fontSize={fontSize} />}
        />
        <Route
          path="instagram"
          element={
            <CustomRedirection
              selectedOutsideRoute={"https://instagram.com/cpk1.5"}
            />
          }
        />
        <Route
          path="paliz-sepidar"
          element={
            <CustomRedirection
              selectedOutsideRoute={"https://paliz-sepidar.ir"}
            />
          }
        />
        <Route
          path="siah-sefid"
          element={
            <CustomRedirection
              selectedOutsideRoute={"https://siah-sefid-mag.ir"}
            />
          }
        />
        <Route
          path="pizza-pwa"
          element={
            <CustomRedirection selectedOutsideRoute={"https://my-pizza.ir"} />
          }
        />
        <Route
          path="mini-projects"
          element={
            <CustomRedirection
              selectedOutsideRoute={"https://my-template.ir"}
            />
          }
        />
        <Route
          path="my-github"
          element={
            <CustomRedirection
              selectedOutsideRoute={"https://github.com/M-r-hydra"}
            />
          }
        />
        <Route
          path="my-telegram"
          element={
            <CustomRedirection selectedOutsideRoute={"t.me/mobogram_server"} />
          }
        />
        <Route
          path="my-discord"
          element={
            <CustomRedirection
              selectedOutsideRoute={"https://discordapp.com/users/hydra#4547"}
            />
          }
        />
        <Route path="*" element={<E__404 themeColor={themeColor} />} />
      </Routes>
    </>
  );
};

export default App;
