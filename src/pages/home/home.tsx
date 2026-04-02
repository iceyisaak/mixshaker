import { BarbotSection } from "../../sections/barbot-section";
import { HeroSection } from "../../sections/hero-section";
import { RecommendationSection } from "../../sections/recommendation-section";

export const Home = () => {
  return (
    <div>
      <HeroSection />
      <RecommendationSection />
      <BarbotSection />
    </div>
  );
};
