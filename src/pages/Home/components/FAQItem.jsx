import React, { useContext } from "react";
import { ThemeContext } from "../../../context/Theme";

const FAQItem = React.memo(({ item, isOpen, toggle }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <li className="FAQ-item">
      <div
        onClick={() => toggle(item.id)}
        className="flex justify-between items-center cursor-pointer"
      >
        {item.title}
        <img
          src={
            theme === "light"
              ? "/SVGIcons/chevron-down.svg"
              : "/SVGIcons/chevron-down-white.svg"
          }
          alt="icon"
          width={17}
        />
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ease-out ${
          isOpen ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-gray-500">{item.desceription}</p>
      </div>
    </li>
  );
});

export default FAQItem;
