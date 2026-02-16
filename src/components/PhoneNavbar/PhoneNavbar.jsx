import React, { useContext, useState } from "react";
import navbar from "../../Data/navbar";
import { NavLink } from "react-router";
import { ThemeContext } from "../../context/Theme";

function PhoneNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="sm:hidden mb-5">
      <div className="flex justify-between items-center w-full h-10 p-1 bg-indigo-500 cursor-pointer">
        <img
          src="/SVGIcons/menu-2.svg"
          alt="menu-icon"
          onClick={() => setIsOpen((prev) => !prev)}
        />

        <div onClick={toggleTheme}>
          <span className="cursor-pointer">
            {theme === "light" ? (
              <img
                src="/SVGIcons/moon.svg"
                alt="moon-icon"
                loading="lazy"
                width={19}
              />
            ) : (
              <img
                src="/SVGIcons/sun.svg"
                alt="sun-icon"
                loading="lazy"
                width={19}
              />
            )}
          </span>
        </div>
      </div>
      <ul
        className={`space-y-5 bg-white dark:bg-gray-800 ${isOpen ? "h-fit opacity-100 p-5" : "h-0 opacity-0 p-0"} transition`}
      >
        {navbar.map((item) => (
          <li
            key={item.id}
            className="text-sm cursor-pointer hover:text-indigo-500"
          >
            <NavLink
              to={item.href}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => {
                return isActive
                  ? "bg-indigo-50 rounded-l-sm py-0.5 px-2 border-r-2 border-indigo-700 dark:text-stone-800 transition-all duration-300"
                  : "border-0 transition-all duration-75";
              }}
            >
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PhoneNavbar;
