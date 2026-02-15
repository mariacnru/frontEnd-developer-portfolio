import React, { useContext } from "react";
import ContactBtn from "./ContactBtn";
import navbar from "../../Data/navbar";
import { NavLink } from "react-router";
import { ThemeContext } from "../../context/Theme";

function NavList() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <ul className="flex items-center gap-5 text-sm">
      <li className="">
        <ContactBtn />
      </li>
      {navbar.map((item) => (
        <NavLink
          key={item.id}
          to={item.href}
          className={({ isActive }) => {
            return isActive
              ? "bg-indigo-50 rounded-t-sm py-1 px-2 border-b-2 border-indigo-700 dark:text-stone-800 transition-all duration-300"
              : "border-0 transition-all duration-75";
          }}
        >
          {item.title}
        </NavLink>
      ))}
      <div onClick={toggleTheme}>
        <span className="cursor-pointer">
          {theme === "light" ? (
            <img
              src="/SVGIcons/moon.svg"
              alt="moon-icon"
              loading="lazy"
              width={17}
            />
          ) : (
            <img
              src="/SVGIcons/sun.svg"
              alt="sun-icon"
              loading="lazy"
              width={17}
            />
          )}
        </span>
      </div>
    </ul>
  );
}

export default NavList;
