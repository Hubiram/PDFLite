export const isDev = process.env.NODE_ENV === "development";

export const ORIGIN_URL = isDev
  ? "http://localhost:3001"
  : "https://pdflite-ai.vercel.app";