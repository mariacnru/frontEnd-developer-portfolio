import React, { useState } from "react";
import navbar from "../../Data/navbar";
import { NavLink } from "react-router";

function PhoneNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="flex justify-start items-center w-full h-10 p-1 bg-indigo-500 cursor-pointer">
        <img
          src="/SVGIcons/menu-2.svg"
          alt="menu-icon"
          onClick={() => setIsOpen((prev) => !prev)}
        />
      </div>
      <ul
        className={`sm:hidden space-y-5 p-5 bg-white ${isOpen ? "h-fit" : "h-0 opacity-0"} transition`}
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
    </>
  );
}

export default PhoneNavbar;
