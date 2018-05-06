const path = require("path");
const styleVariables = require("../src/style/variables");
const Assembly = require("@mapbox/assembly");

Assembly.buildUserAssets(path.resolve(__dirname, "../src/style/assembly"), {
  variables: {
    "font-size-xl": "30px",
    "font-size-l": "18px",
    "font-size-m": "15px",
    "font-size-s": "12px",
    "font-size-xs": "10px",
    "line-height-xl": "30px",
    "line-height-l": "30px",
    "line-height-m": "24px",
    "line-height-s": "18px",
    "line-height-xs": "15px",

    "font-stack-base": styleVariables.roboto
  },
  icons: []
});
