/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: '#be3144',
        'accent-bright': '#e0566b',
        night: {
          DEFAULT: '#0F0B0C',
          card: '#16100F',
          soft: '#1A1315',
          line: '#332529',
          line2: '#241B1D',
          text: '#F6EFF0',
          body: '#CDC2C4',
          mute: '#A89A9D',
        },
        day: {
          DEFAULT: '#FAF6F5',
          line: '#E4D6D8',
          text: '#231A1C',
          body: '#574A4D',
          mute: '#6E5F63',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
