import React from "react";
import Hero from "./components/Hero";
import Philosophy from "./components/Philosophy";
import FutureGoals from "./components/FutureGoals";

function AboutUsPage() {
  return (
    <div className="mx-5 md:mx-20 my-10">
      <Hero />
      <Philosophy />
      <FutureGoals />
    </div>
  );
}

export default AboutUsPage;
