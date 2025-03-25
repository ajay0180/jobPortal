import React, { useState } from "react";
import NavBar from "../shared/NavBar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useSelector } from "react-redux";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import axios from "axios";
import { JOB_API_ENDPOINT } from "@/utils/constant";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";

export const PostJobs = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    title: "",
    description: "",
    requirements: "",
    salary: "",
    location: "",
    jobType: "",
    experience: "",
    position: 0,
    companyId: "",
  });
  const [loading, setLoading] = useState(false);
  const { allcompanies } = useSelector((store) => store.company);
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const selectChangeHandler = (value) => {
    const selectedCompany = allcompanies.find(
      (company) => company.name.toLowerCase() === value
    );
    setInput({ ...input, companyId: selectedCompany._id });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post(`${JOB_API_ENDPOINT}/post`, input, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/admin/jobs");
      }
    } catch (e) {
      toast.error(e.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <NavBar />
      <div className="flex items-center justify-center w-screen my-5">
        <form
          onSubmit={submitHandler}
          className="p-8 max-w-4xl border border-gray-200 shadow-lg rounded-md"
        >
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Label id="title">Title</Label>
              <Input
                type="text"
                name="title"
                value={input.title}
                required
                onChange={changeEventHandler}
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              />
            </div>
            <div>
              <Label id="description">Description</Label>
              <Input
                type="text"
                name="description"
                value={input.description}
                required
                onChange={changeEventHandler}
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              />
            </div>
            <div>
              <Label id="requirements">Requirements</Label>
              <Input
                type="text"
                name="requirements"
                value={input.requirements}
                required
                onChange={changeEventHandler}
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              />
            </div>
            <div>
              <Label id="salary">Salary</Label>
              <Input
                type="text"
                name="salary"
                value={input.salary}
                required
                onChange={changeEventHandler}
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              />
            </div>
            <div>
              <Label id="location">Location</Label>
              <Input
                type="text"
                name="location"
                value={input.location}
                required
                onChange={changeEventHandler}
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              />
            </div>
            <div>
              <Label id="jobType">Job Type</Label>
              <Input
                type="text"
                name="jobType"
                value={input.jobType}
                required
                onChange={changeEventHandler}
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              />
            </div>
            <div>
              <Label id="experience">Experience level</Label>
              <Input
                type="text"
                name="experience"
                value={input.experience}
                required
                onChange={changeEventHandler}
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              />
            </div>
            <div>
              <Label id="position">Position</Label>
              <Input
                type="number"
                name="position"
                value={input.position}
                required
                onChange={changeEventHandler}
                className="focus-visible:ring-offset-0 focus-visible:ring-0 my-1"
              />
            </div>
            {allcompanies.length > 0 ? (
              <Select className="bg-white" onValueChange={selectChangeHandler}>
                <SelectTrigger>
                  <SelectValue placeholder={"Select a company"} />
                  <SelectContent className="bg-white">
                    <SelectGroup className="bg-white">
                      {allcompanies.map((company) => (
                        <SelectItem
                          key={company?._id}
                          value={company.name.toLowerCase()}
                        >
                          {company.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </SelectTrigger>
              </Select>
            ) : (
              ""
            )}
          </div>
          {loading ? (
            <Button className="w-full my-4 bg-slate-800 text-white">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
            </Button>
          ) : (
            <Button
              type="submit"
              className="w-full my-4 bg-slate-800 text-white"
            >
              Post New Job
            </Button>
          )}
          {allcompanies.length === 0 ? (
            <p className="text-sm text-red-600 font-medium">
              *Please register a company first before posting a job
            </p>
          ) : (
            <p></p>
          )}
        </form>
      </div>
    </div>
  );
};
