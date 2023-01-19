const Babel = require("@babel/core");

const resultA = Babel.transformFileSync("./fixtureA.js", {
  presets: ["@linaria"],
});
const resultA2 = Babel.transformFileSync("./fixtureA1.js", {
  presets: ["@linaria"],
});
const resultA3 = Babel.transformFileSync("./fixtureA2.js", {
  presets: ["@linaria"],
});
// console.log("result.code", resultA.code);
// console.log("result.code", resultA2.code);
// console.log("result.code", resultA3.code);
