const fs = require('fs');

const REPLACEMENTS = [
  {
    find: 'image: "1507003211169-0a1dd7228f2d"',
    replace: 'image: "https://i.ibb.co/b5ftdN4L/Hon-Samuel-Okudzeto-Ablakwa-Done.jpg"'
  },
  {
    find: 'image: "1506794778202-cad84cf45f1d"', 
    replace: 'image: "https://i.ibb.co/JFbqCfdC/Hon-Haruna-Iddrisu-Done.jpg"'
  },
  {
    find: 'image: "1554151228176-b4b3b246a482"',
    replace: 'image: "https://i.ibb.co/VcLBLYj1/Hon-Emmanuel-Armah-Kofi-Buah.jpg"'
  }
];

let fileStr = fs.readFileSync('src/pages/Dashboard.tsx', 'utf8');

for (const rep of REPLACEMENTS) {
  fileStr = fileStr.replace(rep.find, rep.replace);
}

fs.writeFileSync('src/pages/Dashboard.tsx', fileStr);

