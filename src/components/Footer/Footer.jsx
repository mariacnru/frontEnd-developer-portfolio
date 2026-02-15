import React from "react";
import Lsit from "./Lsit";
import Contact from "./Contact";

function Footer() {
  return (
    <footer>
      <ul className="flex flex-col sm:flex-row gap-5 sm:justify-between items-center">
        <li>
          <Lsit />
        </li>
        <li>
          <span className="text-sm font-semibold text-indigo-700">
            مریم احمدآبادی
          </span>
        </li>
      </ul>

      <Contact />

      <p className="text-center text-xs text-gray-500">
        توسعه داده شده توسط مریم احمدآبادی
      </p>
    </footer>
  );
}

export default Footer;
