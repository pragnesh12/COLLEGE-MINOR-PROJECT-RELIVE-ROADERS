import React, { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import HeroSection from "./Components/HeroSection/HeroSection";
import Aos from "aos";
import "aos/dist/aos.css";
import About from "./Components/AboutSection/About";

function App() {
  // Dark - Mode Feature
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
  );
  const getElement = document.documentElement;
  useEffect(() => {
    if (theme === "dark") {
      getElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      getElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  //Enimation effects
  React.useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-shine",
      delay: 100,
    });
    Aos.refresh();
  }, []);

  return (
    <>
      <NavBar theme={theme} setTheme={setTheme} />
      <HeroSection theme={theme} />
      <About theme={theme} />
    </>
  );
}

export default App;
