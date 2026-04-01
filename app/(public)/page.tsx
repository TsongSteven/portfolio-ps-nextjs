import About from "@/components/about";
import Hero from "@/components/hero";
import OngoingProject from "@/components/ongoing-project";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl items-center justify-between p-6 lg:px-8">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <OngoingProject />
    </div> 
  );
}
