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
  "Rockson-Nelson Dafeamekpor": "https://i.ibb.co/SwGzfyrz/001-Hon-Rockson-Nelson-Etse-Kwami-Dafeamekpor-Done.jpg",
  "Hon. Rockson-Nelson Etse Kwame Dafeamekpor": "https://i.ibb.co/SwGzfyrz/001-Hon-Rockson-Nelson-Etse-Kwami-Dafeamekpor-Done.jpg",
  "Hon. Rockson-Nelson Etse Kwami Dafeamekpor": "https://i.ibb.co/SwGzfyrz/001-Hon-Rockson-Nelson-Etse-Kwami-Dafeamekpor-Done.jpg",
  "Rockson-Nelson Etse Kwame Dafeamekpor": "https://i.ibb.co/SwGzfyrz/001-Hon-Rockson-Nelson-Etse-Kwami-Dafeamekpor-Done.jpg",
  "Hon. Cassiel Ato Baah Forson": "https://i.ibb.co/1kbsPWn/Hon-Cassiel-Ato-Baah-Forson.jpg",
  "Hon. Zanetor Agyeman-Rawlings": "https://i.ibb.co/3y42dqYt/Hon-Zanetor-Agyeman-Rawlings.jpg",
  "Hon. Alfred Okoe Vanderpuije": "https://i.ibb.co/hx2qp99X/Hon-Alfred-Okoe-Vanderpuije.jpg",
};

function main() {
  // Update src/pages/MPDirectory.tsx
  let dirFile = fs.readFileSync('src/pages/MPDirectory.tsx', 'utf8');
  for (const name of Object.keys(IMAGE_MAP)) {
    const url = IMAGE_MAP[name];
    
    // We can inject \`image: "URL",\` after \`name: "RegexMatch",\`
    const regex = new RegExp('(name:\\s*("' + name + '"|\'' + name + '\'),)\\n\\s*party:', 'g');
    if (dirFile.match(regex)) {
        dirFile = dirFile.replace(regex, '$1\\n      image: "' + url + '",\\n      party:');
    }

    const regex2 = new RegExp('(name:\\s*("' + name + '"|\'' + name + '\'),\\n\\s*constituency:\\s*"[^"]*",)\\n\\s*score:', 'g');
    if (dirFile.match(regex2)) {
        dirFile = dirFile.replace(regex2, '$1\\n    image: "' + url + '",\\n    score:');
    }
  }
  fs.writeFileSync('src/pages/MPDirectory.tsx', dirFile);

  // Update src/components/MPCarousel.tsx
  let carouselFile = fs.readFileSync('src/components/MPCarousel.tsx', 'utf8');
  for (const name of Object.keys(IMAGE_MAP)) {
    const url = IMAGE_MAP[name];
    // image field already exists in FEATURED_MPS and SAMPLE_MPS
    // We can just find the object with the given name and replace its image field.
    const blockRegex = new RegExp('(slug:.*?,\\s*name:\\s*("' + name + '"|\'' + name + '\'),[\\\\s\\\\S]*?image:)\\s*"[^"]*",', 'g');
    carouselFile = carouselFile.replace(blockRegex, '$1 "' + url + '",');
    
    // FEATURED_MPS check
    const blockRegex2 = new RegExp('(name:\\s*("' + name + '"|\'' + name + '\'),[\\\\s\\\\S]*?image:)\\s*"[^"]*",', 'g');
    carouselFile = carouselFile.replace(blockRegex2, '$1 "' + url + '",');
  }
  fs.writeFileSync('src/components/MPCarousel.tsx', carouselFile);

  // Update src/pages/Dashboard.tsx
  let dashFile = fs.readFileSync('src/pages/Dashboard.tsx', 'utf8');
  for (const name of Object.keys(IMAGE_MAP)) {
    const url = IMAGE_MAP[name];
    // TOP_MPS array has "image", we need to replace it.
    const dashRegex = new RegExp('(name:\\s*("' + name + '"|\'' + name + '\'),[\\\\s\\\\S]*?image:)\\s*"[^"]*",', 'g');
    dashFile = dashFile.replace(dashRegex, '$1 "' + url + '",');
  }
  fs.writeFileSync('src/pages/Dashboard.tsx', dashFile);
  
  // Suggestion Modal RECENT_MPS
  let modalFile = fs.readFileSync('src/components/SuggestionModal.tsx', 'utf8');
  for (const name of Object.keys(IMAGE_MAP)) {
    const url = IMAGE_MAP[name];
    const modalRegex = new RegExp('(name:\\s*("' + name + '"|\'' + name + '\'),[\\\\s\\\\S]*?image:)\\s*"[^"]*"', 'g');
    modalFile = modalFile.replace(modalRegex, '$1 "' + url + '"');
  }
  fs.writeFileSync('src/components/SuggestionModal.tsx', modalFile);
}

main();
