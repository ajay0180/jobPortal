import React, { useEffect, useState } from "react";
import NavBar from "../shared/NavBar";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearchJobByText } from "@/redux/jobSlice";
import { JobsTable } from "./JobsTable";
import { usegetAllAdminJobs } from "@/hooks/useGetAllAdminJobs";

export const Jobs = () => {
  usegetAllAdminJobs();
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearchJobByText(input));
  }, [input]);

  return (
    <div>
      <NavBar />
      <div className="max-w-6xl mx-auto my-10 h-screen">
        <div className="flex items-center justify-between">
          <Input
            className="w-fit"
            placeholder="Filter by name"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button
            className="bg-black text-white"
            onClick={() => navigate("/admin/jobs/create")}
          >
            New Jobs
          </Button>
        </div>
        <JobsTable />
      </div>
    </div>
  );
};
