import React from "react";
import { Badge } from "./ui/badge";
import { usegetAllJobs } from "@/hooks/useGetAllJobs";
import { useNavigate } from "react-router-dom";

export const LatestJobCards = ({ job }) => {
  usegetAllJobs();
  const navigate = useNavigate();

  return (
    <div
      className="p-5 rounded-md shadow-xl border bg-white border-gray-100 cursor-pointer"
      onClick={() => navigate(`/description/${job._id}`)}
    >
      <div>
        <h1 className="font-medium text-lg">{job?.company?.name}</h1>
        <p className="text-sm text-gray-500">{job?.location}</p>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">{job?.title}</h1>
        <p className="text-sm text-gray-600">{job?.description}</p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Badge
          className={"text-blue-700 font-bold rounded-3xl"}
          variant={"ghost"}
        >
          {`${job?.position} ${job?.position == 1 ? "Position" : "Positions"}`}
        </Badge>
        <Badge
          className={"text-[#F83002] font-bold rounded-3xl"}
          variant={"ghost"}
        >
          {job?.jobType}
        </Badge>
        <Badge
          className={"text-[#7209b7] font-bold rounded-3xl"}
          variant={"ghost"}
        >
          {job?.salary}LPA
        </Badge>
      </div>
    </div>
  );
};
