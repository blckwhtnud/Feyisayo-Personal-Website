module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("Images");
  return {
    passthroughFilecopy: true,
  };
};
