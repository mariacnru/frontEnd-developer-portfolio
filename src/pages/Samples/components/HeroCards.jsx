import React, { useContext } from "react";
import { ThemeContext } from "../../../context/Theme";

function HeroCards() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="hero-cards">
      <div className="hero-cards-item">
        <span className="">کد نویسی اصولی و بهینه</span>
      </div>
      <div className="hero-cards-item">
        <span className="">رعایت اصول Clean Code</span>
      </div>
      <div className="hero-cards-item">
        <span className="">Performance عالی</span>
      </div>
    </div>
  );
}

export default HeroCards;
