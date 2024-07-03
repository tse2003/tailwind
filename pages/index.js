import { AboutMe } from "@/components/AboutMe";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";

export default function Home() {
  return <main className="container">
    <Header />
    <Hero />
    <AboutMe />
    <Skills />
  </main>;
}
