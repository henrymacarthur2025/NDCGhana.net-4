const fs = require('fs');

let dirFile = fs.readFileSync('src/pages/MPDirectory.tsx', 'utf8');

// Replace the literal string "\n" with an actual newline
dirFile = dirFile.replace(/\\n/g, '\n');

fs.writeFileSync('src/pages/MPDirectory.tsx', dirFile);
