const fs = require('fs');
const sharp = require('sharp');
const pngToIco = require('png-to-ico').default || require('png-to-ico');

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <rect width="512" height="512" rx="100" fill="#2563eb"/>
  <rect x="128" y="96" width="256" height="80" rx="16" fill="white"/>
  <rect x="128" y="224" width="64" height="64" rx="12" fill="white"/>
  <rect x="224" y="224" width="64" height="64" rx="12" fill="white"/>
  <rect x="320" y="224" width="64" height="64" rx="12" fill="#93c5fd"/>
  <rect x="128" y="320" width="64" height="64" rx="12" fill="white"/>
  <rect x="224" y="320" width="64" height="64" rx="12" fill="white"/>
  <rect x="320" y="320" width="64" height="64" rx="12" fill="#93c5fd"/>
</svg>`;

fs.writeFileSync('favicon.svg', svgContent);

async function generate() {
  await sharp('favicon.svg')
    .resize(256, 256)
    .png()
    .toFile('favicon.png');
    
  console.log('PNG generated');
  
  const buf = await pngToIco('favicon.png');
  fs.writeFileSync('favicon.ico', buf);
  
  console.log('ICO generated');
}

generate().catch(console.error);
