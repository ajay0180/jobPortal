import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Edit2, MoreHorizontal } from "lucide-react";
import { useSelector } from "react-redux";

export const CompaniesTable = () => {
  const { allcompanies, searchCompanyByText } = useSelector(
    (store) => store.company
  );
  const [filterCompany, setFilterCompany] = useState(allcompanies);

  useEffect(() => {
    const filteredCompany =
      allcompanies.length >= 0 &&
      allcompanies.filter((company) => {
        if (!searchCompanyByText) {
          return true;
        }
        return company?.name
          ?.toLowerCase()
          .startsWith(searchCompanyByText.toLowerCase());
      });

    setFilterCompany(filteredCompany);
  }, [allcompanies, searchCompanyByText]);

  return (
    <div className="mt-6">
      <Table>
        <TableCaption>List of your Registered company</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Logo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filterCompany.length <= 0 ? (
            <span>You have not registered any company yet.</span>
          ) : (
            filterCompany?.map((company) => (
              <tr key={company._id}>
                <TableCell>
                  <Avatar>
                    <AvatarImage
                      src={company.logo}
                      className="object-contain"
                    />
                  </Avatar>
                </TableCell>
                <TableCell>{company.name}</TableCell>
                <TableCell>{company.createdAt.split("T")[0]}</TableCell>
                <TableCell className="text-right cursor-pointer">
                  <Popover>
                    <PopoverTrigger>
                      <MoreHorizontal />
                    </PopoverTrigger>
                    <PopoverContent className="w-32 bg-white">
                      <div className="flex items-center flex-row gap-4 cursor-pointer w-fit bg-white">
                        <Edit2 className="w-4" />
                        <span>Edit</span>
                      </div>
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </tr>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};
