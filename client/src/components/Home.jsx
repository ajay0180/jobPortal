import { CategoryCarousel } from "./CategoryCarousel";
import { Footer } from "./Footer";
import { HeroSection } from "./HeroSection";
import { LatestJobs } from "./LatestJobs";
import NavBar from "./shared/NavBar";

export const Home = () => {
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
