import React, { useState } from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  const searchJobHandler = () => {
    dispatch(setSearchQuery(query));
    navigate("/browse");
  };

  return (
    <div className="text-center mt-24">
      <div className="flex flex-col gap-5 my-10">
        <span className="mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium">
          No.1 Job Hunt Website
        </span>
        <h1 className="text-5xl font-bold">
          Search, Apply & <br /> Get your{" "}
          <span className="text-[#6838C2]">Dream Jobs</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          aperiam velit fugiat minima porro itaque!
        </p>
        <div className="flex w-[35%] shadow-lg border border-gray-200 pl-7 rounded-full items-center gap-4 mx-auto h-11">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Find your dream job.."
            className="outline-none border-none w-full"
          />
          <Button
            className="rounded-r-full bg-slate-700 h-11 w-16"
            onClick={searchJobHandler}
          >
            <Search className="h-11 w-16 text-white" />
          </Button>
        </div>
      </div>
    </div>
  );
};
