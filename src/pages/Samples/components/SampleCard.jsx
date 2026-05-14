import React, { useState } from "react";
import portfolioProjects from "../../../Data/portfolioProjects";

function SampleCard() {
  const [data] = useState(portfolioProjects);

  return (
    <div className="grid grid-cols-3 gap-5">
      {data.map((item) => (
        <div
          key={item.id}
          className="sample-card w-full h-87 flex flex-col justify-between bg-white rounded-t-xl shadow-xl"
        >
          <div className="p-5 space-y-2">
            <h2 className="font-morabba-medium">{item.title}</h2>
            <span className="text-gray-400 text-xs"> {item.date}</span>
            <p className="text-sm text-gray-500">{item.description}</p>
          </div>
          <div className="w-full rounded-t-2xl bg-sky-400 h-50 border-b-4 border-sky-700"></div>
        </div>
      ))}
    </div>
  );
}

export default SampleCard;
