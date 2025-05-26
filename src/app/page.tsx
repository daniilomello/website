import { Contact } from "@/components/Contact";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Social } from "@/components/Social";
import { Stack } from "@/components/Stack";
import { Testimonials } from "@/components/Testimonials";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh]">
      <Header />
      <Hero />
      <Projects />
      <Testimonials />
      <Stack />
      <Social />
      <Contact />
      <WhatsAppButton />
    </main>
  );
}

