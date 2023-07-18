import React from "react";
import { Moon } from 'lucide-react';

const Header = () => {
  return (
    <header class="w-full h-20 text-white bg-header flex items-center font-bold ">
      <h1 class="text-2xl ml-12 ">Where in the world</h1>
      <div class="ml-auto "> 
             
        <button class="text-white border-nonew-48 mr-20 flex items-center text-1xl "><Moon color="black" className="mr-2" />Dark Mode</button>
      </div>
    </header>
  );
  
};

export default Header;
