import React, { useEffect, useState } from "react";
import NavBar from "../shared/NavBar";
import { Button } from "../ui/button";
import { ArrowLeft, Loader2 } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import axios from "axios";
import { COMPANY_API_ENDPOINT } from "@/utils/constant";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";
import { useSelector } from "react-redux";
import { useGetCompanyById } from "@/hooks/useGetCompanyById";

export const CompanySetup = () => {
  const params = useParams();
  const [input, setInput] = useState({
    name: "",
    description: "",
    website: "",
    location: "",
    file: null,
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const companyId = params.id;
  useGetCompanyById(companyId);
  const { singleCompany } = useSelector((store) => store.company);

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
    const file = e.target.files?.[0];
    setInput({ ...input, file });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", input.name);
    formData.append("description", input.description);
    formData.append("website", input.website);
    formData.append("location", input.location);
    if (input.file) {
      formData.append("file", input.file);
    }
    try {
      setLoading(true);
      const res = await axios.put(
        `${COMPANY_API_ENDPOINT}/update/${companyId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/admin/companies");
      }
    } catch (e) {
      toast.error(e.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setInput({
      name: singleCompany.name || "",
      description: singleCompany.description || "",
      website: singleCompany.website || "",
      location: singleCompany.location || "",
      file: singleCompany.file || null,
    });
  }, [singleCompany]);

  return (
    <div>
      <NavBar />
      <div className="max-w-xl mx-auto my-10">
        <form onSubmit={submitHandler}>
          <div className="flex gap-5 py-8">
            <Button
              variant="outline"
              className="flex items-center gap-2 text-black font-semibold bg-white hover:border hover:border-black"
              onClick={() => navigate("/admin/companies")}
            >
              <ArrowLeft />
              <span>Back</span>
            </Button>
            <h1 className="font-bold text-xl">Company Setup</h1>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Company Name</Label>
              <Input
                required
                type="text"
                id="name"
                name="name"
                value={input.name}
                onChange={changeEventHandler}
              />
            </div>
            <div>
              <Label htmlFor="description">Description</Label>
              <Input
                required
                type="text"
                name="description"
                id="description"
                value={input.description}
                onChange={changeEventHandler}
              />
            </div>
            <div>
              <Label htmlFor="website">Website</Label>
              <Input
                required
                type="text"
                name="website"
                id="website"
                value={input.website}
                onChange={changeEventHandler}
              />
            </div>
            <div>
              <Label htmlFor="location">Location</Label>
              <Input
                type="text"
                name="location"
                id="location"
                value={input.location}
                onChange={changeEventHandler}
              />
            </div>
            <div>
              <Label htmlFor="logo">Logo</Label>
              <Input
                required
                type="file"
                accept="image/*"
                name="logo"
                id="logo"
                onChange={changeFileHandler}
              />
            </div>
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
              Update
            </Button>
          )}
        </form>
      </div>
    </div>
  );
};
