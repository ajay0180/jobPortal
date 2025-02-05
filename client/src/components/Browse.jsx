import React from "react";
import NavBar from "./shared/NavBar";
import { Job } from "./Job";

const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

export const Browse = () => {
  return (
    <div>
      <NavBar />
      <div className="max-w-7xl mx-auto my-10">
        <h1 className="font-bold text-xl my-5">
          Search Result ({randomJobs.length})
        </h1>
        <div className="grid grid-cols-3 gap-4 mt-5">
          {randomJobs.map((item, ind) => (
            <Job key={ind} />
          ))}
        </div>
      </div>
    </div>
  );
};
