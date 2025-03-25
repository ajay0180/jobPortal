import React, { useEffect } from "react";
import NavBar from "../shared/NavBar";
import { ApplicantsTable } from "./ApplicantsTable";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { APPLICATION_API_ENDPOINT } from "@/utils/constant";
import { setAllapplicants } from "@/redux/applicationSlice";
import { useParams } from "react-router-dom";

export const Applicants = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { applicants } = useSelector((store) => store.application);

  useEffect(() => {
    const fetchAllApplicants = async () => {
      try {
        const res = await axios.get(
          `${APPLICATION_API_ENDPOINT}/${params.id}/applicants`,
          { withCredentials: true }
        );
        if (res.data.success) {
          dispatch(setAllapplicants(res.data.job));
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchAllApplicants();
  }, []);

  return (
    <div>
      <NavBar />
      <div className="max-w-7xl mx-auto">
        <h1 className="font-bold text-2xl my-5">
          Applicants ({applicants?.applications?.length})
        </h1>
        <ApplicantsTable />
      </div>
    </div>
  );
};
