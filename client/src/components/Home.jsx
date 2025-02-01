import { CategoryCarousel } from "./CategoryCarousel";
import { HeroSection } from "./HeroSection";
import NavBar from "./shared/NavBar";

export const Home = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <CategoryCarousel />
      {/* <LatestJobs /> */}
      {/* <Footer /> */}
    </div>
  );
};
