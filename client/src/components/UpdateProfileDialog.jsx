import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { USER_API_ENDPOINT } from "@/utils/constant";
import { setUser } from "@/redux/authSlice";
import { toast } from "sonner";

export const UpdateProfileDialog = ({ open, setOpen }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.auth);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState({
    fullname: user?.fullname || "",
    email: user?.email || "",
    phoneNumber: user?.phoneNumber || "",
    bio: user?.profile?.bio || "",
    skills: user?.profile?.skills.map((skill) => skill) || "",
    resume: user?.profile?.resume || "",
  });

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const fileChangeHandler = (e) => {
    const file = e.target.files?.[0];
    setInput({ ...input, file });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("bio", input.bio);
    formData.append("skills", input.skills);
    if (input.file) {
      formData.append("file", input.file);
    }

    try {
      setLoading(true);
      const res = await axios.post(
        `${USER_API_ENDPOINT}/profile/update`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      if (res.data.success) {
        dispatch(setUser(res.data.user));
        toast.success(res.data.message);
      }
    } catch (e) {
      console.log(e);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
      setOpen(false);
      console.log(input);
    }
  };

  return (
    <div>
      <Dialog open={open} onOpenChange={() => setOpen(false)}>
        <DialogContent
          className="sm:max-w-[425px]"
          onClose={() => setOpen(false)}
        >
          <DialogHeader>
            <DialogTitle>Update Profile</DialogTitle>
          </DialogHeader>
          <form onSubmit={submitHandler}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="fullname" className="text-center font-medium">
                  Name
                </Label>
                <Input
                  type="text"
                  id="fullname"
                  name="fullname"
                  className="col-span-3"
                  value={input.fullname}
                  onChange={changeEventHandler}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-center font-medium">
                  Email
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  className="col-span-3"
                  placeholder="johndoe@gmail.com"
                  value={input.email}
                  onChange={changeEventHandler}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label
                  htmlFor="phoneNumber"
                  className="text-center font-medium"
                >
                  Phone Number
                </Label>
                <Input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  className="col-span-3"
                  value={input.phoneNumber}
                  onChange={changeEventHandler}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="bio" className="text-center font-medium">
                  Bio
                </Label>
                <Input
                  id="bio"
                  name="bio"
                  className="col-span-3"
                  value={input.bio}
                  onChange={changeEventHandler}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="skills" className="text-center font-medium">
                  Skills
                </Label>
                <Input
                  id="skills"
                  name="skills"
                  className="col-span-3"
                  value={input.skills}
                  onChange={changeEventHandler}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="file" className="text-center font-medium">
                  Resume
                </Label>
                <Input
                  type="file"
                  id="file"
                  name="file"
                  className="col-span-3"
                  accept="application/pdf"
                  onChange={fileChangeHandler}
                />
              </div>
            </div>
            <DialogFooter>
              {loading ? (
                <Button className="w-full my-4 bg-slate-800 text-white">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
                </Button>
              ) : (
                <Button
                  type="submit"
                  className="w-full my-4 bg-slate-800 text-white"
                >
                  Update
                </Button>
              )}
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};
