import { setAllAdminJobs } from "@/redux/jobSlice";
import { JOB_API_ENDPOINT } from "@/utils/constant";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const usegetAllAdminJobs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAllAdminJobs = async () => {
      try {
        const res = await axios.get(`${JOB_API_ENDPOINT}/getadminjobs`, {
          withCredentials: true,
        });
        if (res.data.success) {
          console.log(res.data.success);
          dispatch(setAllAdminJobs(res.data.jobs));
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchAllAdminJobs();
  }, []);
};
