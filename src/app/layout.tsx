import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import { SITE_URL } from "@/config";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const title = "TeMan: Terapi Mandiri";
const description =
  "Latihan tangan dan jari di rumah setelah stroke, dipandu kamera iPad, contoh gerakan 3D, dan aba-aba suara.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${title} | Latihan tangan di rumah`,
    template: `%s | ${title}`,
  },
  description,
  applicationName: "TeMan",
  keywords: ["TeMan", "Terapi Mandiri", "rehabilitasi stroke", "latihan tangan", "terapi jari", "iPad"],
  openGraph: {
    type: "website",
    siteName: title,
    title,
    description,
    locale: "id_ID",
    alternateLocale: ["en_US"],
    images: [{ url: "/logo.png", width: 1024, height: 1024, alt: "TeMan" }],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: ["/logo.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#e34a16",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={`${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
