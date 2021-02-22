module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        shamrock: {
          "50": "#f5fcf9",
          "100": "#eaf9f3",
          "200": "#cbf0e0",
          "300": "#abe7ce",
          "400": "#6dd4a9",
          "500": "#2ec284",
          "600": "#29af77",
          "700": "#239263",
          "800": "#1c744f",
          "900": "#175f41"
        },
        "shi-gray": {
          "50": "#f8f8f8",
          "100": "#f0f0f0",
          "200": "#dadada",
          "300": "#c3c3c3",
          "400": "#979797",
          "500": "#6a6a6a",
          "600": "#5f5f5f",
          "700": "#505050",
          "800": "#404040",
          "900": "#343434"
        }
      }
    }
  },
  variants: {},
  plugins: []
};
