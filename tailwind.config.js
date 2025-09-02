import lineClamp from '@tailwindcss/line-clamp';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        /* Semantic tokens mapped to CSS variables (no opacity) */
        bg:    "var(--bg)",
        fg:    "var(--fg)",
        card:  "var(--card)",
        muted: "var(--muted)",
        border:"var(--border)",
        brand: {
          DEFAULT: "var(--brand)",
          hover:   "var(--brand-hover)",
        },

        /* Opacity-aware variants, e.g. text-fg-rgb/70, bg-brand-rgb/10 */
        "bg-rgb":     "rgba(var(--bg-rgb), <alpha-value>)",
        "fg-rgb":     "rgba(var(--fg-rgb), <alpha-value>)",
        "card-rgb":   "rgba(var(--card-rgb), <alpha-value>)",
        "muted-rgb":  "rgba(var(--muted-rgb), <alpha-value>)",
        "border-rgb": "rgba(var(--border-rgb), <alpha-value>)",
        "brand-rgb":  "rgba(var(--brand-rgb), <alpha-value>)",
      },
    },
  },
  plugins: [lineClamp],
};
