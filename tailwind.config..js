/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Paleta "sage" — teal desaturado, transmite calma clínica sem ser frio
        sage: {
          50: "#F4F8F6",
          100: "#E4EEE9",
          200: "#C7DDD3",
          300: "#9FC5B4",
          400: "#6FA890",
          500: "#4A8870",
          600: "#356B57",
          700: "#2A5546",
          800: "#234438",
          900: "#1C372E",
        },
        // Paleta "sand" — contraponto quente, humaniza a interface
        sand: {
          50: "#FBF8F3",
          100: "#F3EBDD",
          200: "#E6D6B8",
          300: "#D3B98A",
          400: "#C0A06B",
          500: "#A8814D",
        },
        ink: "#26312C",
        mist: "#8FA8C7",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Figtree", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      keyframes: {
        breathe: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.35" },
          "50%": { transform: "scale(1.12)", opacity: "0.55" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        breathe: "breathe 7s ease-in-out infinite",
        "breathe-slow": "breathe 9s ease-in-out infinite 1.5s",
        "fade-up": "fade-up 0.7s ease-out both",
      },
    },
  },
  plugins: [],
};