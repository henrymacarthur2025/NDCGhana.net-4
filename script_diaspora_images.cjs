const fs = require('fs');

const REPLACEMENTS = [
  {
    find: '"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400"',
    replace: '"https://i.ibb.co/b5ftdN4L/Hon-Samuel-Okudzeto-Ablakwa-Done.jpg"'
  },
  {
    find: '"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400"', 
    replace: '"https://i.ibb.co/1kbsPWn/Hon-Cassiel-Ato-Baah-Forson.jpg"'
  }
];

let fileStr = fs.readFileSync('src/data/diasporaData.ts', 'utf8');

for (const rep of REPLACEMENTS) {
  fileStr = fileStr.replace(rep.find, rep.replace);
}

fs.writeFileSync('src/data/diasporaData.ts', fileStr);

