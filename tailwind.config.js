/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: "#FFD43A",
          navy: "#0E1A2A",
        },
      },
      boxShadow: {
        card: "0 12px 32px rgba(14,26,42,0.08)",
      },
      ringColor: {
        DEFAULT: "#EAECEF",
      },
      borderRadius: {
        xl: "24px",
      },
    },
  },
  plugins: [],
}