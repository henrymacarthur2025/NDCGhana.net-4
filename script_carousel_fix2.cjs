const fs = require('fs');

const REPLACEMENTS = [
  {
    find: '"https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=600&h=800"',
    replace: '"https://i.ibb.co/VcLBLYj1/Hon-Emmanuel-Armah-Kofi-Buah.jpg"'
  },
  {
    find: '"https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600&h=800"', 
    replace: '"https://i.ibb.co/b5ftdN4L/Hon-Samuel-Okudzeto-Ablakwa-Done.jpg"'
  },
  {
    find: '"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600&h=800"',
    replace: '"https://i.ibb.co/3y42dqYt/Hon-Zanetor-Agyeman-Rawlings.jpg"'
  }
];

let carouselFile = fs.readFileSync('src/components/MPCarousel.tsx', 'utf8');

for (const rep of REPLACEMENTS) {
  carouselFile = carouselFile.replace(rep.find, rep.replace);
}

fs.writeFileSync('src/components/MPCarousel.tsx', carouselFile);

