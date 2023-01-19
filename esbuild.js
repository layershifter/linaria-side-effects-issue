const esbuild = require("esbuild");

esbuild
  .build({
    entryPoints: ["fixtureA.js"],
    bundle: true,
    format: "cjs",
    minify: true,
    outfile: "dist/fixtureA.js",
    external: ["@linaria/react"],
  })
  .then(() => {
    // require("@babel/core").transformFileSync("./dist/fixtureA.js", {
    //   presets: ["@linaria"],
    // });
  });
// esbuild
//   .build({
//     entryPoints: ["fixtureB.js"],
//     bundle: true,
//     format: "cjs",
//     minify: true,
//     outfile: "dist/fixtureB.js",
//   })
//   .then(() => {});
esbuild
  .build({
    entryPoints: ["fixtureC.js"],
    bundle: true,
    format: "cjs",
    minify: true,
    outfile: "dist/fixtureC.js",
  })
  .then(() => {
    // require("@babel/core").transformFileSync("./dist/fixtureC.js", {
    //   presets: ["@linaria"],
    // });
  });
