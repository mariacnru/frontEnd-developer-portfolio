import React, { useContext, useRef, useEffect } from "react";
import { ThemeContext } from "../../../context/Theme";

const FAQItem = React.memo(({ item, isOpen, toggle }) => {
  const { theme } = useContext(ThemeContext);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = isOpen
        ? contentRef.current.scrollHeight + "px"
        : "0px";
    }
  }, [isOpen]);

  return (
    <li>
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
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: 0 }}
      >
        <p className="text-gray-500 mt-4">{item.desceription}</p>
      </div>
    </li>
  );
});

export default FAQItem;
