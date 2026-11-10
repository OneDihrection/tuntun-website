import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { LegalPage } from "@/components/LegalPage";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Syarat dan Ketentuan",
  description: "Syarat dan ketentuan penggunaan aplikasi TeMan: Terapi Mandiri dan situs ini.",
  alternates: { canonical: "/ketentuan" },
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <LegalPage kind="terms" />
      <Footer />
    </>
  );
}
