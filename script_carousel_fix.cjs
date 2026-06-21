const fs = require('fs');

const IMAGE_MAP = {
  "Abla Dzifa Gomashie": "https://i.ibb.co/hxMm4B7B/Hon-Abla-Dzifa-Gomashie.jpg",
  "Alfred Okoe Vanderpuije": "https://i.ibb.co/hx2qp99X/Hon-Alfred-Okoe-Vanderpuije.jpg",
  "Cassiel Ato Baah Forson": "https://i.ibb.co/1kbsPWn/Hon-Cassiel-Ato-Baah-Forson.jpg",
  "Cassiel Ato Forson": "https://i.ibb.co/1kbsPWn/Hon-Cassiel-Ato-Baah-Forson.jpg",
  "Dorcas Toffey": "https://i.ibb.co/0VZW8W7L/Hon-Dorcas-Toffey.jpg",
  "Emmanuel Armah-Kofi Buah": "https://i.ibb.co/VcLBLYj1/Hon-Emmanuel-Armah-Kofi-Buah.jpg",
  "Ewurabena Aubynn": "https://i.ibb.co/Vp5gn7p6/Hon-Ewurabena-Aubynn.jpg",
  "Grace Ayensu-Danquah": "https://i.ibb.co/CGCzCRq/Hon-Grace-Ayensu-Danquah.jpg",
  "Haruna Iddrisu": "https://i.ibb.co/JFbqCfdC/Hon-Haruna-Iddrisu-Done.jpg",
  "Kweku Addo": "https://i.ibb.co/0y8my3Fh/Hon-Kweku-Addo.jpg",
  "Samuel Okudzeto Ablakwa": "https://i.ibb.co/b5ftdN4L/Hon-Samuel-Okudzeto-Ablakwa-Done.jpg",
  "Samuel O. Ablakwa": "https://i.ibb.co/b5ftdN4L/Hon-Samuel-Okudzeto-Ablakwa-Done.jpg",
  "Zanetor Agyeman-Rawlings": "https://i.ibb.co/3y42dqYt/Hon-Zanetor-Agyeman-Rawlings.jpg",
};

let carouselFile = fs.readFileSync('src/components/MPCarousel.tsx', 'utf8');

for (const name of Object.keys(IMAGE_MAP)) {
  const url = IMAGE_MAP[name];
  // More generic regex
  const blockRegex = new RegExp('(name:\\s*["\']' + name + '["\'],[\\\\s\\\\S]*?image:\\s*)["\'][^"\']+["\']', 'g');
  carouselFile = carouselFile.replace(blockRegex, '$1"' + url + '"');
}
fs.writeFileSync('src/components/MPCarousel.tsx', carouselFile);

