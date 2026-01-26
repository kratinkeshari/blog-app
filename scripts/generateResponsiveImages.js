import sharp from 'sharp';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sizes = [320, 480, 640, 768, 1024];
const sourceDir = path.join(__dirname, '../src/assets');
const outputDir = path.join(__dirname, '../public/images/categories');

const categories = [
  'business',
  'career',
  'lifestyle',
  'productivity',
  'programming',
  'technology',
  'travel'
];

async function ensureDir(dir) {
  try {
    await fs.mkdir(dir, { recursive: true });
  } catch (err) {
    if (err.code !== 'EEXIST') throw err;
  }
}

async function generateResponsiveImages() {
  await ensureDir(outputDir);
  
  for (const category of categories) {
    const inputPath = path.join(sourceDir, `${category}.avif`);
    
    try {
      console.log(`Processing ${category}...`);
      
      // Generate each size
      for (const size of sizes) {
        const outputPath = path.join(outputDir, `${category}-${size}w.avif`);
        
        await sharp(inputPath)
          .resize(size, size, {
            fit: 'cover',
            position: 'center'
          })
          .avif({
            quality: 80,
            effort: 6
          })
          .toFile(outputPath);
        
        console.log(`  ✓ Generated ${category}-${size}w.avif`);
      }
      
      // Generate WebP fallbacks
      for (const size of sizes) {
        const outputPath = path.join(outputDir, `${category}-${size}w.webp`);
        
        await sharp(inputPath)
          .resize(size, size, {
            fit: 'cover',
            position: 'center'
          })
          .webp({
            quality: 80
          })
          .toFile(outputPath);
        
        console.log(`  ✓ Generated ${category}-${size}w.webp (fallback)`);
      }
      
    } catch (error) {
      console.error(`Error processing ${category}:`, error.message);
    }
  }
  
  console.log('\n✅ All responsive images generated successfully!');
}

generateResponsiveImages().catch(console.error);
