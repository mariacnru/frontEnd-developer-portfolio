import React from "react";
import { futureGoals } from "../../../Data/philosophy";
import FutureGoalsCard from "./futureGoalsCard";

function FutureGoals() {
  return (
    <div className="my-30">
      <p className="text-center text-2xl mt-30">اهداف آینده</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
        {futureGoals.map((item) => (
          <FutureGoalsCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default FutureGoals;
