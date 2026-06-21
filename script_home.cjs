const fs = require('fs');

let dashHome = fs.readFileSync('src/pages/MPPortal/DashboardHome.tsx', 'utf8');
dashHome = dashHome.replace(/Hon\. Doe/g, 'Hon. Dafeamekpor');
fs.writeFileSync('src/pages/MPPortal/DashboardHome.tsx', dashHome);
