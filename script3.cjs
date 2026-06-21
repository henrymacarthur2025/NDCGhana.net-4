const fs = require('fs');

// src/components/MPCarousel.tsx
let carousel = fs.readFileSync('src/components/MPCarousel.tsx', 'utf8');
const newCarouselDeps = `const FEATURED_MPS = [
  {
    id: 1,
    name: "Emmanuel Armah-Kofi Buah",
    title: "Member of Parliament for Ellembelle",
    description: "Driving extensive rural electrification and supporting local enterprises across the Western Region.",
    image: "EA",
    stats: { projects: 42, attendance: "96%", score: 91 },
    slug: "emmanuel-armah-kofi-buah"
  },
  {
    id: 2,
    name: "Rockson-Nelson Dafeamekpor",
    title: "Member of Parliament for South Dayi",
    description: "Vocal advocate for accountability, championing the enhancement of lottery proceeds and educational infrastructure.",
    image: "RD",
    stats: { projects: 7, attendance: "88%", score: 76 },
    slug: "rockson-nelson-dafeamekpor"
  },
  {
    id: 3,
    name: "Samuel O. Ablakwa",
    title: "Member of Parliament for North Tongu",
    description: "Leading the charge on public accountability and delivering unprecedented educational interventions in his constituency.",
    image: "SA",
    stats: { projects: 85, attendance: "98%", score: 95 },
    slug: "samuel-okudzeto-ablakwa"
  },
  {
    id: 4,
    name: "Zanetor Agyeman-Rawlings",
    title: "Member of Parliament for Klottey-Korle",
    description: "Advocating for disaster risk reduction, youth empowerment, and sustainable urban development in Accra.",
    image: "ZA",
    stats: { projects: 34, attendance: "92%", score: 88 },
    slug: "zanetor-agyeman-rawlings"
  }
];`;
carousel = carousel.replace(/const FEATURED_MPS = \[[\s\S]*?\];/m, newCarouselDeps);
fs.writeFileSync('src/components/MPCarousel.tsx', carousel);


// src/pages/ProjectTracker.tsx
let projects = fs.readFileSync('src/pages/ProjectTracker.tsx', 'utf8');
const newProjects = `const PROJECTS_DATA = [
  {
    id: "PRJ-2025-081",
    title: "Asylum Down Drainage Reconstruction Phase 2",
    constituency: "Klottey-Korle",
    region: "Greater Accra",
    mp: "Zanetor Agyeman-Rawlings",
    status: "In Progress",
    budget: "GHS 4.2M",
    completion: 65,
    type: "Infrastructure",
    startDate: "15 Jan 2025",
    lastUpdate: "3 days ago"
  },
  {
    id: "PRJ-2025-042",
    title: "South Dayi E-Library Complex",
    constituency: "South Dayi",
    region: "Volta",
    mp: "Rockson-Nelson Dafeamekpor",
    status: "Completed",
    budget: "GHS 1.8M",
    completion: 100,
    type: "Education",
    startDate: "10 Nov 2024",
    lastUpdate: "1 week ago"
  },
  {
    id: "PRJ-2025-063",
    title: "Essikado Rural Water Extension",
    constituency: "Essikado-Ketan",
    region: "Western",
    mp: "Grace Ayensu-Danquah",
    status: "In Progress",
    budget: "GHS 850K",
    completion: 40,
    type: "Water & Sanitation",
    startDate: "02 Feb 2025",
    lastUpdate: "4 days ago"
  },
  {
    id: "PRJ-2024-118",
    title: "Jomoro Maternity Block Annexe",
    constituency: "Jomoro",
    region: "Western",
    mp: "Dorcas Toffey",
    status: "Approved",
    budget: "GHS 2.1M",
    completion: 0,
    type: "Healthcare",
    startDate: "TBD",
    lastUpdate: "Pending Start"
  },
  {
    id: "PRJ-2024-092",
    title: "Battor-Mepe Road Resurfacing",
    constituency: "North Tongu",
    region: "Volta",
    mp: "Samuel Okudzeto Ablakwa",
    status: "Completed",
    budget: "GHS 15.4M",
    completion: 100,
    type: "Roads",
    startDate: "14 May 2024",
    lastUpdate: "2 weeks ago"
  },
  {
    id: "PRJ-2025-015",
    title: "Klottey-Korle Youth Innovation Hub",
    constituency: "Klottey-Korle",
    region: "Greater Accra",
    mp: "Zanetor Agyeman-Rawlings",
    status: "In Progress",
    budget: "GHS 3.5M",
    completion: 80,
    type: "Youth & Sports",
    startDate: "05 Dec 2024",
    lastUpdate: "1 day ago"
  }
];`;
projects = projects.replace(/const PROJECTS_DATA = \[[\s\S]*?\];/m, newProjects);
fs.writeFileSync('src/pages/ProjectTracker.tsx', projects);

