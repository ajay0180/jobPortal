/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../shared/NavBar";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RadioGroup } from "../ui/radio-group";
import { useState } from "react";
import axios from "axios";
//@ts-expect-error -> none
import { USER_API_ENDPOINT } from "../../utils/constant.js";
import { toast } from "sonner";

export const Signup = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: "",
  });

  const changeEvent = (e: any) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e: any) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  const submitHandler = async (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("password", input.password);
    formData.append("role", input.role);
    if (input.file) {
      formData.append("file", input.file);
    }

    try {
      const res = await axios.post(`${USER_API_ENDPOINT}/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });

      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      }
    } catch (e) {
      toast.error(e.response.data.message);
    }
  };

  return (
    <div>
      <NavBar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={submitHandler}
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">Sign Up</h1>
          <div className="my-2">
            <Label>Full Name</Label>
            <Input
              type="text"
              placeholder="johndoe"
              minLength={1}
              value={input.fullname}
              name="fullname"
              onChange={changeEvent}
            />
          </div>
          <div className="my-2">
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="johndoe@gmail.com"
              maxLength={35}
              value={input.email}
              name="email"
              onChange={changeEvent}
            />
          </div>
          <div className="my-2">
            <Label>Phone number</Label>
            <Input
              type="tel"
              placeholder="1234567890"
              maxLength={10}
              value={input.phoneNumber}
              name="phoneNumber"
              onChange={changeEvent}
            />
          </div>
          <div className="my-2">
            <Label>Password</Label>
            <Input
              type="password"
              placeholder="Enter password"
              minLength={8}
              maxLength={20}
              value={input.password}
              name="password"
              onChange={changeEvent}
            />
          </div>
          <div className="flex items-center justify-between">
            <RadioGroup
              defaultValue="r1"
              className="flex items-center gap-4 my-5"
            >
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="student"
                  checked={input.role === "student"}
                  onChange={changeEvent}
                  className="cursor-pointer"
                />
                <Label htmlFor="student">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={input.role === "recruiter"}
                  onChange={changeEvent}
                  className="cursor-pointer"
                />
                <Label htmlFor="recruiter">Recruiter</Label>
              </div>
            </RadioGroup>
            <div className="flex items-center gap-2">
              <Label>Profile</Label>
              <Input
                accept="image/*"
                type="file"
                className="cursor-pointer"
                onChange={changeFileHandler}
              />
            </div>
          </div>
          <Button type="submit" className="w-full my-4 bg-slate-800 text-white">
            SignUp
          </Button>
          <span>
            Already have an account?{" "}
            <Link to={"/login"} className="text-blue-900">
              Login
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};
