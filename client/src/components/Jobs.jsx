import React from "react";
import NavBar from "./shared/NavBar";
import { FilterCard } from "./FilterCard";
import { Job } from "./Job";
import { useSelector } from "react-redux";

export const Jobs = () => {
  const { allJobs } = useSelector((store) => store.jobs);

  return (
    <div className="h-screen w-screen">
      <NavBar />
      <div className="max-w-7xl mx-auto mt-5">
        <div className="flex gap-5">
          <div className="w-[20%]">
            <FilterCard />
          </div>
          {allJobs.length === 0 ? (
            <span className="font-bold text-[#3Af002]">Job not found!</span>
          ) : (
            <div className="flex-1 h-[88vh] overflow-y-auto pb-5 pr-6">
              <div className="grid grid-cols-3 gap-4">
                {allJobs.map((job, ind) => (
                  <div key={job._id}>
                    <Job job={job} />
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
