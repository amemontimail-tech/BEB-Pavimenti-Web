"use client";

import PageTransition from "@/components/PageTransition";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Intro from "@/components/home/Intro";
import Categories from "@/components/home/Categories";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Testimonials from "@/components/home/Testimonials";
import ShowroomCTA from "@/components/home/ShowroomCTA";

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <Stats />
      <Intro />
      <Categories />
      <FeaturedProjects />
      <Testimonials />
      <ShowroomCTA />
    </PageTransition>
  );
}
