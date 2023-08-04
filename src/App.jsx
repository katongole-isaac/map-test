/**
 * Entry point for the app
 *
 */

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Sidebar from "./components/sidebar";
import SearchArea from "./components/searchArea";
import Map from "./components/map";
import MotionDemo from "./components/motionDemos";

export const ThemeContext = React.createContext(null);

function App() {
  const [userTheme, setUserTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  const themeSwitch = () => {
    const systemPreference = window.matchMedia(
      "(prefers-color-schema: dark)"
    ).matches; // system preferences

    // setting dark theme
    if (userTheme === "dark" || (!userTheme && systemPreference)) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setUserTheme("dark");
      return;
    }
    // setting light theme
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    setUserTheme("light");
  };

  useEffect(() => {
    themeSwitch();
  }, [userTheme]);

  const handleThemeToggle = () => {
    setUserTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <React.Fragment>
      <ThemeContext.Provider value={{ userTheme, handleThemeToggle }}>
        <div className="w-[100vw] h-[100vh] bg-neutral-50 overflow-hidden ">
          <div className="grid grid-cols-[80px_3fr_420px]  w-full h-full">
            {/* sidebar */}
            <div className="bg-neutral-100  dark:bg-neutral-900">
              <Sidebar />
            </div>

            {/* map */}
            <div className="w-full h-[100vh] relative bg-gray-200 dark:bg-neutral-900 border-x-2 border-gray-300 dark:border-neutral-800 ">
              <Map />

              {/* <MotionDemo /> */}
            </div>

            {/* search area */}
            <div className="bg-gray-100 dark:bg-neutral-800 ">
              <SearchArea />
            </div>
          </div>
        </div>
      </ThemeContext.Provider>
    </React.Fragment>
  );
}

export default App;
