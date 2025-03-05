import Cta from "@/components/Cta";
import Faqs from "@/components/Faqs";
import FeatureSection from "@/components/Feature";
import HeroSection from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import StatsSection from "@/components/Stats";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <FeatureSection/>
      <StatsSection/>
      <HowItWorks/>
      <Testimonials/>
      <Faqs/>
      <Cta/>
    
    </div>
  );
}
