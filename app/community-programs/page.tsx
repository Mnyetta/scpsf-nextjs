"use client";

import Hero from "@/components/community/Hero";
import ProgramsGrid from "@/components/community/ProgramsGrid";
import ImpactStats from "@/components/community/ImpactStats";
import CallToAction from "@/components/community/CallToAction";
import Footer from "@/components/layout/Footer";

export default function CommunityProgramsPage() {
  return (
    <>
      <Hero />
      <ProgramsGrid />
      <ImpactStats />
      <CallToAction />
      <Footer />
    </>
  );
}