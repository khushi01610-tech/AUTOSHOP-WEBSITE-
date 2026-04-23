/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f4f7fa",  // Soft, bright grayish blue for clean vibrancy
        foreground: "#111827",
        primary: {
          DEFAULT: "#8b5cf6", // Vibrant Purple
          hover: "#7c3aed",
          light: "#ddd6fe"
        },
        secondary: {
          DEFAULT: "#ec4899", // Vibrant Pink
          hover: "#db2777",
          light: "#fbcfe8"
        },
        card: "rgba(255, 255, 255, 0.85)", // Light Frosted Glass component
      },
      fontFamily: {
        sans: ["Outfit", "Inter", "sans-serif"],
      },
      boxShadow: {
        'colored': '0 10px 40px -10px rgba(139, 92, 246, 0.3)',
        'colored-hover': '0 20px 40px -10px rgba(236, 72, 153, 0.5)',
      },
      backgroundImage: {
        'vibrant-gradient': 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
        'soft-gradient': 'linear-gradient(105deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 100%)',
      }
    },
  },
  plugins: [],
}
