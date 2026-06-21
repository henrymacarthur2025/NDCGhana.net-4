const fs = require('fs');

let carousel = fs.readFileSync('src/components/MPCarousel.tsx', 'utf8');
const newCarouselDeps = `const SAMPLE_MPS = [
  {
    slug: "emmanuel-armah-kofi-buah",
    name: "Emmanuel Armah-Kofi Buah",
    constituency: "Ellembelle",
    region: "Western Region",
    initials: "EA",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=600&h=800",
    bio: "Energy sector expert championing oil revenue accountability and rural electrification in Western Ghana.",
    projects: 16,
    devScore: "91%",
  },
  {
    slug: "rockson-nelson-dafeamekpor",
    name: "Rockson-Nelson Dafeamekpor",
    constituency: "South Dayi",
    region: "Volta Region",
    initials: "RD",
    image: "https://i.ibb.co/SwGzfyrz/001-Hon-Rockson-Nelson-Etse-Kwami-Dafeamekpor-Done.jpg",
    bio: "Vocal advocate for accountability, championing the enhancement of lottery proceeds and educational infrastructure.",
    projects: 7,
    devScore: "76%",
  },
  {
    slug: "samuel-okudzeto-ablakwa",
    name: "Samuel O. Ablakwa",
    constituency: "North Tongu",
    region: "Volta Region",
    initials: "SA",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600&h=800",
    bio: "Education advocate leading comprehensive school redevelopment initiatives across North Tongu districts.",
    projects: 32,
    devScore: "95%",
  },
  {
    slug: "zanetor-agyeman-rawlings",
    name: "Zanetor Agyeman-Rawlings",
    constituency: "Klottey-Korle",
    region: "Greater Accra",
    initials: "ZA",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600&h=800",
    bio: "Advocating for disaster risk reduction, youth empowerment, and sustainable urban development in Accra.",
    projects: 15,
    devScore: "92%",
  },
];`;
carousel = carousel.replace(/const SAMPLE_MPS = \[[\s\S]*?\];/m, newCarouselDeps);
fs.writeFileSync('src/components/MPCarousel.tsx', carousel);
