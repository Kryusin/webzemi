import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'error-title-color': '#424B5A',
        'description-color': '#A0A0A0',
        'error-description-color': '#6B7280',
      },
      fontSize: {
        'body': '16px',
        'title': '48px',
        'language': '48px',
        'error-title': '20px',
        'description': '20px',
        'delete': '16px',
        'edit': '16px',
        'error-details': '16px',
        'error-description': '14px',
      },
      backgroundColor: {
        'sorted-hover': '#E5E5E5'
      }
    },
  },
  plugins: [],
};
export default config;
