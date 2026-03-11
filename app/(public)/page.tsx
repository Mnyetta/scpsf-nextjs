import HeroSection from "../../components/sections/HeroSection";
import OurWorkSection from "../../components/sections/OurWorkSection";
import GetHelpSection from "../../components/sections/GetHelpSection";
import HowItWorksSection from "../../components/sections/HowItWorksSection";
import ImpactSection from "../../components/sections/ImpactSection";
import BoardSection from "../../components/sections/BoardSection";
import CTASection from "../../components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section id="hero">
        <HeroSection />
      </section>

      {/* About / Our Work Section */}
      <section id="about">
        <OurWorkSection />
      </section>

      {/* Programs / Get Help Section */}
      <section id="programs">
        <GetHelpSection />
        <HowItWorksSection />
      </section>

      {/* Impact Section */}
      <section id="impact">
        <ImpactSection />
      </section>

      {/* Contact / Board Section */}
      <section id="contact">
        <BoardSection />
        <CTASection />
      </section>
    </>
  );
}