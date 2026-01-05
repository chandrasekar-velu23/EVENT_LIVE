import HeroSection from "../components/home/HeroSection";
import TrustSection from "../components/home/TrustSection";
import ProblemSolution from "../components/home/ProblemSection";
import FeaturesSection from "../components/home/FeatureSection";
// import PricingSection from "../components/home/PricingSection";
import FinalCTA from "../components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ProblemSolution />
      <TrustSection />
      {/* <PricingSection /> */}
      <FinalCTA />
    </>
  );
}
