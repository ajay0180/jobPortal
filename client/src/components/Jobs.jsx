import React from "react";
import NavBar from "./shared/NavBar";
import { FilterCard } from "./FilterCard";
import { Job } from "./Job";

const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8];
export const Jobs = () => {
  return (
    <div className="h-screen w-screen">
      <NavBar />
      <div className="max-w-7xl mx-auto mt-5">
        <div className="flex gap-5">
          <div className="w-[20%]">
            <FilterCard />
          </div>
          {jobsArray.length === 0 ? (
            <span className="font-bold text-[#3Af002]">Job not found!</span>
          ) : (
            <div className="flex-1 h-[88vh] overflow-y-auto pb-5 pr-6">
              <div className="grid grid-cols-3 gap-4">
                {jobsArray.map((el, ind) => (
                  <div key={ind}>
                    <Job />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
