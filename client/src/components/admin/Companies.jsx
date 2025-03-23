import React, { useEffect, useState } from "react";
import NavBar from "../shared/NavBar";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { CompaniesTable } from "./CompaniesTable";
import { useNavigate } from "react-router-dom";
import { useGetAllCompanies } from "@/hooks/useGetAllCompanies";
import { useDispatch } from "react-redux";
import { setSearchCompanyByText } from "@/redux/companySlice";

export const Companies = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useGetAllCompanies();

  useEffect(() => {
    dispatch(setSearchCompanyByText(input));
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
            onClick={() => navigate("/admin/companies/create")}
          >
            New Company
          </Button>
        </div>
        <CompaniesTable />
      </div>
    </div>
  );
};
