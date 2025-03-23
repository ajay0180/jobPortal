import { usegetAllJobs } from "@/hooks/usegetAllJobs";
import { CategoryCarousel } from "./CategoryCarousel";
import { Footer } from "./Footer";
import { HeroSection } from "./HeroSection";
import { LatestJobs } from "./LatestJobs";
import NavBar from "./shared/NavBar";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  usegetAllJobs();
  const { user } = useSelector((store) => store.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.role === "recruiter") {
      navigate("/admin/companies");
    }
  }, []);

  return (
    <div>
      <NavBar />
      <HeroSection />
      <CategoryCarousel />
      <LatestJobs />
      <Footer />
    </div>
  );
};
