import { AboutMe } from "@/components/AboutMe";
import { Experience } from "@/components/Experience";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Work } from "@/components/Work";

export default function Home() {
  return <main className="container">
    <Header />
    <Hero />
    <AboutMe />
    <Skills />
    <Experience />
    <Work />
  </main>;
}
