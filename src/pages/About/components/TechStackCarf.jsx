import React from "react";

function TechStackCarf({ img, name }) {
  return (
    <div className="tech-stack-card" dir="ltr">
      <span className="text-sm">{name}</span>
      <img src={img} alt="" width={30} />
    </div>
  );
}

export default TechStackCarf;
