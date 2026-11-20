import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Providers } from "@/components/Providers";
import { SITE_URL } from "@/config";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const title = "Tuntun: Teman Terapi";
const description =
  "Latihan gerak tubuh bagian atas di rumah setelah stroke: tangan, jari, lengan, bahu, dan badan. Dipandu contoh gerakan, suara, dan kamera iPad.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${title} | Panduan latihan gerak di rumah`,
    template: `%s | ${title}`,
  },
  description,
  applicationName: "Tuntun",
  keywords: [
    "Tuntun",
    "Teman Terapi",
    "rehabilitasi stroke",
    "fisioterapi",
    "terapi okupasi",
    "latihan tangan",
    "latihan lengan",
    "latihan rumah",
    "iPad",
  ],
  openGraph: {
    type: "website",
    siteName: title,
    title,
    description,
    locale: "id_ID",
    alternateLocale: ["en_US"],
    images: [{ url: "/logo.png", width: 1024, height: 1024, alt: "Tuntun" }],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: ["/logo.png"],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f9f9f9" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0c" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={`${jakarta.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
