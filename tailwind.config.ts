import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'primaria': '#D7D8D3', //fundo
        'claro':'#DBDBD9', // texto claro
        'padrao': '#24343C', // texto
        'linha': '#003339', //bordas
        'faixa': '#64979D', // faixa rodape
      },
    },
  },
  plugins: [],
} satisfies Config;
