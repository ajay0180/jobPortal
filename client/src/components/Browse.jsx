import React, { useEffect } from "react";
import NavBar from "./shared/NavBar";
import { Job } from "./Job";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "@/redux/jobSlice";
import { usegetAllJobs } from "@/hooks/useGetAllJobs";

export const Browse = () => {
  usegetAllJobs();
  const dispatch = useDispatch();
  const { allJobs } = useSelector((store) => store.jobs);

  useEffect(() => {
    return () => {
      dispatch(setSearchQuery(""));
    };
  }, []);

  return (
    <div>
      <NavBar />
      <div className="max-w-7xl mx-auto my-10">
        <h1 className="font-bold text-xl my-5">
          Search Result ({allJobs.length})
        </h1>
        <div className="grid grid-cols-3 gap-4 mt-5">
          {allJobs.map((job, ind) => (
            <Job key={ind} job={job} />
          ))}
        </div>
      </div>
    </div>
  );
};
