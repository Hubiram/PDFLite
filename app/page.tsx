import { Button } from "@/components/ui/button";
import Image from "next/image";
import HeroSection from "@/components/home/hero-section";
import BgGradient from "@/components/common/bg-gradient";
import DemoSection from "@/components/home/demo-section";
import HowItWorks from "@/components/home/how-it-works";
import PricingSection from "@/components/home/pricing-section";
import CTASection from "@/components/home/cta-section";

export default function Home() { 
  return (
    <div className="relative w-full">
      <div className="flex flex-col">
        <BgGradient className='from-blue-400 via-blue-200 to-teal'/>
        <HeroSection />
        <DemoSection />
        <HowItWorks />
        <PricingSection />
        <CTASection />
      </div> 
    </div>
  );
}
