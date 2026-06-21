const fs = require('fs');
let file = fs.readFileSync('src/pages/MPDirectory.tsx', 'utf8');

// For Vanderpuije
file = file.replace(/id: "6",\s*initial: "AV",\s*name: "Alfred Okoe Vanderpuije"/g, 'id: "vanderpuije",\n      initial: "AV",\n      name: "Hon. Alfred Okoe Vanderpuije"');

// For Gomashie
file = file.replace(/id: "9",\s*initial: "AG",\s*name: "Abla Dzifa Gomashie"/g, 'id: "gomashie",\n      initial: "AG",\n      name: "Hon. Abla Dzifa Gomashie"');

fs.writeFileSync('src/pages/MPDirectory.tsx', file);
