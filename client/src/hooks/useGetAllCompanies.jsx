import { setAllCompanies } from "@/redux/companySlice";
import { COMPANY_API_ENDPOINT } from "@/utils/constant";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const useGetAllCompanies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const res = await axios.get(`${COMPANY_API_ENDPOINT}/get`, {
          withCredentials: true,
        });
        console.log(res.data.companies);
        if (res.data.success) {
          dispatch(setAllCompanies(res.data?.companies));
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchCompanies();
  }, []);
};
