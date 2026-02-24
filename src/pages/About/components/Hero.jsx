import React from "react";
import HeroIntro from "./HeroIntro";

function Hero() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <HeroIntro />
      <img
        src="/public/images/about/About me.svg"
        alt=""
        className="hero-image"
      />
    </div>
  );
}

export default Hero;
