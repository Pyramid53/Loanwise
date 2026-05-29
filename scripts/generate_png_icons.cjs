const fs = require('fs');
const sharp = require('sharp');

async function generate() {
  const sizes = [16, 32, 180, 192, 512];
  
  for (const size of sizes) {
    const filename = size === 180 ? 'apple-touch-icon.png' : `favicon-${size}x${size}.png`;
    await sharp('favicon.svg')
      .resize(size, size)
      .png()
      .toFile(filename);
    console.log(`Generated ${filename}`);
  }
}

generate().catch(console.error);
