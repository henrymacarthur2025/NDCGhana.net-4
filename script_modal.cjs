const fs = require('fs');

// src/components/SuggestionModal.tsx
let modal = fs.readFileSync('src/components/SuggestionModal.tsx', 'utf8');
const newModalDeps = `export const ALL_MPS = [
  { name: "Hon. Rockson-Nelson Etse Kwame Dafeamekpor", constituency: "South Dayi", region: "Volta" },
  { name: "Hon. Samuel Okudzeto Ablakwa", constituency: "North Tongu", region: "Volta" },
  { name: "Hon. Haruna Iddrisu", constituency: "Tamale South", region: "Northern" },
  { name: "Hon. Emmanuel Armah-Kofi Buah", constituency: "Ellembelle", region: "Western" },
  { name: "Hon. Cassiel Ato Baah Forson", constituency: "Ajumako Enyan Essiam", region: "Central" },
  { name: "Hon. Alfred Okoe Vanderpuije", constituency: "Ablekuma South", region: "Greater Accra" },
  { name: "Hon. Kweku Addo", constituency: "Ablekuma West", region: "Greater Accra" },
  { name: "Hon. Grace Ayensu-Danquah", constituency: "Essikado-Ketan", region: "Western" },
  { name: "Hon. Ewurabena Aubynn", constituency: "Ablekuma North", region: "Greater Accra" },
  { name: "Hon. Zanetor Agyeman-Rawlings", constituency: "Klottey-Korle", region: "Greater Accra" },
  { name: "Hon. Abla Dzifa Gomashie", constituency: "Ketu South", region: "Volta" },
  { name: "Hon. Dorcas Toffey", constituency: "Jomoro", region: "Western" },
];`;
modal = modal.replace(/export const ALL_MPS = \[[\s\S]*?\];/m, newModalDeps);
fs.writeFileSync('src/components/SuggestionModal.tsx', modal);
