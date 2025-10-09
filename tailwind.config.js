module.exports = {
  theme: {
    extend: {
      keyframes: {
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        spinSlow: "spinSlow 15s linear infinite",
      },
    },
  },
  plugins: [],
};
