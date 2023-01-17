const Babel = require("@babel/core");

const result = Babel.transformFileSync("./fixture-simple/index.js", {
  presets: ["@linaria"],
});

console.log("result.code", result.code);
