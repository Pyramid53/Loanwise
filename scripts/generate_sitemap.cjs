const fs = require('fs');
const path = require('path');

const articlesDir = path.join(__dirname, "../articles");
const sitemapPath = path.join(__dirname, "../sitemap.xml");

let sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://debtcalc.online/</loc>
    <lastmod>2026-05-24</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
`;

const files = fs.readdirSync(articlesDir);

files.forEach(file => {
  if (file.endsWith('.html')) {
    const priority = file === 'all.html' ? '0.8' : '0.7';
    sitemapContent += `  <url>
    <loc>https://debtcalc.online/articles/${file}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
  </url>
`;
  }
});

sitemapContent += '</urlset>\n';

fs.writeFileSync(sitemapPath, sitemapContent);
console.log('sitemap.xml generated successfully.');
