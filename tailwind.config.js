module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      xs: { max: "425px" },
      // => @media (max-width: 420px) { ... }
    },
    extend: {
      colors: {
        primary: "#FF7A41",
        blue: "#0d6efd",
        featureBgColor: "#F6FCFF",
        lightBlue: "#06f",
        mainWhite: "#ffffff",
        darkBlue: "#000F5C",
        gray: "#888",
        lightGray: "#555",
        borderColor: "#1C2850",
        inputBorder: "#e3e1e1",
        borderLight: "#fcf7f7",
        footerColor: "#cccccc",
        counterBg: "#666F9D",
        iconsBColor: "#19276c",
        shadowColor: "#00000090",
      },
      boxShadow: {
        "navbar-button": "0px 10px 50px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
};
