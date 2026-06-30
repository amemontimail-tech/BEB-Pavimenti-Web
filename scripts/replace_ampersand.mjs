import fs from 'fs';
import path from 'path';

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.ts') || file.endsWith('.tsx')) {
        results.push(file);
      }
    }
  });
  return results;
}

const dirs = ['lib', 'app', 'components'];
const allFiles = dirs.flatMap(d => walk(path.join(process.cwd(), d)));

let changedFiles = 0;

for (const file of allFiles) {
  let content = fs.readFileSync(file, 'utf8');
  const original = content;

  // 1. Revert B＆B to B&B
  content = content.replace(/B＆B/g, 'B&B');
  
  // 2. Revert HTML entities
  content = content.replace(/>＆</g, '>&amp;<');
  
  // 3. For English strings (in lib/Bebi18n.ts) use " and "
  content = content.replace(/Flooring ＆ Wall Tiles/g, 'Flooring and Wall Tiles');
  content = content.replace(/Consulting ＆ Design/g, 'Consulting and Design');
  content = content.replace(/Business ＆ Contract Services/g, 'Business and Contract Services');
  content = content.replace(/Parquet ＆ Wood/g, 'Parquet and Wood');

  // 4. For everything else, change ' ＆ ' to ' e '
  content = content.replace(/ ＆ /g, ' e ');

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    changedFiles++;
    console.log(`Updated ${file}`);
  }
}

console.log(`Done. Updated ${changedFiles} files.`);
