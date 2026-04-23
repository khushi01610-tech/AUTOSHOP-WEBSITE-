const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public/images');

fs.readdir(dir, (err, files) => {
  if (err) throw err;
  
  files.forEach(file => {
    if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')) {
      const inputPath = path.join(dir, file);
      const outputPath = path.join(dir, file.replace(/\.(png|jpg|jpeg)$/, '.webp'));
      
      sharp(inputPath)
        .webp({ quality: 75 })
        .toFile(outputPath)
        .then(() => {
          console.log(`Optimized: ${file}`);
          // Remove old file after success
          fs.unlinkSync(inputPath);
        })
        .catch(err => console.error(err));
    }
  });
});
