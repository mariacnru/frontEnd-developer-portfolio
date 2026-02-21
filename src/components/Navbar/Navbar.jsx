import React, { useContext } from "react";
import NavList from "./NavList";
import { ThemeContext } from "../../context/Theme";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <nav>
      <NavList />
      <button
        onClick={toggleTheme}
        aria-label="Toggle theme"
        className="cursor-pointer"
      >
        <img
          src={theme === "light" ? "/SVGIcons/moon.svg" : "/SVGIcons/sun.svg"}
          alt=""
          width={17}
        />
      </button>
    </nav>
  );
}

export default Navbar;
