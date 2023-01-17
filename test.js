const Babel = require("@babel/core");

const result = Babel.transformFileSync("./fixture.js", {
  presets: ["@linaria"],
});

console.log("result.code", result.code);
