const esbuild = require("esbuild");

esbuild
  .build({
    entryPoints: ["fixtureA.js"],
    bundle: true,
    format: "cjs",
    minify: true,
    outfile: "dist/fixtureA.js",
  })
  .then(() => {
    // require("@babel/core").transformFileSync("./dist/fixture.js", {
    //   presets: ["@linaria"],
    // });
  });
esbuild
  .build({
    entryPoints: ["fixtureA1.js"],
    bundle: true,
    format: "cjs",
    minify: true,
    outfile: "dist/fixtureA1.js",
  })
  .then(() => {
    // require("@babel/core").transformFileSync("./dist/fixtureA1.js", {
    //   presets: ["@linaria"],
    // });
  });
esbuild
  .build({
    entryPoints: ["fixtureA2.js"],
    bundle: true,
    format: "cjs",
    minify: true,
    outfile: "dist/fixtureA2.js",
  })
  .then(() => {
    // require("@babel/core").transformFileSync("./dist/fixtureA2.js", {
    //   presets: ["@linaria"],
    // });
  });
