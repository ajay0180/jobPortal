import React from "react";
import NavBar from "./shared/NavBar";
import { Avatar, AvatarImage } from "./ui/avatar";
import appleLogo from "../assets/appleLogo.webp";
import { Contact, Mail, Pen } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import { AppliedJobTable } from "./AppliedJobTable";

const skills = ["HTML", "css", "Javascript", "ReactJs"];
export const Profile = () => {
  const isResume = true;

  return (
    <div>
      <NavBar />
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src={appleLogo} className="object-contain" />
            </Avatar>
            <div>
              <h1 className="font-medium text-xl">Full Name</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Commodi maiores dignissimos consequuntur.
              </p>
            </div>
          </div>
          <Button className="text-right" variant="outline">
            <Pen />
          </Button>
        </div>
        <div className="my-5">
          <div className="flex items-center gap-3 my-2">
            <Mail />
            <span>patel@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <Contact />
            <span>8911390347</span>
          </div>
        </div>
        <div className="my-5">
          <h1>Skills</h1>
          <div className="flex items-center gap-1">
            {skills.length !== 0 ? (
              skills.map((item, index) => (
                <Badge className="bg-black text-white" key={index}>
                  {item}
                </Badge>
              ))
            ) : (
              <span>NA</span>
            )}
          </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="text-md font-bold">Resume</Label>
          {isResume ? (
            <a
              target="_blank"
              href="https://youtube.com/@patelmernstack"
              className="text-blue-500 w-full hover:underline cursor-pointer"
            >
              Patel MERN stack
            </a>
          ) : (
            <span>NA</span>
          )}
        </div>
      </div>
      <div className="max-w-4xl mx-auto bg-white rounded-2xl">
        <h1 className="font-bold text-lg my-5">Applied jobs</h1>
        <AppliedJobTable />
      </div>
    </div>
  );
};
