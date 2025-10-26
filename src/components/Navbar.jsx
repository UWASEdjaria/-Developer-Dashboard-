import React, { useContext } from "react";
import { ThemeContext } from "../context/Themecontext";

function Navbar() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <nav className='flex flex-row font-sans justify-center items-center gap-6 p-5 mt-5 mb-5'>
      <h1 className='text-2xl text-left sm:text-2xl md:text-4xl lg:text-5xl font-bold mr-4'>
        Developer Dashboard
      </h1>
      <button className='bg-blue-500 text-xl font-bold text-white rounded-lg p-2'
        onClick={toggleTheme}>
        Light / Dark
      </button>
    </nav>
  );
}

export default Navbar;
