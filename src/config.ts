import type { StaticImageData } from "next/image";
import dimasPhoto from "@/assets/team/dimas.jpg";
import graciaPhoto from "@/assets/team/gracia.jpg";
import ameliaPhoto from "@/assets/team/amelia.png";
import fauzanPhoto from "@/assets/team/fauzan.jpg";
import devanyaPhoto from "@/assets/team/devanya.jpg";
import rifanPhoto from "@/assets/team/rifan.jpg";

export const CONTACT_EMAIL = "contact@tuntun.rehab";

/** Airtable interface form; the /embed/ variant is the one that allows iframing. */
export const FEEDBACK_FORM_URL = "https://airtable.com/appuQ1rgmTQKwCFSB/pagnfHtBKGLkEIVaG/form";
export const FEEDBACK_EMBED_URL = FEEDBACK_FORM_URL.replace("airtable.com/", "airtable.com/embed/");

/** Public TestFlight link for the external beta. */
export const TESTFLIGHT_URL = "https://testflight.apple.com/join/6tMkdmt2";

export const SITE_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export type TeamRole = "developer" | "designer";

/** Names and profile links stay untranslated; roles resolve through the dictionary. Portraits live in src/assets/team, imported so their URLs carry a content hash; without one, the card shows initials. */
export const TEAM: { key: string; name: string; role: TeamRole; linkedin: string; photo?: StaticImageData }[] = [
  { key: "dimas", name: "Meynabel Dimas Wisodewo", role: "developer", linkedin: "https://www.linkedin.com/in/dimaswisodewo/", photo: dimasPhoto },
  { key: "gracia", name: "Gracia Adonay Efendi", role: "developer", linkedin: "https://www.linkedin.com/in/gracia-adonay-efendi-634469380/", photo: graciaPhoto },
  { key: "amelia", name: "Amelia Putri Aftiana", role: "developer", linkedin: "https://www.linkedin.com/in/ameliaaftiana/", photo: ameliaPhoto },
  { key: "fauzan", name: "Fauzan Azima", role: "developer", linkedin: "https://www.linkedin.com/in/fauzan-azimaa/", photo: fauzanPhoto },
  { key: "devanya", name: "Devanya Azarine", role: "designer", linkedin: "https://www.linkedin.com/in/devanyazarine/", photo: devanyaPhoto },
  { key: "rifan", name: "M Rifan Ardiansyah", role: "designer", linkedin: "https://www.linkedin.com/in/rifanardiansyah/", photo: rifanPhoto },
];
