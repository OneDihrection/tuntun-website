import { Closing } from "@/components/Closing";
import { Exercises } from "@/components/Exercises";
import { Faq } from "@/components/Faq";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Navbar } from "@/components/Navbar";
import { Partners } from "@/components/Partners";
import { Pillars } from "@/components/Pillars";
import { Privacy } from "@/components/Privacy";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Pillars />
        <Exercises />
        <HowItWorks />
        <Features />
        <Privacy />
        <Partners />
        <Faq />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
