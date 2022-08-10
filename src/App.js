import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Setting from "./Components/Setting/Setting";
import Sidebar from "./Components/Sidebar/Sidebar";

import AboutMe from "./Pages/AboutMe/AboutMe";
import E__404 from "./Components/Errors/404__NOT__FOUND/E__404";
import MySystem from "./Pages/MySystem/MySystem";

import { Particle } from "./Components/Particle/Particle";
import MyResume from "./Pages/MyResume/MyResume";

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
        <Route path="*" element={<E__404 themeColor={themeColor} />} />
      </Routes>
    </>
  );
};

export default App;
