export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ 'src/assets': 'assets' });
  eleventyConfig.addPassthroughCopy('src/robots.txt');
  eleventyConfig.addPassthroughCopy('src/sitemap.xml');
  return { dir: { input:'src', output:'_site', includes:'_includes' }, templateFormats:['html','njk','md'], htmlTemplateEngine:false };
}
