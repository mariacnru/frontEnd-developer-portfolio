import React, { useContext } from "react";
import ContactBtn from "./ContactBtn";
import navbar from "../../Data/navbar";
import { NavLink } from "react-router";
import { ThemeContext } from "../../context/Theme";

function NavList() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <ul className="hidden sm:flex items-center gap-5 text-sm">
      <li className="">
        <ContactBtn />
      </li>
      {navbar.map((item) => (
        <li key={item.id}>
          <NavLink
            to={item.href}
            className={({ isActive }) =>
              isActive
                ? "bg-indigo-50 rounded-t-sm py-1 px-2 border-b-2 border-indigo-700 dark:text-stone-800 transition-all duration-300"
                : "border-0 transition-all duration-75"
            }
          >
            {item.title}
          </NavLink>
        </li>
      ))}
      <li>
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
      </li>
    </ul>
  );
}

export default NavList;
