import React from "react";
import philosophy from "../../../Data/philosophy";
import PhilosophyCard from "./PhilosophyCard";

function Philosophy() {
  return (
    <>
      <p className="text-center text-2xl my-30">فلسفه کاری من</p>
      <div className="Philosophy">
        {philosophy.map((item) => (
          <PhilosophyCard key={item.id} {...item} />
        ))}
      </div>
    </>
  );
}

export default Philosophy;
