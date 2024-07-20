import { AboutMe } from "@/components/AboutMe";
import { Experience } from "@/components/Experience";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Work } from "@/components/Work";
import { Touch } from "@/components/touch";

export default function Home() {
  return <main className="m-auto max-w-[1200px]">
    <Header />
    <Hero />
    <AboutMe />
    <Skills />
    {/* <Experience />
    <Work />
    <Touch /> */}
  </main>;
}
