import { Contact } from "@/components/contact";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Social } from "@/components/social";
import { Stack } from "@/components/stack";

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh]">
      <Header />
      <Hero />
      <Social />
      <Projects />
      <Stack />
      <Contact />
    </main>
  );
}

