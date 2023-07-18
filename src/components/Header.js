import React, { useState, useEffect } from "react";
import { Moon } from "lucide-react";
import classnames from "classnames";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    if (darkMode) {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    const header = document.querySelector("header");
    if (darkMode) {
      header.classList.add("dark");
    } else {
      header.classList.remove("dark");
    }
  }, [darkMode]);
  

  const buttonClasses = classnames(
    "text-black border-none  w-48 mr-20 flex items-center text-1xl",
    {
      "text-black": darkMode,
    }
  );

  return (
    <header className="w-full h-20 text-white bg-header flex items-center font-bold">
      <h1 className="text-2xl ml-12">Where in the world?</h1>
      <div className="ml-auto">
        <button className={buttonClasses} onClick={toggleDarkMode}>
          <Moon
            color={darkMode ? "black" : "black"}
            fill={darkMode ? "black" : "black"}
            size={26}
            stroke={darkMode ? "black" : "black"}
            className="mr-2 mb-1"
          />
          <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
