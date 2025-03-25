import React, { useEffect, useState } from "react";
import NavBar from "./shared/NavBar";
import { FilterCard } from "./FilterCard";
import { Job } from "./Job";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

export const Jobs = () => {
  const { allJobs, searchQuery } = useSelector((store) => store.jobs);
  const [filterJobs, setFilterJobs] = useState(allJobs);

  useEffect(() => {
    if (searchQuery) {
      const filteredJobs = allJobs.filter(
        (job) =>
          job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          job.location.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilterJobs(filteredJobs);
    } else {
      setFilterJobs(allJobs);
    }
  }, [allJobs, searchQuery]);

  return (
    <div className="h-screen w-screen">
      <NavBar />
      <div className="max-w-7xl mx-auto mt-5">
        <div className="flex gap-5">
          <div className="w-[20%]">
            <FilterCard />
          </div>
          {filterJobs.length === 0 ? (
            <span className="font-bold text-[#3Af002]">Job not found!</span>
          ) : (
            <div className="flex-1 h-[88vh] overflow-y-auto pb-5 pr-6">
              <div className="grid grid-cols-3 gap-4">
                {filterJobs.map((job) => (
                  <motion.div
                    key={job._id}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Job job={job} />
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
