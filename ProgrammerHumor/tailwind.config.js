const colors = {
  accent: "#ff4500",
  secondary: "#EDEFF1",
  // primary: "#f2f4f5",
  discord_brand: "#5865F2",
  twitch_brand: "#6441a5",
  muted: "#4f4f4f",
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [],
};
