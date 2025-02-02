import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Badge } from "./ui/badge";
import { Avatar, AvatarImage } from "./ui/avatar";
import appleLogo from "../assets/appleLogo.webp";

export const Job = () => {
  return (
    <div className="p-5 rounded-xl shadow-xl bg-white border border-gray-200">
      <div className="flex items-center justify-between">
        <p className="text-gray-500 text-sm">2 days ago</p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>
      <div className="flex items-center gap-2 my-2">
        <Button className="p-6" variant="outline" size="icon">
          <Avatar>
            <AvatarImage src={appleLogo} className="object-contain" />
          </Avatar>
        </Button>
        <div>
          <h1 className="font-medium text-lg">Company name</h1>
          <p className="text-sm text-gray-500">India</p>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">Title</h1>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
          temporibus asperiores sapiente provident eos fugiat dolore,
          consequatur voluptate excepturi dolorum?
        </p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Badge
          className={"text-blue-700 font-bold rounded-3xl"}
          variant={"ghost"}
        >
          12Positions
        </Badge>
        <Badge
          className={"text-[#F83002] font-bold rounded-3xl"}
          variant={"ghost"}
        >
          Part Time
        </Badge>
        <Badge
          className={"text-[#7209b7] font-bold rounded-3xl"}
          variant={"ghost"}
        >
          24LPA
        </Badge>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <Button variant="outline">Details</Button>
        <Button className="bg-[#a04fd5] text-white">Save for later</Button>
      </div>
    </div>
  );
};
