const { minify } = require("uglify-js");
const sass = require("sass");
const path = require("node:path");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/font');
  eleventyConfig.addPassthroughCopy('src/img');
  eleventyConfig.addPassthroughCopy('src/*.txt');
  eleventyConfig.addPassthroughCopy('src/*.ico');

  eleventyConfig.addTemplateFormats("js");
  eleventyConfig.addExtension("js", {
    outputFileExtension: "js",
    compile: async function(inputContent) {
      const result = minify(inputContent);
      return async () => {
        return result.code;
      };
    }
  });

  eleventyConfig.addTemplateFormats("scss");
  eleventyConfig.addExtension("scss", {
    outputFileExtension: "css",
    compile: async function(inputContent, inputPath) {
      let parsed = path.parse(inputPath);
      if(parsed.name.startsWith("_")) {
        return async () => {
          return;
        };
      }
      let result = sass.compileString(inputContent, {
        style: 'compressed',
        loadPaths: [
          parsed.dir || ".",
          'node_modules/normalize.css',
          this.config.dir.includes
        ]
      });
      return async () => {
        return result.css;
      };
    }
  });

  return {
    dir: {
      input: 'src',
      output: 'dist'
    }
  }
};
