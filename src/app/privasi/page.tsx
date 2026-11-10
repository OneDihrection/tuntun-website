import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { LegalPage } from "@/components/LegalPage";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Kebijakan Privasi",
  description: "Bagaimana aplikasi TeMan dan situs ini menangani data Anda: tanpa akun, tanpa rekaman video, tanpa cloud.",
  alternates: { canonical: "/privasi" },
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <LegalPage kind="privacy" />
      <Footer />
    </>
  );
}
