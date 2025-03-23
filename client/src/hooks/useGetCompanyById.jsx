import { setSingleCompany } from "@/redux/companySlice";
import { COMPANY_API_ENDPOINT } from "@/utils/constant";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const useGetCompanyById = (companyId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchSingleCompany = async () => {
      try {
        const res = await axios.get(
          `${COMPANY_API_ENDPOINT}/get/${companyId}`,
          {
            withCredentials: true,
          }
        );
        if (res.data.success) {
          dispatch(setSingleCompany(res.data.company));
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchSingleCompany();
  }, [companyId, dispatch]);
};
