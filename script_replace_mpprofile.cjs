const fs = require('fs');

let file = fs.readFileSync('src/pages/MPProfile.tsx', 'utf8');

// Find the index of "const MP ="
const startIdx = file.indexOf('const MP = {');
// Find the index of "function StatementItem"
const endIdx = file.indexOf('function StatementItem');

if (startIdx !== -1 && endIdx !== -1) {
    file = file.slice(0, startIdx) + file.slice(endIdx);
}

// Add imports
file = file.replace('import { Link } from "react-router-dom";', 'import { Link, useParams } from "react-router-dom";\nimport { MPS_PROFILES } from "../data/mpsProfiles";');

// Inside export default function MPProfile()
file = file.replace('export default function MPProfile() {\n\n  const [activeTab, setActiveTab]', 'export default function MPProfile() {\n  const { id } = useParams();\n  const MP = MPS_PROFILES[id as string] || MPS_PROFILES["vanderpuije"];\n\n  const [activeTab, setActiveTab]');

fs.writeFileSync('src/pages/MPProfile.tsx', file);
