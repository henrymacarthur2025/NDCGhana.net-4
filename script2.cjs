const fs = require('fs');

// src/components/SuggestionModal.tsx
let modal = fs.readFileSync('src/components/SuggestionModal.tsx', 'utf8');
const newModalDeps = `const SEARCH_SUGGESTIONS = [
  { text: "Track Health Projects in Volta", type: "trend" },
  { text: "Recent bills by Hon. Dafeamekpor", type: "trend" },
  { text: "Educational infrastructure in Northern", type: "trend" },
  { text: "Contact Hon. Haruna Iddrisu", type: "trend" },
];

const RECENT_MPS = [
  {
    name: "Hon. Rockson-Nelson Dafeamekpor",
    constituency: "South Dayi",
    region: "Volta",
    image: "https://i.ibb.co/SwGzfyrz/001-Hon-Rockson-Nelson-Etse-Kwami-Dafeamekpor-Done.jpg"
  },
  {
    name: "Hon. Cassiel Ato Baah Forson",
    constituency: "Ajumako Enyan Essiam",
    region: "Central",
    image: "CF"
  },
  {
    name: "Hon. Zanetor Agyeman-Rawlings",
    constituency: "Klottey-Korle",
    region: "Greater Accra",
    image: "ZA"
  },
  {
    name: "Hon. Alfred Okoe Vanderpuije",
    constituency: "Ablekuma South",
    region: "Greater Accra",
    image: "AV"
  }
];

const POPULAR_MPS = [
  { name: "Hon. Samuel Okudzeto Ablakwa", constituency: "North Tongu", region: "Volta" },
  { name: "Hon. Haruna Iddrisu", constituency: "Tamale South", region: "Northern" },
  { name: "Hon. Emmanuel Armah-Kofi Buah", constituency: "Ellembelle", region: "Western" },
  { name: "Hon. Abla Dzifa Gomashie", constituency: "Ketu South", region: "Volta" }
];`;

modal = modal.replace(/const SEARCH_SUGGESTIONS = \[[\s\S]*?const POPULAR_MPS = \[[\s\S]*?\];/m, newModalDeps);
fs.writeFileSync('src/components/SuggestionModal.tsx', modal);


// src/pages/Dashboard.tsx
let dash = fs.readFileSync('src/pages/Dashboard.tsx', 'utf8');

const newDashDeps = `const CONSTITUENCY_PERFORMANCE = [
  {
    rank: 1,
    name: "Tamale South",
    mp: "Haruna Iddrisu",
    region: "Northern",
    score: 96,
    devScore: 94,
  },
  {
    rank: 2,
    name: "North Tongu",
    mp: "Samuel Okudzeto Ablakwa",
    region: "Volta",
    score: 95,
    devScore: 98,
  },
  {
    rank: 3,
    name: "South Dayi",
    mp: "Rockson-Nelson Dafeamekpor",
    region: "Volta",
    score: 94,
    devScore: 91,
  },
  {
    rank: 4,
    name: "Ellembelle",
    mp: "Emmanuel Armah-Kofi Buah",
    region: "Western",
    score: 92,
    devScore: 90,
  },
  {
    rank: 5,
    name: "Klottey-Korle",
    mp: "Zanetor Agyeman-Rawlings",
    region: "Greater Accra",
    score: 90,
    devScore: 88,
  },
];`;
dash = dash.replace(/const CONSTITUENCY_PERFORMANCE = \[[\s\S]*?\];/m, newDashDeps);

const newDashTopMps = `const TOP_MPS = [
  {
    name: "Samuel Okudzeto Ablakwa",
    constituency: "North Tongu",
    score: 98,
    dev: 96,
    image: "1507003211169-0a1dd7228f2d",
  },
  {
    name: "Haruna Iddrisu",
    constituency: "Tamale South",
    score: 96,
    dev: 95,
    image: "1506794778202-cad84cf45f1d",
  },
  {
    name: "Emmanuel Armah-Kofi Buah",
    constituency: "Ellembelle",
    score: 94,
    dev: 92,
    image: "1554151228176-b4b3b246a482",
  },
];`;
dash = dash.replace(/const TOP_MPS = \[[\s\S]*?\];/m, newDashTopMps);
fs.writeFileSync('src/pages/Dashboard.tsx', dash);

// src/components/Admin/AdminMPs.tsx
let adminMps = fs.readFileSync('src/components/Admin/AdminMPs.tsx', 'utf8');
const newTable = `<tbody>
                  {[
                    { name: "Hon. Samuel Okudzeto Ablakwa", constituency: "North Tongu", region: "Volta", attendance: "98%", score: "99", status: "Active" },
                    { name: "Hon. Haruna Iddrisu", constituency: "Tamale South", region: "Northern", attendance: "88%", score: "89", status: "Active" },
                    { name: "Hon. Rockson-Nelson Dafeamekpor", constituency: "South Dayi", region: "Volta", attendance: "85%", score: "76", status: "Active" },
                    { name: "Hon. Zanetor Agyeman-Rawlings", constituency: "Klottey-Korle", region: "Greater Accra", attendance: "90%", score: "89", status: "Active" }
                  ].map((mp, i) => (`;
adminMps = adminMps.replace(/<tbody>\s*\{\[\s*\{[\s\S]*?\]\.map/m, newTable);
fs.writeFileSync('src/components/Admin/AdminMPs.tsx', adminMps);

