"use client";

import PageTransition from "@/components/beb-ui/BebPageTransition";
import Hero from "@/components/beb-sections/Beb01_Hero";
import Stats from "@/components/beb-sections/Beb02_Stats";
import Intro from "@/components/beb-sections/Beb03_Intro";
import Categories from "@/components/beb-sections/Beb04_Categories";
import FeaturedProjects from "@/components/beb-sections/Beb05_FeaturedProjects";
import Testimonials from "@/components/beb-sections/Beb06_Testimonials";

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <Stats />
      <Intro />
      <Categories />
      <FeaturedProjects />
      <Testimonials />
    </PageTransition>
  );
}
