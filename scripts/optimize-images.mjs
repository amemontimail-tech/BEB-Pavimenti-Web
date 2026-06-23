import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const PORTFOLIO_DIR = path.join(process.cwd(), 'public', 'portfolio');

// Only process these subdirectories
const TARGET_DIRS = ['privati', 'imprese'];

// Step 1: Flatten nested directories with the same name
function flattenNestedDirectories(dir) {
    if (!fs.existsSync(dir)) return;
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
        if (entry.isDirectory()) {
            const currentDirPath = path.join(dir, entry.name);
            const nestedDirPath = path.join(currentDirPath, entry.name);

            // If a nested directory with the exact same name exists
            if (fs.existsSync(nestedDirPath) && fs.statSync(nestedDirPath).isDirectory()) {
                console.log(`Flattening nested directory: ${nestedDirPath}`);
                const nestedEntries = fs.readdirSync(nestedDirPath);
                
                // Move files up one level
                for (const nestedEntry of nestedEntries) {
                    const srcPath = path.join(nestedDirPath, nestedEntry);
                    const destPath = path.join(currentDirPath, nestedEntry);
                    // Avoid overwriting if file already exists in parent
                    if (!fs.existsSync(destPath)) {
                        fs.renameSync(srcPath, destPath);
                    } else {
                        console.log(`Conflict: ${destPath} already exists.`);
                    }
                }

                // Delete the now-empty nested directory
                const remaining = fs.readdirSync(nestedDirPath);
                if (remaining.length === 0) {
                    fs.rmdirSync(nestedDirPath);
                    console.log(`Deleted empty nested directory: ${nestedDirPath}`);
                }
            }

            // Recurse into the current directory
            flattenNestedDirectories(currentDirPath);
        }
    }
}

// Step 2: Optimize Images (quality 90 for better sharpness while keeping site fast)
async function optimizeImages(dir) {
    if (!fs.existsSync(dir)) return;
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
            await optimizeImages(fullPath);
        } else if (entry.isFile()) {
            const ext = path.extname(entry.name).toLowerCase();

            // Convert JPG/PNG → WebP at quality 90
            if (['.jpg', '.jpeg', '.png'].includes(ext)) {
                const webpPath = fullPath.substring(0, fullPath.lastIndexOf('.')) + '.webp';
                
                try {
                    console.log(`Optimizing: ${fullPath}`);
                    const image = sharp(fullPath);
                    const metadata = await image.metadata();

                    // Resize if width > 1920
                    let sharpInstance = image;
                    if (metadata.width && metadata.width > 1920) {
                        sharpInstance = sharpInstance.resize(1920, null, { withoutEnlargement: true });
                    }

                    await sharpInstance
                        .webp({ quality: 90 })
                        .toFile(webpPath);
                    
                    // Delete original file
                    fs.unlinkSync(fullPath);
                    console.log(`Converted and removed original: ${fullPath}`);
                } catch (err) {
                    console.error(`Error processing ${fullPath}:`, err.message);
                }
            }

            // Re-encode existing WebP files at quality 90
            if (ext === '.webp') {
                try {
                    console.log(`Re-encoding WebP: ${fullPath}`);

                    // Read file into memory first (closes file handle before we write back)
                    const inputBuffer = fs.readFileSync(fullPath);
                    const image = sharp(inputBuffer);
                    const metadata = await image.metadata();

                    let sharpInstance = image;
                    if (metadata.width && metadata.width > 1920) {
                        sharpInstance = sharpInstance.resize(1920, null, { withoutEnlargement: true });
                    }

                    // Process to buffer and write directly to original path
                    const outputBuffer = await sharpInstance
                        .webp({ quality: 90 })
                        .toBuffer();

                    fs.writeFileSync(fullPath, outputBuffer);
                    console.log(`Re-encoded: ${fullPath}`);
                } catch (err) {
                    console.error(`Error re-encoding ${fullPath}:`, err.message);
                }
            }

        }
    }
}

async function run() {
    for (const targetDir of TARGET_DIRS) {
        const dirPath = path.join(PORTFOLIO_DIR, targetDir);

        if (!fs.existsSync(dirPath)) {
            console.log(`Directory not found, skipping: ${dirPath}`);
            continue;
        }

        console.log(`\n--- Processing: ${targetDir} ---`);

        console.log('Starting directory flattening...');
        flattenNestedDirectories(dirPath);
        console.log('Directory flattening complete.');

        console.log('Starting image optimization...');
        await optimizeImages(dirPath);
        console.log(`Image optimization complete for: ${targetDir}`);
    }

    console.log('\nAll done!');
}

run().catch(console.error);
