import React from "react";
import { LatestJobCards } from "./LatestJobCards";
import { useSelector } from "react-redux";

export const LatestJobs = () => {
  const { allJobs } = useSelector((store) => store.jobs);

  return (
    <div className="max-w-7xl mx-auto my-28">
      <h1 className="text-4xl font-bold">
        <span className="text-[#6A38C2]">Latest & Top</span> Job Openings
      </h1>
      <div className="grid grid-cols-3 gap-4 my-10">
        {allJobs &&
          allJobs
            ?.slice(0, 6)
            .map((job, ind) => <LatestJobCards key={job._id} job={job} />)}
      </div>
    </div>
  );
};
