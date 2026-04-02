import { BarbotSection } from "../../sections/barbot-section";
import { HeroSection } from "../../sections/hero-section";
import { RecommendationSection } from "../../sections/recommendation-section";

export const Home = () => {
  return (
    <header>
      <HeroSection />
      <RecommendationSection />
      <BarbotSection />
    </header>
  );
};
