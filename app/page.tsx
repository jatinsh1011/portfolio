import { Hero } from "@/components/hero";
import { Story } from "@/components/story";
import { ProjectsSection } from "@/components/projects-section";
import { Experience } from "@/components/experience";
import { Lab, Stack } from "@/components/lab-stack";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Story />
      <ProjectsSection />
      <Experience />
      <Lab />
      <Stack />
      <Contact />
    </>
  );
}
