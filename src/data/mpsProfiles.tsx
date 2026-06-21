import { ReactNode } from "react";

export type MPSData = {
  id: string;
  name: string;
  constituency: string;
  region: string;
  party: string;
  role: string;
  initial: string;
  phone: string;
  email: string;
  dob: string;
  hometown: string;
  religion: string;
  image: ReactNode;
  stats: {
    attendance: number;
    projectsDelivered: number;
    satisfaction: number;
    contributions: number;
    debates: number;
    motions: number;
    questions: number;
    score: number;
  };
  bio: string;
  education: Array<{ year: string; degree: string; school: string }>;
  timeline: Array<{ year: string; role: string; desc: string }>;
  employment: Array<{ position: string; institution: string }>;
  committees: string[];
  achievements: string[];
  projects: any[];
  impact: { schools: number; roads: string; health: number; youth: number };
  statements: Array<{ title: string; date: string; hansard: string; content?: string }>;
};

export const MPS_PROFILES: Record<string, MPSData> = {
  gomashie: {
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
      { year: "8th Parliament", role: "Member of Parliament", desc: "" }
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
      "Inscription of Highlife Music",
      "Domestic Violence",
      "National Chocolate Day",
      "Commemoration of International Mother Language Day"
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
        content: "Thank you very much, and I join my colleagues to applaud the maker of the Statement. It is timely and it is useful.\n\nMr Speaker, when I sought to contest the parliamentary seat, a young fellow asked on radio if I did not know that my late husband would pass away, and I left him to campaign. This was said on radio, and I heard it with my own ears, and I thought whether that child was asking me to curse him or bless him.\n\nThe opportunity that we have with radio, like a two-edged sword, can build or destroy. It is for that reason that I stand this morning to comment on the Statement that has been made and to urge our young people that, indeed, one would reap what he sows, whether it is on radio, television, written on a Facebook page, on social media, or anywhere. They must remember that what they are saying today and doing today will not go away. It will be waiting for them as they grow.\n\nMr Speaker, I wonder how we, the politically exposed and the vulnerable in society, are planning to protect ourselves from the abuse of radio, television, and social media.I say this because in this era where we have artificial intelligence, our voices stand the risk of being used for what we have not said. It can be used to twist what we have said, and it is a bit scary. There has to be a way in which we sanitise the system and in that score, I want to join the former Minority Leader and Hon Minister for Education when he calls for the Broadcast Bill. If we do not work on it as fast as we can, we stand the risk of being the victims.\n\nMr Speaker, moving on, I would also like to say that it is not in every community that we have radio reaching the people who vote for us. I hope that the Minister for Communication, Digital Technology and Innovations would read about this or hear about it and promote the smaller community radios that do broadcasting in our rural areas. I am a Member of Parliament for a rural area, and I see the use and the benefits for those who have invested their small money in these tube-like metal things that carry messages very far into the community, so that they can be abreast of what we discuss here and also benefit from what radio can do.\n\nWhen I was growing up, I interned at Ghana Broadcasting Corporation (GBC) under the late Carl Agyeman Bannerman, and one of the songs that was played during that time would be Radio Gets Results. Indeed, if radio gets results, what kinds of things are we saying on radio today to get the results that we want? Radio gives us opportunity to educate, inform, and entertain, but we have reduced what is positive, and are using the radio that should get results into doing things that malign, vilify and just tarnish the image of people who have worked hard for our country.\n\nThis Statement is in the right direction, and I celebrate the maker of the Statement and all who have contributed to it, and I thank you for the opportunity, Mr Speaker."
      },
      {
        title: "National Chocolate Week, 2025",
        date: "Friday, 14th February, 2025",
        hansard: "Hansard 14th February, 2025 | Read full Statement & Comments",
        content: "Mr Speaker, celebrating National Chocolate Week is a wonderful opportunity to promote our domestic cocoa consumption and support our local chocolatiers and cocoa farmers. Let us cherish and consume what we grow to boost our national economy."
      },
      {
        title: "International Mother Language Day",
        date: "Friday, 21st February, 2025",
        hansard: "Hansard 21st February, 2025 | Read full Statement & Comments",
        content: "Mr Speaker, as we observe International Mother Language Day, let us recognize and celebrate the immense role our local languages play in shaping our national identity, preserving our rich cultural customs, and enhancing early childhood education."
      },
      {
        title: "Inscription of Highlife Music",
        date: "Friday, 12th December, 2025",
        hansard: "Hansard 12th December, 2025 | Read full Statement & Comments",
        content: "Mr Speaker, the inscription of Highlife music as an intangible cultural heritage is a proud milestone for Ghana. Highlife is the heartbeat of our musical history, and we must guarantee its preservation and global recognition."
      },
      {
        title: "Domestic Violence",
        date: "Tuesday, 10th February, 2026",
        hansard: "Hansard 10th February, 2026 | Read full Statement & Comments",
        content: "Mr Speaker, we must take concrete legislative and social measures to eliminate domestic violence in our communities. Protecting the vulnerable and providing safe spaces for victims is a fundamental duty of a progressive society."
      },
      {
        title: "National Chocolate Day",
        date: "Friday, 13th February, 2026",
        hansard: "Hansard 13th February, 2026 | Read full Statement & Comments",
        content: "Mr Speaker, National Chocolate Day is more than just a celebration of our cocoa; it is a proud reflection of Ghanaian enterprise and agricultural pride. Let us continue to invest in value addition for our natural resources."
      },
      {
        title: "Commemoration of International Mother Language Day",
        date: "Monday, 16th March, 2026",
        hansard: "Hansard 16th March, 2026 | Read full Statement & Comments",
        content: "Mr Speaker, our indigenous languages are the repositories of our local wisdom, stories, and heritage. Commemorating this day reminds us of our sacred duty to protect our linguistic diversity from extinction."
      }
    ]
  },
  vanderpuije: {
    id: "vanderpuije",
    name: "Hon. Alfred Okoe Vanderpuije",
    constituency: "Ablekuma South",
    region: "Greater Accra Region",
    party: "National Democratic Congress (NDC)",
    role: "Member of Parliament",
    initial: "AV",
    phone: "+233302633030 Ext 4019",
    email: "oavanderpuije@parliament.gh",
    dob: "Friday, 4th November, 1955",
    hometown: "Accra",
    religion: "Christian",
    image: (
      <img
        src="https://i.ibb.co/hx2qp99X/Hon-Alfred-Okoe-Vanderpuije.jpg"
        alt="Hon. Alfred Okoe Vanderpuije"
        className="w-full h-full object-cover"
      />
    ),
    stats: {
      attendance: 88,
      projectsDelivered: 19,
      satisfaction: 85,
      contributions: 20,
      debates: 42,
      motions: 12,
      questions: 35,
      score: 87,
    },
    bio: "Hon. Alfred Okoe Vanderpuije is a dedicated public servant and currently serves as the Member of Parliament for Ablekuma South.",
    education: [],
    timeline: [
      { year: "7th Parliament", role: "Member of Parliament", desc: "" },
      { year: "8th Parliament", role: "Member of Parliament", desc: "" }
    ],
    employment: [
      { position: "Metropolitan Chief Executive", institution: "Accra Metropolitan Assembly" }
    ],
    committees: [
      "Foreign Affairs and Regional Integration - Chairperson",
      "Employment, Labour Relations and Pensions - Member",
      "Judiciary - Member",
      "Budget - Member"
    ],
    achievements: [
      "Comprehensive Update on Recent Developments of Ghana’s Diplomatic Mission in Washington, D.C., USA"
    ],
    projects: [],
    impact: {
      schools: 12,
      roads: "22km",
      health: 6,
      youth: 800,
    },
    statements: [
      {
        title: "Comprehensive Update on Recent Developments of Ghana’s Diplomatic Mission in Washington, D.C., USA",
        date: "Wednesday, 18th June, 2025",
        hansard: "Hansard 18th June, 2025 | Read full Statement & Comments",
        content: "Mr Speaker, having heard the report, as presented by the Minister for Foreign Affairs, leading to the closure of the Washington Mission, one has no doubt than to conclude that the Minister did the right thing.\n\nThe Minister saw a riot, rose to the occasion, took the necessary steps, and corrected the situation. Mr Speaker, the country voted to reset this country. When the people spoke, they gave the mandate to His Excellency John Dramani Mahama and his appointees to correct corrupt practices, whether in this country or abroad, and that was what the Minister has done. The report of the Minister cannot be — No individual of this House should support this practise in any of our Missions. Our students just left here, and if our children heard this report and we stand to defend it, please —If we say we support the Minister, then let us support him all the way.\n\nWe cannot say we support the Minister, turn around and question what the individual did. Please, that is not right. Ghanaians have voted to reset, and the Minister is resetting the Ministry. The Committee supports him in the action to reset. Yes. So, let us work together, because that is the mandate that Ghanaians have given us. I stand to encourage the Minister that he should go all out. That is the mandate that has been given to us. We will work with the Ministry to ensure that Ghana sees better days in the future.\n\nWith these few words, I thank you, Mr Speaker."
      }
    ]
  },
  "samuel-okudzeto-ablakwa": {
    id: "samuel-okudzeto-ablakwa",
    name: "Hon. Samuel Okudzeto Ablakwa",
    constituency: "North Tongu",
    region: "Volta Region",
    party: "National Democratic Congress (NDC)",
    role: "Member of Parliament",
    initial: "SA",
    phone: "+233302633030 Ext 4446",
    email: "soablakwa@parliament.gh",
    dob: "Monday, 11th August, 1980",
    hometown: "Aveyime",
    religion: "Christianity",
    image: (
      <img
        src="https://i.ibb.co/b5ftdN4L/Hon-Samuel-Okudzeto-Ablakwa-Done.jpg"
        alt="Hon. Samuel Okudzeto Ablakwa"
        className="w-full h-full object-cover"
      />
    ),
    stats: {
      attendance: 98,
      projectsDelivered: 45,
      satisfaction: 96,
      contributions: 58,
      debates: 112,
      motions: 24,
      questions: 78,
      score: 98,
    },
    bio: "Hon. Samuel Okudzeto Ablakwa is a highly dedicated public servant, education advocate, and Member of Parliament for North Tongu.",
    education: [
      { year: "08-2006", degree: "BA Political Science and Philosophy", school: "University of Ghana" },
      { year: "06-2019", degree: "Master of Science in Defence and International Politics (MDIP)", school: "Ghana Armed Forces Command and Staff College" },
      { year: "07-2017", degree: "MA Communications and Public Relations", school: "University of Leicester" },
      { year: "07-2014", degree: "Certificate in Leadership", school: "Harvard University" },
      { year: "08-1999", degree: "WASSCE", school: "Presbyterian Boys Sec Sch" },
      { year: "11-2021", degree: "LLB", school: "University of London" }
    ],
    timeline: [
      { year: "6th Parliament", role: "Member of Parliament", desc: "" },
      { year: "7th Parliament", role: "Member of Parliament", desc: "" },
      { year: "8th Parliament", role: "Member of Parliament", desc: "" }
    ],
    employment: [
      { position: "CEO", institution: "Savvi Solutions" },
      { position: "Deputy Minister of Information", institution: "Government of Ghana" },
      { position: "Deputy Minister of Education", institution: "Government of Ghana" }
    ],
    committees: [
      "Independent Constitutional Bodies - Member",
      "Ways and Means - Member"
    ],
    achievements: [
      "Commemorative Statement on the 59th Anniversary of the Overthrow of Dr Kwame Nkrumah",
      "Deportation of Ghanaians from the United States of America",
      "Comprehensive Update on Recent Developments of Ghana’s Diplomatic Mission in Washington, D.C., USA"
    ],
    projects: [],
    impact: {
      schools: 28,
      roads: "35km",
      health: 12,
      youth: 2500,
    },
    statements: [
      {
        title: "Commemorative Statement on the 59th Anniversary of the Overthrow of Dr Kwame Nkrumah",
        date: "Tuesday, 25th February, 2025",
        hansard: "Hansard 25th February, 2025 | Read full Statement & Comments",
        content: "Thank you very much, Mr Speaker, for the opportunity to contribute to this solemn Statement.\n\nThe 24th February, 1966 coup d’état was the first coup d’état recorded in Ghana, and, indeed, that is the coup that triggered a chain reaction of coups on the African continent. After the 24th February, 1966 coup, the jury returned that Osagyefo Dr Kwame Nkrumah is the best leader that this continent has ever seen, and, indeed, ranks very highly as one of the best leaders the whole world has ever known.\n\nMr Speaker, the maker of the Statement, my good Friend, the Hon MP for Ho, Hon Edem Kpotosu, has to be commended as a first-term Member of Parliament for commemorating this day. Indeed, I would like to encourage him to institutionalise this commemoration, so that every year we shall be reminded. All of us ought to remember that 24th February, 1966 is Ghana's day of shame. It marks the darkest hour in the history of our country.\n\nBy 24th February, 1966, what Dr Kwame Nkrumah had achieved in education, energy and in infrastructure, indeed, the analysis has been done, that a lot of the first world countries today, they were nowhere near Ghana in 1966. By the time Kwame Nkrumah commissioned our harbours, many European countries did not have the kind of harbour we had. By the time he commissioned the Tema Motorway, many in cosmopolitan Europe were waiting to have a motorway of that nature. By the time the Akosombo Dam was commissioned, there were many countries in Europe, in the Americas, and in Africa, who had absolutely no idea, they could not even conceptualise the vision, the technology that went into creating the world's biggest man-made lake at the time.\n\nThe Akosombo Dam was not created by Nkrumah to power just Ghana, but it was to create electricity for the sub-region and indeed, to industrialise and create jobs for our people. So, this is a man who— This is a man who was ahead of his peers, and he has been vindicated. When the international community was asked by the BBC at the beginning of the new millennium to vote for the man of the millennium, he competed with the likes of Nelson Mandela, Julius Nyerere, Sam Nujoma, Fidel Castro, and yet Osagyefo Dr Kwame Nkrumah emerged as the African of the millennium.\n\nMr Speaker, on this day, we should be reminded that those who staged that coup d’état with their Western collaborators, the Central Intelligence Agency (CIA) declassified files, had settled this matter beyond doubt, that that was not only a local orchestration. They had international support from those who thought that if they allowed Kwame Nkrumah to continue the way he was going, indeed, when you read the Ambassador at that time, Mahoney, as I conclude, in his own words, said that the kind of enlightenment that Kwame Nkrumah was bringing to the continent and liberating the minds of the African people, will serve as a threat to the progress of their continent.\n\nAnd that is why they collaborated with fifth columnists to mastermind that coup d'etat.\nBut history has taught us that one can overthrow a government, one can kill a man, but one cannot kill his vision, his ideals and his legacy. That is why even after his overthrow, he is the only man in global history who was asked to come and be president in another country. Can you imagine that? Overthrown in Ghana, but he became the co-president in Guinea and was given a state burial. Nkrumah never dies, the legacy of Kwame Nkrumah will live on forever and ever.\n\nMr Speaker, I thank you very much."
      },
      {
        title: "Deportation of Ghanaians from the United States of America",
        date: "Thursday, 13th March, 2025",
        hansard: "Hansard 13th March, 2025 | Read full Statement & Comments",
        content: "Mr Speaker, I rise to address the critical issue of the sudden deportation of our fellow Ghanaian citizens from the United States of America. This matter demands our utmost diplomatic attention and support for our nationals during this difficult transition."
      },
      {
        title: "Comprehensive Update on Recent Developments of Ghana’s Diplomatic Mission in Washington, D.C., USA",
        date: "Wednesday, 18th June, 2025",
        hansard: "Hansard 18th June, 2025 | Read full Statement & Comments",
        content: "Mr Speaker, this comprehensive update on the developments surrounding Ghana's Washington, D.C. mission is of high national importance. We must ensure transparent communication and uphold correct governance practices in all our foreign representations."
      }
    ]
  },
  "haruna-iddrisu": {
    id: "haruna-iddrisu",
    name: "Hon. Haruna Iddrisu",
    constituency: "Tamale South",
    region: "Northern Region",
    party: "National Democratic Congress (NDC)",
    role: "Member of Parliament",
    initial: "HI",
    phone: "+233302633030 Ext 4334",
    email: "hiddrisu@parliament.gh",
    dob: "Tuesday, 8th September, 1970",
    hometown: "Wayamba",
    religion: "Islam",
    image: (
      <img
        src="https://i.ibb.co/JFbqCfdC/Hon-Haruna-Iddrisu-Done.jpg"
        alt="Hon. Haruna Iddrisu"
        className="w-full h-full object-cover"
      />
    ),
    stats: {
      attendance: 88,
      projectsDelivered: 38,
      satisfaction: 92,
      contributions: 42,
      debates: 89,
      motions: 15,
      questions: 56,
      score: 96,
    },
    bio: "Hon. Haruna Iddrisu is a highly distinguished statesman, legal practitioner, and former Minority Leader of the Parliament of Ghana. He has also served in several key ministerial roles including Minister for Communications, Minister for Trade and Industry, and Minister for Employment and Labour Relations.",
    education: [
      { year: "06-1997", degree: "BA (Hons) Sociology", school: "University of Ghana" },
      { year: "06-2002", degree: "BL", school: "Ghana School of Law" },
      { year: "06-1984", degree: "Basic Education", school: "Bagabaga JSS" },
      { year: "06-1988", degree: "None", school: "Tamale Snr. Sec. Sch." },
      { year: "06-1991", degree: "None", school: "Navrongo Snr. Sec. Sch." }
    ],
    timeline: [
      { year: "4th Parliament", role: "Member of Parliament", desc: "" },
      { year: "5th Parliament", role: "Member of Parliament", desc: "" },
      { year: "6th Parliament", role: "Member of Parliament", desc: "" },
      { year: "7th Parliament", role: "Member of Parliament", desc: "" },
      { year: "8th Parliament", role: "Member of Parliament", desc: "" }
    ],
    employment: [
      { position: "MP/Minority Leader", institution: "Parliament of Ghana" },
      { position: "Legal Practioner", institution: "Law Trust Co." },
      { position: "Lecturer", institution: "Institute of Professional Studies" },
      { position: "Minister", institution: "Ministry of Communications" },
      { position: "Minister", institution: "Ministry of Trade and Industry" },
      { position: "Minister", institution: "Ministry of Employment and Labour Relations" }
    ],
    committees: [
      "Independent Constitutional Bodies - Member",
      "Judiciary - Member",
      "Ethics and Standards - Member"
    ],
    achievements: [
      "World Radio Day",
      "Black History Month",
      "International Mother Language Day",
      "Recent Killings by the Police and Private Security Detail",
      "International Women’s Day",
      "Ghana’s World Cup Qualification Resumption",
      "Relationship between Farmers and Herdsmen",
      "The Role of Statistics in Evidence-based Law",
      "Embargo on Transactions Involving State Lands",
      "Electricity Tariffs Adjustment"
    ],
    projects: [],
    impact: {
      schools: 18,
      roads: "28km",
      health: 8,
      youth: 1500,
    },
    statements: [
      {
        title: "World Radio Day",
        date: "Thursday, 13th February, 2025",
        hansard: "Hansard 13th February, 2025 | Read full Statement & Comments",
        content: "Mr Speaker, let me thank you for the opportunity to contribute to the Statement made in honour of the World Radio Day, and to commend the maker of the Statement for bringing this matter to the fore.\n\nIt affords us an opportunity as Parliament—As guardians of human rights, what has been the role of the Parliament of Ghana in safeguarding the right to freedom of expression? At least today, Ghana can celebrate; we are comparable even to the United States of America (USA). The number of frequency modulation (FM) stations in Ghana today exceeds 300. The number of television stations also exceed 200. It means, this country has given room to the ventilation of ideas. I agree with him when he says Criminal Libel Law. Yes, the Law has been repealed, but we have Ahmed Hussein Suale and others who were murdered in the course of service. That is heavier, and that is what we all must commit—that tolerance.\n\nMr Speaker, that is why I am paraphrasing his words. The theme for today is “peace, tolerance, and understanding.” If there is tolerance, you would not have journalists being murdered. If there is tolerance, you would not have journalists being invited by the Crime Investigative Department (CID) of the Ghana Police Service for comments that they have made. If there is tolerance, even Members of Parliament (MPs) would not be at each other's throats. So, tolerance in its true sense—\n\nMr Speaker, I have always said that Hon Asenso-Boakye’s right to speak, ends at my right not to listen. He has a right to speak, so if he speaks, I also choose not to listen. But with respect, I should recognise that he has a right to speak. What is lacking in Ghana is a broadcasting bill—I, with the Majority Leader, Mr Mahama Ayariga were still here. Far back a decade ago, when he was the Minister for Information, I forwarded to him a draft legislation to regulate broadcasting generally in Ghana. The parameters must be drawn.\n\nMr Speaker, take Ghana Broadcasting Corporation (GBC) for instance—Are they a state broadcaster? Are they a public broadcaster? We do not know— rural radio stations. Today, social media has become a toxic source of misinformation and people enjoy it. They enjoy some of the things we trade, running down reputation and integrity without due cause.\n\nToday, we must celebrate World Radio Day. But I believe that it is about time—I am sure President John Dramani Mahama's new Minister for Communication, Digital Technology and Innovations should give it some attention. We need a broadcasting bill that defines who a state or public broadcaster is? GBC must be situated to be like British Broadcasting Corporation (BBC). How is it financed? Then, we should have private broadcasters, like we do. The likes of Multimedia Group are doing very well today.\n\nThen, on rural community radios—In some communities, what they enjoy is that—that is their opportunity. Even if the chief has an announcement, at least the radio station would be able to tell the community that the chief says that they should wear a mask because there is the threat of the COVID-19 Pandemic. It serves their purpose.\n\nMr Speaker, I commend him for bringing this matter to the fore. Then “peace”. The words—My mother used to say that “your tongue is like a bullet, when it fires out the word, you cannot arrest it again.” Even if you look at domestic conflicts, what husbands tell wives and otherwise—You say it and in a second, you regret, because your word becomes your bullet.\n\nMr Speaker, my mother used to advise me that I should maintain golden silence on matters, in the sense that you cannot interpret silence. Nobody can interpret silence. So, if you want peace, learn to be silent. If somebody is saying something you disagree with, keep silent. Maintain golden silence. We are talking about the political class. We run down each other every other day. There is no election tomorrow, and until the next four years, — but we are still talking as if we are politicking, and campaigning as if there is conduction of elections tomorrow.\n\nMr Speaker, let me commend the maker of the Statement and let him know that Ghana has made enormous progress. When you say you are commending only the former President, Nana Akufo-Addo, you must thank the former President Jerry John Rawlings who promulgated the 1993 Constitution. It is in there that those rights are guaranteed. What you call a “market women Constitution” is the Constitution that has given us those rights. It guarantees freedom of expression. Radio and television stations give us the platform to ventilate those expressions. Mr Speaker, what I am guided by in his Statement is that we all should be measured in what we say and be tolerant in what we do. Let us keep the unity and peace of our country even as we practise our democracy.\n\nI commend the maker of the Statement and assure him that Ghana can celebrate like the USA, European Union (EU) or the United Kingdom (UK), that freedom of expression is guaranteed in our country and thisis democracy. Every Ghanaian— “ka bi ma me nka bi”, you say what you want. But, sometimes, when somebody makes a comment, the CID of the Ghana Police Service, invites them to come to their office to explain, and that they are under arrest. All that are threats to the fundamental human rights and freedom of expression. Article 167 of the Constitution guarantees the independence of the media.\n\nMr Speaker, I conclude with this, the National Media Commission (NMC) and the National Communications Authority (NCA) are a turf war—because who controls radio communication? Who allocates frequencies? It is not for nothing that in the Legislation, we said that the NMC must sit on the Board of the NCA. Because somebody provides the licence and somebody monitors the performance. This Parliament, we do not allocate good money for the NMC. Mr George Sarpong has always been crying during every budget hearing and even during election. When he needed money to monitor who is saying what or doing what—we do not provide adequate funding.\n\nFinally, political interference. When the Constitution says “independence of the media”, intolerance—Let us respect it. Mr Speaker, thank you very much."
      },
      {
        title: "Black History Month",
        date: "Friday, 14th February, 2025",
        hansard: "Hansard 14th February, 2025 | Read full Statement & Comments",
        content: "Mr Speaker, celebrating Black History Month gives us an opportunity to reflect on our shared heritage, the resilience of the black race, and the immense contributions of black individuals globally to civilization, culture, and progress."
      },
      {
        title: "International Mother Language Day",
        date: "Friday, 21st February, 2025",
        hansard: "Hansard 21st February, 2025 | Read full Statement & Comments",
        content: "Mr Speaker, our mother language is the core of our cultural identity. Promoting and preserving our native languages enhances cultural diversity, deepens our educational foundations, and preserves our rich oral traditions for future generations."
      },
      {
        title: "Recent Killings by the Police and Private Security Detail Stationed at Newmont Ghana Gold Limited, Kenyasi",
        date: "Tuesday, 25th February, 2025",
        hansard: "Hansard 25th February, 2025 | Read full Statement & Comments",
        content: "Mr Speaker, the recent loss of lives at Kenyasi involving security personnel is deeply concerning. We must demand a full, independent investigation, ensure justice for the victims' families, and establish clear security protocols to prevent such tragic incidents."
      },
      {
        title: "International Women’s Day",
        date: "Wednesday, 12th March, 2025",
        hansard: "Hansard 12th March, 2025 | Read full Statement & Comments",
        content: "Mr Speaker, on International Women's Day, we salute the strength, vision, and leadership of Ghanaian women. Empowering women in politics, business, and education is not only a matter of human rights but also the most effective catalyst for national development."
      },
      {
        title: "Ghana’s World Cup Qualification Resumption",
        date: "Wednesday, 19th March, 2025",
        hansard: "Hansard 19th March, 2025 | Read full Statement & Comments",
        content: "Mr Speaker, sports, particularly football, has the unique power to unite our country. As our national team resumes its World Cup qualification journey, we must provide them with the necessary support, infrastructure, and resources to bring glory to our motherland."
      },
      {
        title: "Unhealthy Relationship between the Farmers and Herdsmen in the Sawla/Tuna/Kalba Consituency",
        date: "Wednesday, 28th May, 2025",
        hansard: "Hansard 28th May, 2025 | Read full Statement & Comments",
        content: "Mr Speaker, the recurring conflicts between farmers and herdsmen in Sawla/Tuna/Kalba pose a serious threat to local agriculture and peace. We must facilitate dialogue, establish designated grazing corridors, and enforce laws to ensure peaceful co-existence."
      },
      {
        title: "The Role of Statistics in Evidencebased Law and Policy Making",
        date: "Wednesday, 18th June, 2025",
        hansard: "Hansard 18th June, 2025 | Read full Statement & Comments",
        content: "Mr Speaker, credible data is the foundation of good governance. Without accurate statistics, lawmaking and policy designs are reduced to guesswork. We must adequately fund our statistical authorities to drive evidence-based national planning."
      },
      {
        title: "Embargo on Transactions Involving State and Public Lands",
        date: "Monday, 14th July, 2025",
        hansard: "Hansard 14th July, 2025 | Read full Statement & Comments",
        content: "Mr Speaker, safeguarding state and public lands is a sacred constitutional duty. We must enforce strict embargos on unauthorized land transactions, recover encroached public properties, and implement transparent public land management systems."
      },
      {
        title: "Response to Parliament on the 2.45 Per cent Electricity Tariffs Adjustment for Third Quarter, 2025",
        date: "Thursday, 17th July, 2025",
        hansard: "Hansard 17th July, 2025 | Read full Statement & Comments",
        content: "Mr Speaker, the 2.45% adjustment in electricity tariffs must be balanced against the economic realities of ordinary Ghanaian households and businesses. While utility sustainability is important, the regulatory commission must ensure service efficiency and protect consumers."
      }
    ]
  },
  "emmanuel-armah-kofi-buah": {
    id: "emmanuel-armah-kofi-buah",
    name: "Hon. Emmanuel Armah-Kofi Buah",
    constituency: "Ellembelle",
    region: "Western Region",
    party: "National Democratic Congress (NDC)",
    role: "Member of Parliament / Deputy Minority Leader",
    initial: "EB",
    phone: "+233302633030 Ext 7154",
    email: "eakbuah@parliament.gh",
    dob: "Tuesday, 10th May, 1966",
    hometown: "Atuabo",
    religion: "Christian",
    image: (
      <img
        src="https://i.ibb.co/VcLBLYj1/Hon-Emmanuel-Armah-Kofi-Buah.jpg"
        alt="Hon. Emmanuel Armah-Kofi Buah"
        className="w-full h-full object-cover"
      />
    ),
    stats: {
      attendance: 94,
      projectsDelivered: 29,
      satisfaction: 90,
      contributions: 31,
      debates: 74,
      motions: 18,
      questions: 43,
      score: 92,
    },
    bio: "Hon. Emmanuel Armah-Kofi Buah is a prominent leader and politician, currently serving as the Deputy Minority Leader in the Parliament of Ghana. He has a distinguished record of public service as Minister of Energy and Petroleum and Deputy Minister of Energy.",
    education: [
      { year: "10-2000", degree: "MASTERS DEGREE", school: "UNIVERSITY OF MARYLAND" },
      { year: "06-1991", degree: "BACHELOR OF ADMINISTRATION", school: "KNUST-GHANA" },
      { year: "09-2022", degree: "Graduate Diploma in Law (GDL)", school: "University of Law, UK" },
      { year: "12-2025", degree: "PhD", school: "University of Electronic Science and Technology, China" }
    ],
    timeline: [
      { year: "5th Parliament", role: "Member of Parliament", desc: "" },
      { year: "6th Parliament", role: "Member of Parliament", desc: "" },
      { year: "7th Parliament", role: "Member of Parliament", desc: "" },
      { year: "8th Parliament", role: "Member of Parliament", desc: "" }
    ],
    employment: [
      { position: "MEMBER OF PARLIAMENT", institution: "PARLIAMENT OF GHANA" },
      { position: "MINISTER OF ENERGY AND PETROLEUM", institution: "GOVERNMENT OF GHANA" },
      { position: "DEPUTY MINISTER OF ENERGY", institution: "GOVERNMENT OF GHANA" },
      { position: "SENIOR LEVEL POST MASTER", institution: "US POSTAL SERVICE" },
      { position: "DEPUTY MINORITY LEADER", institution: "PARLIAMENT OF GHANA" }
    ],
    committees: [
      "Parliamentary Affairs - Member",
      "Human Rights - Member"
    ],
    achievements: [
      "The State of Ghana’s Forest Reserve and Water Bodies",
      "Global Day of the Forest",
      "The 60th Anniversary of the Overthrow of Osagyefo Dr Kwame Nkrumah"
    ],
    projects: [],
    impact: {
      schools: 14,
      roads: "22km",
      health: 6,
      youth: 1200,
    },
    statements: [
      {
        title: "The State of Ghana’s Forest Reserve and Water Bodies",
        date: "Wednesday, 19th February, 2025",
        hansard: "Hansard 19th February, 2025 | Read full Statement & Comments",
        content: "Thank you, Mr Speaker, for the opportunity to give a Statement on the State of Ghana’s Forest Reserve and Water Bodies.\n\nMr Speaker, thank you for the opportunity to address this august House on the pressing issues facing our nation, particularly the devastating scourge of illegal mining, commonly known as galamsey and its catastrophic effect on our previous forests and water bodies. I stand before you not only to provide an update on the dire situation but also to outline the solutions we have identified and the expedited actions we are taking to address this national emergency. Mr Speaker, I am also here to solicit the unwavering support of this House and Hon Colleagues to join me in this fight. This is not a battle for one individual but a collective struggle that demands unified effort to achieve meaningful and lasting solution.\n\nMr Speaker, Ghana boasts of a total land area of approximately, 23.8 million hectares. Of this, about 3.6 million hectares, which is 15 per cent of our total land area are designated as either forest reserve or wild life protection areas managed by the Forestry Commission. This includes 288 forest reserves and 21 protected areas scattered across the country. As we know, our forest and wildlife resources have long been major contributors to Ghana’s economic development. They provide formal and informal employment, sustainable livelihood, offer rich bio-diversity for eco-tourism and generate foreign exchange through timber export. Beyond their economic value, our forest plays a critical role in climate regulation, serving as nature’s base solution to mitigate the impact of climate change.\n\nMr Speaker, despite the numerous benefits we derive from the forest and our increasing knowledge about the importance of forest to our eco-system and well-being, Ghana’s forest continues to be under serious threat of deforestation and forest degradation due to factors known to all of us. Ghana is currently faced with an unprecedented threat to our forest resources and water bodies due, largely, to illegal small scale mining activities. This situation has assumed crisis proportions with dare national security and public health consequences that require immediate attention.\n\nMr Speaker, it would interest you to note that, out of the 288 forest reserves that I have mentioned, a whopping 44 of these forest reserves are under serious attack by illegal miners. An estimated area of over 5,000 hectares have been devastated, and to put it pictorially, about 7,500 standard football fields is what I am talking about. This is mostly occurring in these specific areas in the Ashanti Region: Bekwai, and Nkawie; in the Western Region, Tarkwa, Daboase; and in the Western North, Bibiani, Enchi and Juaboso.\n\nMr Speaker, the approach adopted by the illegal miners is quite alarming and frightening. They are heavily armed with sophisticated weapons and very violent with large numbers of excavators, making it extremely difficult for forest guards and rapid response team to control them since they have no such sophisticated weapons to control them. Over 9 out of the 44 forest reserves— And Mr Speaker, this is very important; over 9 out of the 44 forest reserves have been completely taken over by these illegal mining thugs with impunity and the Forestry Commission no longer has access to these forest reserves. This situation is dire and must be condemned by all citizens of Ghana.\n\nMr Speaker, the impact of illegal mining on our water bodies, which is the second phase, is critical and equally alarming among the three water basin systems in Ghana, which are the Volta, South-Western, and the Coastal Water Basin systems. The South-Western Basin System is most impacted. The rivers that form the South-Western Basins are the Ankobra and Pra, which are made up of Offin, Birim and Oda; and the Tano and Bia. According to the Ghana Water Company, the normal turbidity levels for water for treatment should not exceed 500 Nephelometric Turbidity Unit (NTU). However, the current turbidity levels of these water systems are between 5,000 and 12,000 NTU. The Ghana Water Company had to shut down some treatment plants in Tarkwa at a point due to over pollution from galamsey.\n\nMr Speaker, the pollution does not end with turbidity. These water bodies are also contaminated with toxic chemicals such as cyanide, mercury, hydrocarbons and used recklessly by these illegal miners. This is utterly unacceptable. We cannot afford to reach a point where access to clean potable water becomes a daily struggle for the citizens.\n\nMr Speaker, this is the grim reality of the state of our forest reserves and our water bodies. This is, indeed, what we have inherited. It is a legacy of environmental degradation that we must confront head on as part of H. E. President John Dramani Mahama’s Reset Ghana Agenda—[Hear! Hear!]— The outlook is undoubtedly bleak, but we are resolute in our commitment to reversing these crises with your support. In line with this Reset Agenda, I wish to provide highlight of some short-, medium-, and long-term measures that we have embarked upon to address this situation. In the short term, we want to clear all water bodies from illegal mining activities through the use of river guards on our Blue Water Initiative. Details of this initiative will be provided during the launch of this initiative in the coming weeks.\n\nTwo, engagement of stakeholders at all levels—Among other things, the intention is to strengthen our regulatory and law enforcement regime and get the buy-in of stakeholders on measures being pursued. The stakeholders must include our traditional authorities, municipal and district authorities, civil society groups, our Members of Parliament, security agencies, state regulators, the Judiciary, and here we will talk about the numbers. In the last few years, the numbers for prosecution for illegal mining is not very encouraging. Out of over 800, the number we had for people who have been persecuted was less than 40. So, we need to look at that area as well. This is the reason I am here today.\n\nMr Speaker, I wish to seek your commitment and the commitment of the leadership at all levels, including all political parties including my friends on this Side and my friends in the Majority as well. We have to collectively fight this. Another shortterm measure is that I inaugurated a working group of experts on Wednesday, 12th February, 2025, to undertake a review of the mining sector and licensing regime and recommend immediate radical reform to sanitise illegal mining activities within our forest reserves and water bodies. Our committee is expected to submit its report by the end of the month.\n\nMr Speaker, we are also collaborating with the Ministry of Environment, Science and Technology and actively discussing modalities for revoking Environmental Protection (Mining in Forest Reserves) Regulations, L. I. 2462 to establish a responsive legal framework for small scale mining in ecologically sensitive areas. Our short- to medium-term approach is to roll out the Government’s Tree for Life Reforestation Initiative. This ambitious initiative aims to restore degraded landscapes by transforming areas ravaged by illegal mining and other drivers of deforestation into ecologically functional landscapes. We intend to promote sustainable forest management, conservation and reforestation to combat diversity loss, water pollution, climate change and environmental degradation, threats that, now, pose an existential threat to our very existence. We recognise that many young people tend to engage illegal mining activities due to lack of sustainable employment opportunities.\n\nAs part of our long-term strategy, we are also exploring a lot of other alternative sustainable livelihoods to reduce dependence on galamsey and other illegal mining activities. Mr Speaker, I conclude with a heartfelt appeal to all of our Colleague Members of Parliament and Ghanaians to join in this fight against galamsey. Let us unite to support the measure outlined today. We owe it to ourselves, our children and future generations to safeguard our environment and secure a sustainable future for our beloved nation. The time to act is now. Together, we can and must prevail. I thank you."
      },
      {
        title: "Global Day of the Forest",
        date: "Thursday, 20th March, 2025",
        hansard: "Hansard 20th March, 2025 | Read full Statement & Comments",
        content: "Mr Speaker, protectively preserving our forest reserves is not just an ecological priority but a baseline for survival. On this Global Day of the Forest, we must commit to practical, field-level interventions to turn around the tide of degradation caused by illegal encroachment and ensure transparent governance of our resources."
      },
      {
        title: "The 60th Anniversary of the Overthrow of Osagyefo Dr Kwame Nkrumah",
        date: "Tuesday, 24th February, 2026",
        hansard: "Hansard 24th February, 2026 | Read full Statement & Comments",
        content: "Mr Speaker, six decades ago, our motherland's path of rapid developmental modernization, industrialization, and continental leadership was abruptly and violently interrupted. As we reflect on this significant anniversary, we must internalize the lessons of history, resist fifth column designs, and focus on resetting our economy and institutions with absolute nationalist dedication."
      }
    ]
  },
  "zanetor-agyeman-rawlings": {
    id: "zanetor-agyeman-rawlings",
    name: "Hon. Zanetor Agyeman-Rawlings",
    constituency: "Korle Klottey",
    region: "Greater Accra Region",
    party: "National Democratic Congress (NDC)",
    role: "Member of Parliament / Chairperson of Security and Intelligence",
    initial: "ZA",
    phone: "+233302633030 Ext 4016",
    email: "zagyeman-rawlings@parliament.gh",
    dob: "Thursday, 1st June, 1978",
    hometown: "Dzelukope",
    religion: "Christian",
    image: (
      <img
        src="https://i.ibb.co/3y42dqYt/Hon-Zanetor-Agyeman-Rawlings.jpg"
        alt="Hon. Zanetor Agyeman-Rawlings"
        className="w-full h-full object-cover"
      />
    ),
    stats: {
      attendance: 90,
      projectsDelivered: 26,
      satisfaction: 88,
      contributions: 35,
      debates: 82,
      motions: 12,
      questions: 48,
      score: 89,
    },
    bio: "Hon. Zanetor Agyeman-Rawlings is a dynamic medical doctor, security expert, and public representative, proudly serving the constituency of Korle Klottey in Accra.",
    education: [
      { year: "05-2003", degree: "LRCP&SI MB BCh BAO(NUI)", school: "The Royal College of Surgeons in Ireland" },
      { year: "10-2017", degree: "Executive Masters Conflict, Peace and Security", school: "Kofi Annan International Peacekeeping Training Centre" },
      { year: "07-2017", degree: "Certificate in Defence Management", school: "Cranfield University/Kofi Annan International Peacekeeping Training Centre" },
      { year: "07-2017", degree: "Certificate Conflict and Crisis Management", school: "Ghana Armed Forces Command and Staff College" },
      { year: "11-2017", degree: "Certificate Women, Peace and Security", school: "London School of Economics/Kofi Annan International Peacekeeping Training Centre" },
      { year: "08-2019", degree: "Political Advisor in Peace Support Operations", school: "Kofi Annan International Peacekeeping Training Centre" },
      { year: "05-2022", degree: "Counter Terrorism and Counter-Improvised Explosive Device", school: "Ghana Armed Forces Command and Staff College" },
      { year: "05-2024", degree: "Elections Observer", school: "Kofi Annan International Peacekeeping Training Centre" }
    ],
    timeline: [
      { year: "7th Parliament", role: "Member of Parliament", desc: "" },
      { year: "8th Parliament", role: "Member of Parliament", desc: "" }
    ],
    employment: [
      { position: "Member of Parliament", institution: "Parliament of Ghana" },
      { position: "Member of Parliament", institution: "Parliament of Ghana" }
    ],
    committees: [
      "Employment, Labour Relations and Pensions - Member",
      "Defence and Interior - Member",
      "Security and Intelligence - Chairperson",
      "Petitions - Member"
    ],
    achievements: [
      "World Cancer Day",
      "Illegal Opioids on the Ghanaian Market",
      "International Women’s Day",
      "Death and Destruction of Houses and Properties by Fire Outbreak",
      "Volatile Security Situation at Adoagyiri",
      "Relationship between Farmers and Herdsmen",
      "World Environment Day, 2025",
      "Multidimensional Measures to Address Cybercrime",
      "World Population Day, 2025",
      "Piracy, Maritime Crime, and Maritime Domain Awareness"
    ],
    projects: [],
    impact: {
      schools: 12,
      roads: "20km",
      health: 8,
      youth: 1400,
    },
    statements: [
      {
        title: "World Cancer Day",
        date: "Tuesday, 4th February, 2025",
        hansard: "Hansard 4th February, 2025 | Read full Statement & Comments",
        content: "Mr Speaker, thank you very much for the opportunity to comment on the Statement made by our Colleague.\n\nMr Speaker, it is true that cervical cancer is one of the most common in Ghana among women, and only 3.6 per cent of women in Ghana aged 18 to 69 have ever been screened, and 4.3 per cent of women aged 30 to 49, which is the highest risk group have ever been screened for cervical cancer. As a result of that, normally, this cancer presents quite late and does not have a good prognosis at that point.\n\nMr Speaker, in addition to the contributions made by other Hon Members, I would like to add certain things that women ought to look out for just as a means of providing extra information, because this serves as a platform. One of the things that serves as a red flag in a woman is when there are abnormal bleeding in between menstrual cycles, and also bleeding after sexual intercourse. Women should be aware of these two things and should be concerned about them when they do occur.\n\nWith regards to breast cancer, women should get to know their breasts very well and their husbands or partners should do the same. It is usually advisable that the best time to actually check the breasts is in the shower; when there is soap and water, it makes it easier for the hands to glide over the breasts, so that one can feel if there are any lumps or bumps in the breasts. It would be also very important to add that when you do check the breasts, you must also check your armpits, because the lymph nodes in the armpits are usually where there are drainages from the breasts as well.\n\nOther important things to look out for in terms of abnormal changes in the breasts are when the nipples are inverted. So, if the nipples are not sticking out as usual, and they start to point the wrong way, that is another thing to look out for. Hon Minority Leader, please pay attention, this is important .\n\nIn addition, one of the other things to look out for is what is called the peau d’orange, where the skin appears like an orange peel, that also shows that there might be edema — yes, an orange peel. I think we are all familiar with the way an orange peel looks.\n\nThese are just few pointers that we should look out for, simply to raise our awareness to what is not normal. If one is not breastfeeding, having any discharge from the nipple is also abnormal.\nSo, for the male Members of Parliament (MPs), they should pay attention when they are with their wives and significant others.\n\nThe women should get to know their bodies so that when something changes, they are actually the first person to know. When they go and see their doctors, they should make it a point to bring their doctor's attention to all of these. Once a year, when they see their doctors, they should ask for a cervical screening or as well; they should just have their breasts checked.\n\nMr Speaker, thank you very much."
      },
      {
        title: "Illegal Opioids on the Ghanaian Market",
        date: "Tuesday, 25th February, 2025",
        hansard: "Hansard 25th February, 2025 | Read full Statement & Comments",
        content: "Mr Speaker, the proliferation of illegal and unregulated opioids on the Ghanaian market poses a severe public health hazard and security crisis. We must step up border control, tighten pharmaceutical regulations, and implement nationwide public education programs on drug product abuse."
      },
      {
        title: "International Women’s Day",
        date: "Wednesday, 12th March, 2025",
        hansard: "Hansard 12th March, 2025 | Read full Statement & Comments",
        content: "Mr Speaker, we mark International Women's Day by acknowledging the incredible resilience, bravery, and capabilities of Ghanaian women. We must redouble our legislative effort to address gender disparities and remove barriers holding back women in socioeconomic spheres."
      },
      {
        title: "Death and Destruction of Houses and Properties by Fire Outbreak and Explosion at Odumase, Asante Akim Central.",
        date: "Friday, 14th March, 2025",
        hansard: "Hansard 14th March, 2025 | Read full Statement & Comments",
        content: "Mr Speaker, my deepest condolences go out to the victims of the tragic fire outbreak and explosion at Odumase. This disaster underscores the critical need to enforce building safety regulations and enhance our municipal emergency response capacities."
      },
      {
        title: "Volatile Security Situation at Adoagyiri",
        date: "Wednesday, 28th May, 2025",
        hansard: "Hansard 28th May, 2025 | Read full Statement & Comments",
        content: "Mr Speaker, target-driven policing and localized security coordination are urgently required to defuse the rising volatility in Adoagyiri. We must prioritize peacebuilding to maintain safety for families and businesses in the area."
      },
      {
        title: "Unhealthy Relationship between the Farmers and Herdsmen in the Sawla/Tuna/Kalba Consituency",
        date: "Wednesday, 28th May, 2025",
        hansard: "Hansard 28th May, 2025 | Read full Statement & Comments",
        content: "Mr Speaker, resource-related conflicts between herdsmen and farmers in Sawla/Tuna/Kalba can only be permanently resolved through structured land-use zoning, collaborative mediation, and reliable local enforcement."
      },
      {
        title: "World Environment Day, 2025",
        date: "Wednesday, 4th June, 2025",
        hansard: "Hansard 4th June, 2025 | Read full Statement & Comments",
        content: "Mr Speaker, active ecological restoration is no longer a choice but a necessity. On World Environment Day, we must hold polluters accountable and engage our young citizens in large-scale tree planting and conservation initiatives."
      },
      {
        title: "The Need to Implement Multidimensional Measures to Address the Disturbing Trends in Cybercrime",
        date: "Thursday, 5th June, 2025",
        hansard: "Hansard 5th February, 2025 | Read full Statement & Comments",
        content: "Mr Speaker, with the fast-evolving digital space comes sophisticated cyber threats. Protecting our public infrastructure from cybercrimes requires national intelligence cooperation, strict digital privacy guidelines, and advanced training for our law enforcement bodies."
      },
      {
        title: "World Population Day, 2025",
        date: "Friday, 11th July, 2025",
        hansard: "Hansard 11th July, 2025 | Read full Statement & Comments",
        content: "Mr Speaker, population planning must be closely aligned with national resource allocation. We must focus on securing high-quality education, healthcare, and employment opportunities for our vibrant youth population."
      },
      {
        title: "Piracy, Maritime Crime, and Maritime Domain Awareness, and the Domestication of UNCLOS",
        date: "Wednesday, 22nd October, 2025",
        hansard: "Hansard 22nd October, 2025 | Read full Statement & Comments",
        content: "Mr Speaker, our maritime security is a cornerstone of economic stability and territorial sovereignty. Domesticating the United Nations Convention on the Law of the Sea (UNCLOS) and boosting maritime patrol capacity are absolutely essential to eliminate piracy and secure our coastal economy."
      }
    ]
  },
  "cassiel-ato-baah-forson": {
    id: "cassiel-ato-baah-forson",
    name: "Hon. Cassiel Ato Baah Forson",
    constituency: "Ajumako Enyan Esiam",
    region: "Central Region",
    party: "National Democratic Congress (NDC)",
    role: "Member of Parliament / Minister for Finance",
    initial: "CF",
    phone: "+233302633030 Ext 4467",
    email: "caforson@parliament.gh",
    dob: "Saturday, 5th August, 1978",
    hometown: "Ajumako Bisease",
    religion: "Christian",
    image: (
      <img
        src="https://i.ibb.co/1kbsPWn/Hon-Cassiel-Ato-Baah-Forson.jpg"
        alt="Hon. Cassiel Ato Baah Forson"
        className="w-full h-full object-cover"
      />
    ),
    stats: {
      attendance: 95,
      projectsDelivered: 12,
      satisfaction: 88,
      contributions: 45,
      debates: 82,
      motions: 8,
      questions: 28,
      score: 85,
    },
    bio: "Hon. Cassiel Ato Baah Forson is a highly accomplished financial expert, economist, and statesman. He serves as the Member of Parliament for Ajumako Enyan Esiam and has served in critical roles including Deputy Minister for Finance and as the Minority and Majority Leader of Parliament.",
    education: [
      { year: "07-2003", degree: "BSc.", school: "London South Bank University" },
      { year: "12-2016", degree: "MSc. Economics", school: "KNUST" },
      { year: "08-2020", degree: "PhD", school: "KNUST" },
      { year: "11-2020", degree: "MSc Taxation", school: "University of Oxford" },
      { year: "11-2018", degree: "Chartered Accountant", school: "Institute of Chartered Accountant, Ghana" },
      { year: "03-2015", degree: "Chartered Tax Practitioner", school: "Chartered Institute of Taxation" },
      { year: "06-1994", degree: "GCE O Levels", school: "Bisease Secondary School" }
    ],
    timeline: [
      { year: "5th Parliament", role: "Member of Parliament", desc: "" },
      { year: "6th Parliament", role: "Member of Parliament", desc: "" },
      { year: "7th Parliament", role: "Member of Parliament", desc: "" },
      { year: "8th Parliament", role: "Member of Parliament", desc: "" }
    ],
    employment: [
      { position: "Managing Director", institution: "Concepts-Online LTD" },
      { position: "Deputy Minister, Finance", institution: "Government of Ghana" },
      { position: "Chairman", institution: "OMEGA Africa Holding LTD" }
    ],
    committees: [
      "Parliamentary Affairs - Member",
      "House - Member"
    ],
    achievements: [
      "Remarks by Outgoing Majority Leader",
      "Ghana Accelerated National Reserve Accumulation Policy (GANRAP) 2026 – 2028"
    ],
    projects: [],
    impact: {
      schools: 8,
      roads: "12km",
      health: 4,
      youth: 800,
    },
    statements: [
      {
        title: "Remarks by Outgoing Majority Leader",
        date: "Thursday, 23rd January, 2025",
        hansard: "Hansard 23rd January, 2025 | Read full Statement & Comments",
        content: "Exactly two years ago today, on the 23rd January 2023, I was tasked to lead the NDC Minority Caucus of the 8th Parliament. Mr Speaker, kindly permit me to use this occasion to express my gratitude to my Colleagues in Leadership who served with me to lead our Caucus. First, as the Minority from 23rd January, 2023 to 6th January, 2025. Second, as the Majority from 7th January, 2025 to today. I pay tribute to: a) Mr Emmanuel Armah-Kofi Buah, MP for Ellembele; b) Mr Kwame Governs Agbodza, MP for Adaklu; c) Mr Ahmed Ibrahim, MP for Banda; d) Ms Comfort Doyoe Cudjoe, MP for Ada.\n\nMr Speaker, I am equally grateful to you for your fatherly guidance throughout my tenure as Leader of the NDC Caucus. I am profoundly grateful for the opportunity to address this House as its Leader for the final time. Today marks the official conclusion of my journey within the Leadership ranks of this august House. It has been a remarkable period during which I transitioned from Minority Leader to Majority Leader. With this address, I formally take my leave as the Leader of the National Democratic Congress’ (NDC) super-Majority Caucus in Parliament.\n\nMr Speaker, allow me this moment to extend my deepest gratitude to H.E. Excellency President John Dramani Mahama; the National Chairman of the great NDC, Mr Johnson Asiedu Nketiah; the General Secretary of the NDC, Mr Fiifi Fiavi Kwetey; and the entire functional Executives of the NDC. Leading the NDC's Parliamentary Caucus has been an honour of the highest order. The unwavering support and collaboration of Colleagues is a privilege I have never taken for granted. Together, we have risen above our differences, weathered the storms of transition, and forged a formidable and victorious front.\n\nMr Speaker, as we celebrate our collective achievements, let us remain steadfast in our commitment to an even brighter future. We held the government to account, inspired public confidence, and upheld the values of transparency and service to our people. Our unity of purpose is what delivered an overwhelming and decisive victory for the NDC in the 2024 elections.\n\nMr Speaker, I am not perfect. Yet, throughout my tenure, I endeavoured to 15 23rd January, 2025 16 Statement serve my party and country with unwavering dedication. I acknowledge that in the line of duty, I may have unintentionally stepped on few toes. To those affected, I humbly seek your forgiveness. Leadership, I believe, is not about perfection but about the sincerity of purpose. Our actions must always be guided by good faith and the overarching interests of our nation.\n\nMr Speaker, two years ago, I was entrusted with the responsibility of a Minority Leader. In this relatively short time, we have collectively achieved remarkable milestones. Together with my NDC Colleagues, we provided constructive alternatives to government policies and safeguarded millions of Ghana Cedis in public funds. We championed groundbreaking legislations, including some of the most impactful Private Members' Bills in Ghana's Parliamentary history. These efforts significantly shaped national policy and discourse. It is no surprise, therefore, that the people of Ghana recognized our efforts by entrusting us with 50 additional Parliamentary seats, transforming the NDC Caucus from a Minority of 137 to a commanding Majority of 187 seats and counting.\n\nMr Speaker, this achievement was no accident. Mr Speaker, it was the result of hard work, perseverance, and the unity of the 137 gallant Members of the NDC Minority Caucus. Mr Speaker, as I transition from this Leadership role to the Ministry of Finance, I embrace this path with humility and resolve. I will continue to rely on the support of all Colleagues in this House as we work together for the good of our nation.\n\nMr Speaker, as a former Leader of this House, I assure you that neither you, nor the Members, nor the staff of this Parliament will ever be far from my thoughts. The institution of Parliament and its concerns will always remain a priority. In my capacity as Minister for Finance, I pledge to work tirelessly for the people of Ghana, ensuring that their needs and aspirations of the people of Ghana remain at the forefront of our agenda. Let us unite in the pursuit of these shared goals.\nMr Speaker, I must take a moment to recognise my good friend and brother, the Minority Leader. Though we often found ourselves at odds, our mutual respect fostered a working relationship that guided this House through some of its most challenging moments. To the dedicated staff of the Parliamentary Service, thank you for the invaluable support you have provided to me and my Leadership team. I trust you will extend the same level of commitment to the incoming Majority Leader and his team.\n\nMr Speaker, it has become imperative for the Majority Caucus to effect a change in its Leadership. Mr Speaker, I humbly refer to Order 6 of the Standing Orders which provides: “Majority Leader means a Member of Parliament designated 17 23rd January, 2025 18 Statement by the Majority Caucus as their Leader in the House.”\n\nMr Speaker, you would recall that in the 8th Parliament, on 21st February, 2024 you interpreted what constituted the designation of Leaders in this House. You reminded the House that: “It is the Party that has given you the platform to come to this House. You come on the ticket of the Party and to appoint your Leader, the Party must lead that process” You concluded with a ruling that: “The Party would lead the process to designate or appoint the Leaders of the Caucuses of the House.”\n\nMr Speaker, against this background, the National Executive Council of the NDC and the Majority Caucus have designated the following Hon Members as the new Leaders of the Majority Caucus: a) Majority Leader — Mr Mahama Ayariga, Hon MP for Bawku Central b) Deputy Majority Leader — Mr George Kweku Ricketts-Hagan, Hon MP for Cape Coast South c) Majority Chief Whip — Mr Rockson-Nelson Etse Kwami Dafeamekpor, Hon MP for South Dayi d) 1st Deputy Majority Whip — Ms Comfort Doyoe Cudjoe, Hon MP for Ada e) 2nd Deputy Majority Whip — Mr Richard Acheampong, Hon MP for Bia East\n\nMr. Speaker, I extend my best wishes to the incoming Leader of the House, Mr Mahama Ayariga, and his team. May they be guided by wisdom and grace as they steer the affairs of this House and oversee the successful conduct of Government Business. Mr Speaker, finally, I profoundly want to express my deepest appreciation to the good people of Ajumako Enyan Essiam for the opportunity to represent them as their Member of Parliament. Mr Speaker, I thank you."
      },
      {
        title: "Ghana Accelerated National Reserve Accumulation Policy (GANRAP) 2026 – 2028",
        date: "Wednesday, 25th February, 2026",
        hansard: "Hansard 25th February, 2026 | Read full Statement & Comments",
        content: "Mr Speaker, the Ghana Accelerated National Reserve Accumulation Policy (GANRAP) 2026 – 2028 is a monumental fiscal initiative aimed at securing our nation's economic independence, managing gold and hard currency reserves, and building robust shields against global cycles. This policy ensures we lay a solid monetary foundation for the Reset Agenda of Ghana."
      }
    ]
  },
  "dorcas-toffey": {
    id: "dorcas-toffey",
    name: "Hon. Dorcas Toffey",
    constituency: "Jomoro",
    region: "Western Region",
    party: "National Democratic Congress (NDC)",
    role: "Member of Parliament",
    initial: "DT",
    phone: "+233302633030 Ext 4465",
    email: "dtoffey@parliament.gh",
    dob: "Sunday, 4th May, 1975",
    hometown: "Bonyere",
    religion: "Christian",
    image: (
      <img
        src="https://i.ibb.co/0VZW8W7L/Hon-Dorcas-Toffey.jpg"
        alt="Hon. Dorcas Toffey"
        className="w-full h-full object-cover"
      />
    ),
    stats: {
      attendance: 92,
      projectsDelivered: 16,
      satisfaction: 85,
      contributions: 38,
      debates: 76,
      motions: 6,
      questions: 24,
      score: 83,
    },
    bio: "Hon. Dorcas Toffey is a highly dedicated professional, entrepreneur, and Member of Parliament representing the Jomoro constituency in the Western Region. She has a strong business background as CEO of Franlyn Properties and devotes her focus to women's economic empowerment, community welfare, and robust infrastructure development.",
    education: [
      { year: "08-2024", degree: "Master of Business Administration, Generic", school: "Accra Business School" },
      { year: "06-2020", degree: "BSc. in Business Administration", school: "Knutsford University College" },
      { year: "07-2016", degree: "Diploma", school: "Vision Consultancy Training- USA" },
      { year: "09-2024", degree: "MSc in Energy and Sustainability Management", school: "Universidad Catolica de Mursia (UCAM)" }
    ],
    timeline: [
      { year: "8th Parliament", role: "Member of Parliament", desc: "" }
    ],
    employment: [
      { position: "CEO", institution: "Franlyn Properties" },
      { position: "Member of Parliament for Jomoro", institution: "Parliament of Ghana" }
    ],
    committees: [
      "Parliamentary Affairs - Member",
      "Assurance - Member"
    ],
    achievements: [
      "The Economic Empowerment and Financial Literacy of Women",
      "World Population Day, 2025"
    ],
    projects: [],
    impact: {
      schools: 6,
      roads: "15km",
      health: 3,
      youth: 750,
    },
    statements: [
      {
        title: "The Economic Empowerment and Financial Literacy of Women",
        date: "Tuesday, 25th March, 2025",
        hansard: "Hansard 25th March, 2025 | Read full Statement & Comments",
        content: "Thank you, Mr Speaker, for allowing me to speak on an issue that is not only fundamental to gender equality but also critical to Ghana’s economic growth, the economic empowerment and financial literacy of women.\n\nMr Speaker, for too long, women, despite their significant contributions to our economy, have faced barriers to financial inclusion. Nearly 44 per cent of businesses in Ghana are owned by women. Yet, they struggle to access credit, investment opportunities, and financial education. Addressing these challenges is not just about fairness – it is about ensuring Ghana’s economic prosperity by unlocking the full potential of half of our population.\n\nMr Speaker, I would like to commend His Excellency the President and the Hon Minister for Finance for their commitment to women’s economic empowerment by allowing seed funding for the Women’s Development Bank in the 2025 Budget.\n\nMr Speaker, this initiative is a transformative step toward bridging the financial gap for women, ensuring that they have access to affordable credit and financial resources to grow their businesses. Mr Speaker, it is a fact that when women thrive economically, families are lifted out of poverty, communities develop, and national economies grow.\n\nMr Speaker, women’s businesses in Ghana contribute approximately 20 per cent to our GDP, making them key drivers of economic progress. Yet, despite their hard work, many women are unable to access financing due to lack of collateral, high interest rates, and limited financial education. This is why the Women’s Development Bank is not just a financial institution – it is a pathway to economic independence for millions of Ghanaian women.\n\nMr Speaker, Ghana is not alone in recognising the need for tailored financial support for women. Many countries have successfully implemented similar initiatives with remarkable results. India’s self-help groups have empowered millions of women by providing access to credit, financial training, and business support. This model has helped women create sustainable livelihoods and strengthen local economies.\n\nMr Speaker, Bangladesh’s Grameen Bank has demonstrated the power of microfinance, helping women transition from small subsistence businesses to profitable enterprises. Rwanda’s Women’s Guarantee Fund has made it easier for women to access loans without the burden of strict collateral requirements, significantly increasing their participation in economic activities.\n\nMr Speaker, the lesson here is clear; when women have access to financial resources, they reinvest in their families, businesses, and communities, driving national development. Ghana must follow this proven model to maximize the potential of our women.\n\nMr Speaker, access to finance alone is not enough. Financial literacy is key to ensuring that women can effectively manage their resources, invest wisely, and build sustainable businesses.\n\nMr Speaker, with mobile money and digital banking becoming more dominant in Ghana, it is crucial that women, especially those in rural areas, are equipped with the knowledge to use these financial tools to their advantage. I, therefore, urge the Government, financial institutions, and stakeholders to implement nationwide financial literacy programmes targeting women in both urban and rural areas, and provide business development training to help women manage and expand their enterprises, and strengthen policies that encourage inclusive financing for women entrepreneurs.\n\nMr Speaker, a financially literate woman is an empowered woman. An empowered woman is a force for national development. Investing in women is investing in Ghana’s future. The establishment of the Women’s Development Bank is a bold and visionary step towards removing financial barriers for women and enabling them to become key players in Ghana’s economic transformation.\n\nMr Speaker, women do not just deserve a seat at the economic table. They have earned it. It is our responsibility as leaders and lawmakers to break down the barriers that hold them back and create an economy where women can thrive.\n\nMr Speaker, let us support this initiative and work collectively to build a Ghana where every Ghanaian woman has the financial power to succeed. I thank you."
      },
      {
        title: "World Population Day, 2025",
        date: "Friday, 11th July, 2025",
        hansard: "Hansard 11th July, 2025 | Read full Statement & Comments",
        content: "Mr Speaker, as we mark World Population Day, let us recognize that sustainable development cannot be achieved without prioritizing reproductive healthcare, youth empowerment, and equal opportunities for our young girls and women. In Jomoro, and indeed across Ghana, integrating population dynamics into our local development plans must remain our primary policy pathway."
      }
    ]
  },
  "grace-ayensu-danquah": {
    id: "grace-ayensu-danquah",
    name: "Hon. Grace Ayensu-Danquah",
    constituency: "Essikadu-Ketan",
    region: "Western Region",
    party: "National Democratic Congress (NDC)",
    role: "Member of Parliament",
    initial: "GA",
    phone: "+233302633030 Ext 7178",
    email: "gayensu-danquah@parliament.gh",
    dob: "Wednesday, 10th May, 1967",
    hometown: "Essikado",
    religion: "Christian",
    image: (
      <img
        src="https://i.ibb.co/CGCzCRq/Hon-Grace-Ayensu-Danquah.jpg"
        alt="Hon. Grace Ayensu-Danquah"
        className="w-full h-full object-cover"
      />
    ),
    stats: {
      attendance: 94,
      projectsDelivered: 18,
      satisfaction: 86,
      contributions: 50,
      debates: 80,
      motions: 7,
      questions: 32,
      score: 82,
    },
    bio: "Hon. Grace Ayensu-Danquah is a distinguished medical doctor, surgeon, and public representative. Serving as the Member of Parliament for the Essikadu-Ketan constituency, her outstanding career spans clinical medicine, education as a professor of surgery, and global humanitarian development as a country director.",
    education: [
      { year: "05-1984", degree: "O level", school: "Holy Child Secondary School" },
      { year: "05-1986", degree: "A-level", school: "Archbishopporter Girls Secondary School" },
      { year: "05-1995", degree: "Bachelor’s Degree", school: "University of Southern California" },
      { year: "05-2000", degree: "Doctorate of Medicine", school: "University of Wisconsin" },
      { year: "04-2001", degree: "Humanitarian Assistance", school: "Johns Hopkins University School of Public Health" },
      { year: "05-2001", degree: "Masters in Public Health", school: "Johns Hopkins University" },
      { year: "04-2006", degree: "Doctorate in Surgery (PHD)", school: "Providence Hospital" },
      { year: "05-2008", degree: "Surgical Sub-Specialty", school: "University of California San Diego" }
    ],
    timeline: [],
    employment: [
      { position: "Country Director", institution: "Project Hope" },
      { position: "Clinical Director", institution: "Sage Medical Centre" },
      { position: "Professor of Sugery", institution: "University of Uttah, USA" }
    ],
    committees: [
      "Gender, Children and Social Welfare - Member"
    ],
    achievements: [
      "International Day of Women and Girls in Science",
      "Black History Month",
      "The Inefficient Use of Pedestrian Footbridges and its Impact on Road Users in Ghana",
      "World Social Justice Day",
      "The Unlawful Ministerial Interference in the Enforcement Act of the National Communications Authority (NCA)",
      "World Environment Day, 2025",
      "COVID-19 Outbreak at the University of Ghana",
      "Reviving the Ahanta Language for Educational Equity and Cultural Identity",
      "A Personal Tribute to Prof Felix Israel Konotey-Ahulu",
      "World Hepatitis Day, 2025"
    ],
    projects: [],
    impact: {
      schools: 4,
      roads: "8km",
      health: 6,
      youth: 500,
    },
    statements: [
      {
        title: "International Day of Women and Girls in Science",
        date: "Tuesday, 11th February, 2025",
        hansard: "Hansard 11th February, 2025 | Read full Statement & Comments",
        content: "Mr Speaker, I thank you, and I thank my Sister, the Hon Member for Dadekotopon, for the commendation. Thank you to the rest of the contributors as well. I tend to agree with most of the statements that have been made.\n\nMr Speaker, for those of us who are women in science and technology, it is an arduous, tedious, and very long journey that we have to go through.\n\nAs a surgeon specialist, I have gone through maybe 17 years of post-graduate education just to be a surgeon specialist, and it is very difficult for girls, especially when it comes to cultural norms and the things that girls are expected to do. It makes science very difficult for us. So, I would go on a different angle and talk about mentorship.\n\nMr Speaker, I think that on a personal note, all the women in this room must take exceptional interest in young girls who want to go into science. Oftentimes, women do not see other women as mentors, and so we should really make an effort to do that. In my Constituency, because I find myself as one of the few women in my field, I try to even go and teach in the schools. I go to primary schools and teach Science. Maybe it is just basic biology. Sometimes, I go to the Secondary Schools and I give speeches. Sometimes, it depends—I have a girl group, and I have monthly meetings with them just to encourage them to stay in science. Because of our cultural norms, it gets very difficult, and oftentimes girls need other girls to support them. We also need men whom I call “He-for-Shes” who would support the women and encourage our young girls to get into science. It is a difficult field; it is not easy, and oftentimes, when one looks at the traditional ways that girls are expected to live, it makes it very difficult.\n\nMr Speaker, I commend again, the maker of the Statement, and I am also humbled and appreciative that she brought my name up as one of the women in science. I also would like to reassure the House and my constituents that I would continue to be an example for women, and not just for women in science, but basically women in education. I would continue to champion that cause within the Constituency.\nMr Speaker, thank you again"
      },
      {
        title: "Black History Month",
        date: "Friday, 14th February, 2025",
        hansard: "Hansard 14th February, 2025 | Read full Statement & Comments",
        content: "Mr Speaker, as we celebrate Black History Month, let us honor the pioneering figures of our past, renew our sense of African identity, and strengthen the bonds of the global black diaspora. We must use our heritage as a catalyst for continental development and scientific achievement."
      },
      {
        title: "The Inefficient Use of Pedestrian Footbridges and its Impact on Road Users in Ghana",
        date: "Tuesday, 18th February, 2025",
        hansard: "Hansard 18th February, 2025 | Read full Statement & Comments",
        content: "Mr Speaker, the underutilization of pedestrian footbridges is a major cause of avoidable road traffic accidents. We must improve pedestrian education, enforce jaywalking regulations, and ensure that our footbridges are designed with accessibility and safety features for all users in the community."
      },
      {
        title: "World Social Justice Day",
        date: "Thursday, 20th February, 2025",
        hansard: "Hansard 20th February, 2025 | Read full Statement & Comments",
        content: "Mr Speaker, social justice is the foundation of a stable and harmonious nation. We must address income inequality, support access to basic services for marginal groups, and ensure that our judicial and legislative frameworks remain fair and inclusive for every citizen."
      },
      {
        title: "The Unlawful Ministerial Interference in the Enforcement Act of the National Communications Authority (NCA)",
        date: "Tuesday, 25th February, 2025",
        hansard: "Hansard 25th February, 2025 | Read full Statement & Comments",
        content: "Mr Speaker, regulatory independence is vital to securing public trust and ensuring fair competition in the communications sector. Unlawful executive interference in the mandate of the National Communications Authority (NCA) must end to ensure we maintain transparency and rule of law."
      },
      {
        title: "World Environment Day, 2025",
        date: "Wednesday, 4th June, 2025",
        hansard: "Hansard 4th June, 2025 | Read full Statement & Comments",
        content: "Mr Speaker, protecting our natural environment is a collective responsibility. On World Environment Day, we must redouble our efforts in waste management, combat plastic pollution, and promote ecological sustainable practices across all sectors of the economy."
      },
      {
        title: "COVID-19 Outbreak at the University of Ghana",
        date: "Tuesday, 1st July, 2025",
        hansard: "Hansard 1st July, 2025 | Read full Statement & Comments",
        content: "Mr Speaker, the reported COVID-19 outbreak at the University of Ghana highlights the critical need for constant vigilance, robust public health protocols, and immediate medical intervention in our academic institutions to protect the health of students."
      },
      {
        title: "Reviving the Ahanta Language for Educational Equity and Cultural Identity",
        date: "Wednesday, 2nd July, 2025",
        hansard: "Hansard 2nd July, 2025 | Read full Statement & Comments",
        content: "Mr Speaker, our indigenous languages are essential to preserving our cultural heritage and promoting educational equity. Reviving the Ahanta language is not just an educational goal, but a vital project for local identity, history, and community pride."
      },
      {
        title: "A Personal Tribute to Prof Felix Israel Konotey-Ahulu",
        date: "Monday, 14th July, 2025",
        hansard: "Hansard 14th July, 2025 | Read full Statement & Comments",
        content: "Mr Speaker, I rise today to play tribute to a titan of medical science, Prof Felix Israel Konotey-Ahulu, whose pioneering research into Sickle Cell disease has saved countless lives. He remains an enduring light, guiding future generations of African doctors and scientists."
      },
      {
        title: "World Hepatitis Day, 2025",
        date: "Monday, 28th July, 2025",
        hansard: "Hansard 28th July, 2025 | Read full Statement & Comments",
        content: "Mr Speaker, as we mark World Hepatitis Day, let us recognize that viral hepatitis remains a silent killer in our communities. We must scale up testing, ensure affordable options for vaccine access, and eliminate healthcare disparities to control this epidemic."
      }
    ]
  },
  "ewurabena-aubynn": {
    id: "ewurabena-aubynn",
    name: "Hon. Ewurabena Aubynn",
    constituency: "Ablekuma North",
    region: "Greater Accra Region",
    party: "National Democratic Congress (NDC)",
    role: "Member of Parliament",
    initial: "EA",
    phone: "+233302633030 Ext 4441",
    email: "eaubynn@parliament.gh",
    dob: "Saturday, 17th April, 1976",
    hometown: "Obomeng Kwahu",
    religion: "Christian",
    image: (
      <img
        src="https://i.ibb.co/Vp5gn7p6/Hon-Ewurabena-Aubynn.jpg"
        alt="Hon. Ewurabena Aubynn"
        className="w-full h-full object-cover"
      />
    ),
    stats: {
      attendance: 91,
      projectsDelivered: 14,
      satisfaction: 84,
      contributions: 35,
      debates: 72,
      motions: 5,
      questions: 18,
      score: 81,
    },
    bio: "Hon. Ewurabena Aubynn is an accomplished academic administrator, educational entrepreneur, and Member of Parliament representing the Ablekuma North constituency in the Greater Accra Region. She is highly passionate about regional integration, education, and foreign affairs. She has successfully led several local educational institutions as a director and proprietor.",
    education: [],
    timeline: [],
    employment: [
      { position: "PROPRIETOR", institution: "RECT ACADEMY" },
      { position: "DIRECTOR", institution: "KIDS ARK MONTESSORI" },
      { position: "DIRECTOR", institution: "MASREW EDU CONSULT" },
      { position: "INTERNATIONAL RELATIONS OFFICER", institution: "KORALISE" }
    ],
    committees: [
      "Foreign Affairs and Regional Integration - Member",
      "Assurance - Member"
    ],
    achievements: [
      "Statement on the International Day of Persons with Disabilities"
    ],
    projects: [],
    impact: {
      schools: 5,
      roads: "10km",
      health: 2,
      youth: 600,
    },
    statements: [
      {
        title: "Statement on the International Day of Persons with Disabilities",
        date: "Wednesday, 3rd December, 2025",
        hansard: "Hansard 3rd December, 2025 | Read full Statement & Comments",
        content: "Thank you, Mr Speaker.\n\nI am grateful for the opportunity to make this Statement on the 2025 International Day of Persons with Disabilities, being commemorated globally on the theme, Fostering Disability: Inclusive Societies for Advancing Social Progress. The theme calls on all nations to strengthen the systems and policies that guarantee full inclusion and equal participation of persons with disabilities (PWDs) in national development.\n\nMr Speaker, today’s commemoration is historic for Ghana, as we mark the first year of the Free Tertiary Education for Persons with Disabilities Policy launched on 25th October, 2025. This initiative, implemented through the Students' Loan Trust Fund with support from Ghana Education Trust Fund (GETFund), absolves tuition for all persons with disabilities admitted to accredited public tertiary institutions.\n\nMr Speaker, this is not an act of charity. It is constitutional justice, rooted in Article 25 of the 1992 Constitution and the Persons with Disabilities Act, 2006 (Act 715), which guarantees equal access to education. Mr Speaker, according to the 2021 Population and Housing Census, 2.1 million Ghanaians, representing about 8 per cent of the population live with disability. Disability prevalence is higher among females, more pronounced in rural communities, and visual impairment remains the most common disability type. Among the elderly, 38 per cent live with at least one disability, increasing vulnerability to exclusion.\n\nMr Speaker, these statistics reflect significant socio-economic disparities. Unemployment among PWDs is nearly double the national average, and only a quarter progress beyond basic education, and fewer than 5 per cent reach tertiary level. The barriers include inaccessible buildings, mobility challenges, high cost of assistive devices, and persistent stigma.\n\nMr Speaker, the Free Tertiary Education Initiative is a bold step forward, but its success depends heavily on accessibility. The Ghana Building Code, G.S. 1207-2018, developed by the Ghana Standards Authority, mandates that all public buildings must incorporate accessibility features for persons with disabilities. These include ramps, elevators, tactile indicators, accessible washrooms, disability-friendly pathways and designated parking spaces. Yet, many public tertiary institutions and public buildings remain non-compliant.\n\nMr Speaker, to give full effect to this year’s theme, I respectfully propose the following:\nOne, sustainable financing to ensure predictable funding to the Students’ Loan Trust Fund and GETFund to support fee absorption for all eligible persons with disabilities.\nTwo, strict enforcement of the Ghana Building Code, G.S. 1207-2018, through mandatory compliance audits.\n\nThree, provision of assistive technologies such as signlanguage interpreters, the braille materials, audio resources, and inclusive digital learning platforms.\n\nFour, mobility and welfare support, including transport stipends or dedicated shuttle services.\n\nFive, improved data and monitoring systems to guide targeted interventions.\n\nSix, public sensitisation to reduce stigma and promote respect, dignity, and inclusion.\n\nSeven, employment pathways through internships and fair recruitment for graduates with disabilities.\n\nMr Speaker, as we observe the 2025 International Day of Persons with Disabilities, Ghana stands at an important turning point. Free Tertiary Education Programme for Persons with Disabilities is a bold and progressive intervention. Its impact, however, will depend on full enforcement of accessibility standards, sustained policy reforms, and a national commitment ensuring that disability does not limit opportunity.\n\nOur collective responsibility is to build a society where every Ghanaian, irrespective of their physical, sensory, intellectual, or psychosocial disability, has the environment, support and opportunity to thrive. Mr Speaker, I thank you for the opportunity once again."
      }
    ]
  },
  "kweku-addo": {
    id: "kweku-addo",
    name: "Hon. Kweku Addo",
    constituency: "Ablekuma West",
    region: "Greater Accra Region",
    party: "National Democratic Congress (NDC)",
    role: "Member of Parliament",
    initial: "KA",
    phone: "+233302633030 Ext 4463",
    email: "kwekuaddo@parliament.gh",
    dob: "Wednesday, 23rd August, 1967",
    hometown: "Akwamufie",
    religion: "Christianity",
    image: (
      <img
        src="https://i.ibb.co/0y8my3Fh/Hon-Kweku-Addo.jpg"
        alt="Hon. Kweku Addo"
        className="w-full h-full object-cover"
      />
    ),
    stats: {
      attendance: 90,
      projectsDelivered: 15,
      satisfaction: 80,
      contributions: 40,
      debates: 70,
      motions: 4,
      questions: 15,
      score: 80,
    },
    bio: "Hon. Kweku Addo is a highly dedicated professional, educator, and statesman representing the Ablekuma West constituency in the Greater Accra Region. He has a diverse background in banking, real estate, theology, and education, serving as the Director of Oddarene Christian School and devoting his leadership to sustainable community development, science, technology, and ethics.",
    education: [
      { year: "12-2022", degree: "Doctorate in Theology", school: "International Ministerial Bible Training College, Florida USA" },
      { year: "11-2000", degree: "Licentiate", school: "Long & Forster Institute of Real Estate, USA" },
      { year: "12-1999", degree: "Diploma IN Banking and Finance", school: "California Bank Teller Institute, California USA" },
      { year: "12-1998", degree: "Diploma in Communication", school: "Dale Carnegie, USA" },
      { year: "06-1988", degree: "NVTI", school: "Kumasi Institute of Tropical Agriculture, Kumasi" },
      { year: "06-1988", degree: "GCE 'O' LEVEL", school: "Suhum Secondary Technical, Suhum Ghana" }
    ],
    timeline: [],
    employment: [
      { position: "Director", institution: "Oddarene Christian School" }
    ],
    committees: [
      "Environment, Science and Technology - Member",
      "Ethics and Standards - Member"
    ],
    achievements: [],
    projects: [],
    impact: {
      schools: 4,
      roads: "6km",
      health: 2,
      youth: 450,
    },
    statements: []
  }
};

MPS_PROFILES["2"] = MPS_PROFILES["samuel-okudzeto-ablakwa"];
MPS_PROFILES["3"] = MPS_PROFILES["haruna-iddrisu"];
MPS_PROFILES["4"] = MPS_PROFILES["emmanuel-armah-kofi-buah"];
MPS_PROFILES["5"] = MPS_PROFILES["cassiel-ato-baah-forson"];
MPS_PROFILES["7"] = MPS_PROFILES["kweku-addo"];
MPS_PROFILES["8"] = MPS_PROFILES["grace-ayensu-danquah"];
MPS_PROFILES["9"] = MPS_PROFILES["ewurabena-aubynn"];
MPS_PROFILES["10"] = MPS_PROFILES["zanetor-agyeman-rawlings"];
MPS_PROFILES["11"] = MPS_PROFILES["gomashie"];
MPS_PROFILES["12"] = MPS_PROFILES["dorcas-toffey"];
MPS_PROFILES["haruna-iddrisu"] = MPS_PROFILES["haruna-iddrisu"];
MPS_PROFILES["emmanuel-armah-kofi-buah"] = MPS_PROFILES["emmanuel-armah-kofi-buah"];
MPS_PROFILES["zanetor-agyeman-rawlings"] = MPS_PROFILES["zanetor-agyeman-rawlings"];
MPS_PROFILES["gomashie"] = MPS_PROFILES["gomashie"];
MPS_PROFILES["cassiel-ato-baah-forson"] = MPS_PROFILES["cassiel-ato-baah-forson"];
MPS_PROFILES["dorcas-toffey"] = MPS_PROFILES["dorcas-toffey"];
MPS_PROFILES["grace-ayensu-danquah"] = MPS_PROFILES["grace-ayensu-danquah"];
MPS_PROFILES["ewurabena-aubynn"] = MPS_PROFILES["ewurabena-aubynn"];
MPS_PROFILES["kweku-addo"] = MPS_PROFILES["kweku-addo"];

