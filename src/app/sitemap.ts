import type { MetadataRoute } from "next";
import { SITE_URL } from "@/config";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/privasi`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/ketentuan`, changeFrequency: "yearly", priority: 0.3 },
  ];
}
