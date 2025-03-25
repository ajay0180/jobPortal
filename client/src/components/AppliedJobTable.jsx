import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Badge } from "./ui/badge";
import { useSelector } from "react-redux";

export const AppliedJobTable = () => {
  const { userAppliedJob } = useSelector((store) => store.jobs);
  console.log(userAppliedJob);

  return (
    <div>
      <Table>
        <TableCaption>List of your applied jobs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Job Role</TableHead>
            <TableHead>Company</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {userAppliedJob.length != 0 ? (
            userAppliedJob.map((appliedjob) => (
              <TableRow key={appliedjob._id}>
                <TableCell>{appliedjob.createdAt.split("T")[0]}</TableCell>
                <TableCell>{appliedjob?.job?.title}</TableCell>
                <TableCell>{appliedjob?.job?.company.name}</TableCell>
                <TableCell className="text-right">
                  <Badge
                    className={`${
                      appliedjob.status == "rejected" && "bg-red-500 text-white"
                    } ${appliedjob.status == "pending" && "bg-gray-400"} ${
                      appliedjob.status == "accepted" &&
                      "bg-green-500 text-white"
                    } rounded-lg`}
                  >
                    {appliedjob.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <span></span>
          )}
        </TableBody>
      </Table>
    </div>
  );
};
