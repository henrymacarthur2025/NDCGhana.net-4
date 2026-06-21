const fs = require('fs');

let layout = fs.readFileSync('src/pages/MPPortalLayout.tsx', 'utf8');
layout = layout.replace(/Hon\. John Doe/g, 'Hon. Rockson-Nelson Dafeamekpor');
layout = layout.replace(/Ayawaso West/g, 'South Dayi');
layout = layout.replace(/https:\/\/images\.unsplash\.com\/photo-1507003211169-0a1dd7228f2d\?fit=facearea&facepad=2&w=100&h=100&q=80/g, 'https://i.ibb.co/SwGzfyrz/001-Hon-Rockson-Nelson-Etse-Kwami-Dafeamekpor-Done.jpg');
fs.writeFileSync('src/pages/MPPortalLayout.tsx', layout);
