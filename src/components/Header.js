import React, { useState, useEffect } from "react";
import { Moon } from "lucide-react";
import classnames from "classnames";
import { Link } from 'react-router-dom';


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
    "text-black border-none w-48 md:w-56 mr-6 md:mr-20 flex items-center text-sm md:text-base",
    {
      "text-black": darkMode,
    }
  );

  return (
    <header className="w-full h-20 text-white bg-header flex items-center font-bold -mb-10">
      <Link to="/"><h1 className="text-xl md:text-2xl ml-6 md:ml-12">Where in the world?</h1></Link>
      <div className="md:ml-auto ml-10  md:mr-12">
        <button className={buttonClasses} onClick={toggleDarkMode}>
          <Moon
            color={darkMode ? "black" : "black"}
            fill={darkMode ? "black" : "black"}
            size={26}
            stroke={darkMode ? "black" : "black"}
            className="mr-2 md:mr-3 mb-1"
          />
          <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
