import { Closing } from "@/components/Closing";
import { Exercises } from "@/components/Exercises";
import { Faq } from "@/components/Faq";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Navbar } from "@/components/Navbar";
import { Partners } from "@/components/Partners";
import { Privacy } from "@/components/Privacy";
import { Statement } from "@/components/Statement";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Statement />
        <Exercises />
        <HowItWorks />
        <Features />
        <Privacy />
        <Faq />
        <Partners />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
