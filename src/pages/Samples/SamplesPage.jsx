import React from "react";
import Hero from "./components/Hero";
import HeroCards from "./components/HeroCards";
import SampleCard from "./components/SampleCard";

function SamplesPage() {
  return (
    <div className="mx-5 sm:mx-10 lg:mx-20 my-10">
      <Hero />
      <HeroCards />
      <SampleCard />
    </div>
  );
}

export default SamplesPage;
