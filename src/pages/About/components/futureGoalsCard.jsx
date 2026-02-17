import React from "react";

function futureGoalsCard({ title, content }) {
  return (
    <div className="futureGoalsCard">
      <span className="text-lg">{title}</span>
      <p className="">{content}</p>
    </div>
  );
}

export default futureGoalsCard;
