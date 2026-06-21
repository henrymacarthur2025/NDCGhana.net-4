const fs = require('fs');

const NEW_MP = `const MP = {
  id: "gomashie",
  name: "Hon. Abla Dzifa Gomashie",
  constituency: "Ketu South",
  region: "Volta Region",
  party: "National Democratic Congress (NDC)",
  role: "Member of Parliament",
  initial: "AG",
  phone: "+233302633030 Ext 4534",
  email: "adgomashie@parliament.gh",
  dob: "Sunday, 25th July, 1965",
  hometown: "Aflao",
  religion: "Christian",
  image: (
    <img 
      src="https://i.ibb.co/hxMm4B7B/Hon-Abla-Dzifa-Gomashie.jpg" 
      alt="Hon. Abla Dzifa Gomashie" 
      className="w-full h-full object-cover" 
    />
  ),
  stats: {
    attendance: 92,
    projectsDelivered: 14,
    satisfaction: 88,
    contributions: 15,
    debates: 35,
    motions: 8,
    questions: 24,
    score: 86,
  },
  bio: "Hon. Abla Dzifa Gomashie is a dedicated public servant and currently serves as the Member of Parliament for Ketu South.",
  education: [
    { year: "06-2008", degree: "MPHIL", school: "UNIVERSITY OF GHANA" },
    { year: "06-2003", degree: "BFA", school: "UNIVERSITY OF GHANA" },
    { year: "06-1998", degree: "DIPLOMA", school: "UNIVERSITY OF GHANA" }
  ],
  timeline: [
    { year: "8th Parliament", role: "Member of Parliament", desc: "Current Member of Parliament for Ketu South." }
  ],
  employment: [
    { position: "DEPUTY MINISTER", institution: "GOVERNMENT OF GHANA" }
  ],
  committees: [
    "Gender, Children and Social Welfare - Member",
    "Privileges and Immunities - Member"
  ],
  achievements: [
    "World Radio Day",
    "National Chocolate Week, 2025",
    "International Mother Language Day",
    "Inscription of Highlife Music"
  ],
  projects: [],
  impact: {
    schools: 8,
    roads: "15km",
    health: 4,
    youth: 1200,
  },
  statements: [
    {
      title: "World Radio Day",
      date: "Thursday, 13th February, 2025",
      hansard: "Hansard 13th February, 2025 | Read full Statement & Comments",
      content: "Thank you very much, and I join my colleagues to applaud the maker of the Statement. It is timely and it is useful.\\n\\nMr Speaker, when I sought to contest the parliamentary seat, a young fellow asked on radio if I did not know that my late husband would pass away, and I left him to campaign. This was said on radio, and I heard it with my own ears, and I thought whether that child was asking me to curse him or bless him.\\n\\nThe opportunity that we have with radio, like a two-edged sword, can build or destroy. It is for that reason that I stand this morning to comment on the Statement that has been made and to urge our young people that, indeed, one would reap what he sows, whether it is on radio, television, written on a Facebook page, on social media, or anywhere. They must remember that what they are saying today and doing today will not go away. It will be waiting for them as they grow.\\n\\nMr Speaker, I wonder how we, the politically exposed and the vulnerable in society, are planning to protect ourselves from the abuse of radio, television, and social media.I say this because in this era where we have artificial intelligence, our voices stand the risk of being used for what we have not said. It can be used to twist what we have said, and it is a bit scary. There has to be a way in which we sanitise the system and in that score, I want to join the former Minority Leader and Hon Minister for Education when he calls for the Broadcast Bill. If we do not work on it as fast as we can, we stand the risk of being the victims.\\n\\nMr Speaker, moving on, I would also like to say that it is not in every community that we have radio reaching the people who vote for us. I hope that the Minister for Communication, Digital Technology and Innovations would read about this or hear about it and promote the smaller community radios that do broadcasting in our rural areas. I am a Member of Parliament for a rural area, and I see the use and the benefits for those who have invested their small money in these tube-like metal things that carry messages very far into the community, so that they can be abreast of what we discuss here and also benefit from what radio can do.\\n\\nWhen I was growing up, I interned at Ghana Broadcasting Corporation (GBC) under the late Carl Agyeman Bannerman, and one of the songs that was played during that time would be Radio Gets Results. Indeed, if radio gets results, what kinds of things are we saying on radio today to get the results that we want? Radio gives us opportunity to educate, inform, and entertain, but we have reduced what is positive, and are using the radio that should get results into doing things that malign, vilify and just tarnish the image of people who have worked hard for our country.\\n\\nThis Statement is in the right direction, and I celebrate the maker of the Statement and all who have contributed to it, and I thank you for the opportunity, Mr Speaker."
    },
    {
      title: "National Chocolate Week, 2025",
      date: "Friday, 14th February, 2025",
      hansard: "Hansard 14th February, 2025 | Read full Statement & Comments"
    },
    {
      title: "International Mother Language Day",
      date: "Friday, 21st February, 2025",
      hansard: "Hansard 21st February, 2025 | Read full Statement & Comments"
    },
    {
      title: "Inscription of Highlife Music",
      date: "Friday, 12th December, 2025",
      hansard: "Hansard 12th December, 2025 | Read full Statement & Comments"
    },
    {
      title: "Domestic Violence",
      date: "Tuesday, 10th February, 2026",
      hansard: "Hansard 10th February, 2026 | Read full Statement & Comments"
    },
    {
      title: "National Chocolate Day",
      date: "Friday, 13th February, 2026",
      hansard: "Hansard 13th February, 2026 | Read full Statement & Comments"
    },
    {
      title: "Commemoration of International Mother Language Day",
      date: "Monday, 16th March, 2026",
      hansard: "Hansard 16th March, 2026 | Read full Statement & Comments"
    }
  ]
};`;

let file = fs.readFileSync('src/pages/MPProfile.tsx', 'utf8');

// Find the block from "const MP = {" up to the closing "};" just before "function StatementItem"
const regex = /const MP = \{[\s\S]*?\n\};\n\n\nfunction StatementItem/g;

file = file.replace(regex, NEW_MP + "\n\n\nfunction StatementItem");

fs.writeFileSync('src/pages/MPProfile.tsx', file);
