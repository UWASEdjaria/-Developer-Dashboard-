import React, { useContext } from "react";
import { ThemeContext } from "../context/Themecontext";

function Navbar() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <nav className='flex flex-row items-center justify-center gap-6 p-5 mt-5 mb-5 font-sans'>
      <h1 className='mr-4 text-2xl font-bold text-left sm:text-2xl md:text-4xl lg:text-5xl'>
        Developer Dashboard
      </h1>
      <button className='p-2 text-xl font-bold text-white bg-blue-500 rounded-lg'
        onClick={toggleTheme}>
        Light / Dark
      </button>
    </nav>
  );
}

export default Navbar;
