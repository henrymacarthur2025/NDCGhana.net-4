const fs = require('fs');

let dashHome = fs.readFileSync('src/pages/MPPortal/DashboardHome.tsx', 'utf8');
dashHome = dashHome.replace(/Ayawaso West/g, 'South Dayi');
fs.writeFileSync('src/pages/MPPortal/DashboardHome.tsx', dashHome);

let conn = fs.readFileSync('src/components/Diaspora/ConstituencyConnect.tsx', 'utf8');
conn = conn.replace(/Ayawaso West Wuogon/g, 'South Dayi');
fs.writeFileSync('src/components/Diaspora/ConstituencyConnect.tsx', conn);

let data = fs.readFileSync('src/data/communityData.ts', 'utf8');
data = data.replace(/Ayawaso West Wuogon/g, 'South Dayi');
data = data.replace(/Ayawaso West/g, 'South Dayi');
fs.writeFileSync('src/data/communityData.ts', data);
