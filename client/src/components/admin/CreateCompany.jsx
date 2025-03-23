import React, { useState } from "react";
import NavBar from "../shared/NavBar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { COMPANY_API_ENDPOINT } from "@/utils/constant";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { setSingleCompany } from "@/redux/companySlice";
import axios from "axios";

export const CreateCompany = () => {
  const [companyName, setCompanyName] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const registerNewCompany = async () => {
    try {
      const res = await axios.post(
        `${COMPANY_API_ENDPOINT}/register`,
        { companyName },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(res);
      if (res?.data?.success) {
        dispatch(setSingleCompany(res.data?.company));
        toast.success(res.data.message);
        const companyId = res.data?.company?._id;
        navigate(`/admin/companies/${companyId}`);
      }
    } catch (e) {
      toast.error(e.response.data.message);
    }
  };

  return (
    <div>
      <NavBar />
      <div className="max-w-4xl mx-auto my-6">
        <div className="my-10">
          <h1 className="font-bold text-2xl">Your company Name</h1>
          <p className="text-gray-500">
            What would you like to give your company name? (You can also change
            it later.)
          </p>
        </div>
        <Label>Company name</Label>
        <Input
          type="text"
          className="my-2"
          placeholder="your company name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
        <div className="flex items-center gap-2 my-10">
          <Button
            variant="outline"
            onClick={() => navigate("/admin/companies")}
          >
            Cancel
          </Button>
          <Button className="bg-black text-white" onClick={registerNewCompany}>
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};
