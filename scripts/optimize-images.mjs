import sharp from 'sharp';
import { mkdir } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const assetsDir = path.join(__dirname, '../src/assets');

const jobs = [
  { input: 'brand_recog/Screenshot 2025-05-25 131618.png', output: 'brand_recog/hero.webp', width: 1000, quality: 82 },
  { input: 'brand_recog/image.png', output: 'brand_recog/brand.webp', width: 1000, quality: 82 },
  { input: 'Kiran_Nathani.png', output: 'Kiran_Nathani.webp', width: 480, quality: 80 },
  { input: 'ABHISHEK-PIC.jpg', output: 'ABHISHEK-PIC.webp', width: 480, quality: 80 },
  { input: 'avani.jpg', output: 'avani.webp', width: 480, quality: 80 },
  { input: 'KIZI_MODEL_PINK.webp', output: 'KIZI_MODEL_PINK-opt.webp', width: 640, quality: 78 },
  { input: 'KIZI_MODEL_ORANGE.webp', output: 'KIZI_MODEL_ORANGE-opt.webp', width: 640, quality: 78 },
  { input: 'KIZI_MODEL_BLAZER.webp', output: 'KIZI_MODEL_BLAZER-opt.webp', width: 640, quality: 80 },
  { input: 'KIZI_MODEL_CO-ORD_SET.webp', output: 'KIZI_MODEL_CO-ORD_SET-opt.webp', width: 640, quality: 80 },
];

for (const job of jobs) {
  const inputPath = path.join(assetsDir, job.input);
  const outputPath = path.join(assetsDir, job.output);
  await mkdir(path.dirname(outputPath), { recursive: true });

  await sharp(inputPath)
    .rotate()
    .resize({ width: job.width, withoutEnlargement: true, fit: 'inside' })
    .webp({ quality: job.quality, effort: 4 })
    .toFile(outputPath);

  console.log(`Optimized ${job.input} -> ${job.output}`);
}
