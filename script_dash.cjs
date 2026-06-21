const fs = require('fs');
let dash = fs.readFileSync('src/pages/Dashboard.tsx', 'utf8');

const newDashDeps = `const CONSTITUENCY_PERFORMANCE = [
  { rank: 1, name: "Tamale South", mp: "Haruna Iddrisu", region: "Northern", score: 96, devScore: 94 },
  { rank: 2, name: "North Tongu", mp: "Samuel Okudzeto Ablakwa", region: "Volta", score: 95, devScore: 98 },
  { rank: 3, name: "South Dayi", mp: "Rockson-Nelson Dafeamekpor", region: "Volta", score: 94, devScore: 91 },
  { rank: 4, name: "Ellembelle", mp: "Emmanuel Armah-Kofi Buah", region: "Western", score: 92, devScore: 90 },
  { rank: 5, name: "Klottey-Korle", mp: "Zanetor Agyeman-Rawlings", region: "Greater Accra", score: 90, devScore: 88 },
];`;
dash = dash.replace(/const CONSTITUENCY_PERFORMANCE = \[[\s\S]*?\];/m, newDashDeps);
fs.writeFileSync('src/pages/Dashboard.tsx', dash);
