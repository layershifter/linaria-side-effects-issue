const Babel = require("@babel/core");

const resultA = Babel.transformFileSync("./fixtureA.js", {
  presets: ["@linaria"],
});
// const resultB = Babel.transformFileSync("./fixtureB.js", {
//   presets: ["@linaria"],
// });
const resultC = Babel.transformFileSync("./fixtureC.js", {
  presets: ["@linaria"],
});
// console.log("result.code", resultA.code);
// console.log("result.code", resultB.code);
// console.log("result.code", resultC.code);
