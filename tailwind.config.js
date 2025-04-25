 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "340px",
      md: "540px",
      lg: "768px",
      xl: "1180px"
    },
    extend: {},
    keyframes: {
      move: {
        "50%": { transform: "translateY(-1rem)" },
      },
      rotate: {
        "0%": { transform: "rotate(0deg)" },
        "100%": { transform: "rotate(360deg)" }
      },
      scaleUp: {
        "0%": { transform: "scale(0.8)" },
        "50%": { transform: "scale(1.2)" },
        "100%": { transform: "scale(0.8)" },
      },
      flowerFall: {
        '0%': { transform: 'translateY(-50px) rotate(0deg)', opacity: '0.5' },
        '50%': { opacity: '1' },
        '100%': { transform: 'translateY(600px) rotate(360deg)', opacity: '0' },
      },
      snowfall: {
        '0%': {
          transform: 'translateY(0)',
          opacity: '1',
        },
        '100%': {
          transform: 'translateY(100vh)', // Tuyết rơi hết chiều cao trang
          opacity: '0',
        },
      },
      fall: {
        '0%': { transform: 'translateY(0)', opacity: '0.8' },
        '100%': { transform: 'translateY(100vh)', opacity: '0' },
      },
    },
    animation: {
      movingY: "move 3s linear infinite",
      rotating: "rotate 15s linear infinite",
      scalingUp: "scaleUp 3s linear infinite",
      'flower-fall': 'flowerFall 8s linear infinite',
      'snow-fall': 'snowfall 10s ease-in-out infinite',
      fall: 'fall 5s linear infinite',
    },
    fontFamily: {
      Jost: ["Jost", "sans-serif"],
      Lobster: ["Lobster", "sans-serif"],
      Poppins: ["Poppins", "sans-serif"],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "12px",
        md: "32px",
      },
    },
  },
  plugins: [],
}