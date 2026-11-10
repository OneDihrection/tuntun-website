// Replace with the team's real inbox before launch.
export const CONTACT_EMAIL = "halo@example.com";

export const SITE_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";
