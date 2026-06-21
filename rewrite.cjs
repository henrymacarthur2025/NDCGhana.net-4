const fs = require('fs');

let content = fs.readFileSync('src/pages/MPProfile.tsx', 'utf8');

const newMP = `const MP = {
  id: "12",
  name: "Hon. Rockson-Nelson Etse Kwami Dafeamekpor",
  constituency: "South Dayi",
  region: "Volta",
  party: "National Democratic Congress (NDC)",
  role: "Member of Parliament",
  initial: "RD",
  phone: "+233302633030 Ext None",
  email: "rdafeamekpor@parliament.gh",
  dob: "Thursday, 9th December, 1976",
  hometown: "Woe",
  religion: "Christianity",
  image: (
    <img 
      src="https://i.ibb.co/SwGzfyrz/001-Hon-Rockson-Nelson-Etse-Kwami-Dafeamekpor-Done.jpg" 
      alt="Hon. Rockson-Nelson Dafeamekpor" 
      className="w-full h-full object-cover" 
    />
  ),
  stats: {
    attendance: 88,
    projectsDelivered: 7,
    satisfaction: 85,
    contributions: 9,
    debates: 42,
    motions: 5,
    questions: 18,
    score: 76,
  },
  bio: "Hon. Rockson-Nelson Etse Kwami Dafeamekpor is a dedicated public servant and currently serves as the Member of Parliament for South Dayi in the Volta Region of Ghana.",
  education: [
    { year: "10-2024", degree: "LLM", school: "University of Ghana" },
    { year: "06-2023", degree: "LLM", school: "University of Ghana" },
    { year: "08-2019", degree: "Advanced Certificate", school: "International Law Institute, Georgetown University, Washington DC" },
    { year: "06-2009", degree: "Barrister at Law", school: "Ghana School of Law" },
    { year: "06-2007", degree: "LLB", school: "University of Ghana" },
    { year: "08-2000", degree: "BSc", school: "University of Cape Coast" },
    { year: "06-1995", degree: "GCE Advanced Level", school: "Mawuli School, Ho." },
    { year: "06-1993", degree: "GCE Ordinary Level", school: "Anlo Sec School, Anloga" },
  ],
  timeline: [
    { year: "8th Parliament", role: "Member of Parliament", desc: "Current Member of Parliament for South Dayi." },
    { year: "7th Parliament", role: "Member of Parliament", desc: "Member of Parliament for South Dayi." }
  ],
  employment: [
    { position: "Senior Associate", institution: "Hayibor, Djarbeng & Co." }
  ],
  committees: [
    "Appointments - Member",
    "Business - Member",
    "Committee of Selection - Member",
    "House - Chairperson",
    "Ways and Means - Member",
    "Special Committee (Winnowing) - Member"
  ],
  achievements: [
     "Enhancing Lottery Proceeds and Addressing Challenges in Ghana’s Lottery Sector (Statement)",
     "Request for Urgent Support to Contain Cholera Outbreak in the Effutu Municipality",
     "Commemorative Statement on the 75th Anniversary of Mawuli School",
     "December in Akosombo and Beyond: Strengthening Tourism for Local Economic Development"
  ],
  projects: [],
  impact: {
    schools: 5,
    roads: "20km",
    health: 2,
    youth: 800,
  },
  statements: [
    {
      title: "Enhancing Lottery Proceeds and Addressing Challenges in Ghana’s Lottery Sector",
      date: "Thursday, 6th February, 2025",
      hansard: "Hansard 6th February, 2025 | Read full Statement & Comments",
      content: "Mr Speaker, thank you for the opportunity to make some comments in respect of the Statement ably made by Mr Samuel Awuku.\\n\\nIndeed, in addition to the orthodox lottery system that we know, the online lottery system is fast catching up with the people who patronise it.\\n\\nMr Awuku was able to give some statistics to back the essence of making the Statement on the Floor and indeed, it is founded. We are a Government seeking to enlarge our sources of revenue and online business is a veritable one.\\n\\nIndeed, if we take Kenya for instance, it is projected that this year, the online lottery system alone would give them about US$5million. In 2022, Tanzania got as much as TZS96 billion paid to the Government by the Gaming Board of Tanzania.\\n\\nIt is a remarkable source of revenue generation. This year, in Nigeria, it is projected that the online gaming industry will give them US$100.3 million.\\n\\nSo, in addition to the statistics that he and other Hon Colleagues have given, the indicators from Nigeria, Tanzania and Kenya clearly point to the fact that it is an area that we should pay attention to by way of revenue generation.\\n\\nI agree with my Colleague, the Hon Minority Chief Whip that, maybe as a House, we should refer this to the appropriate Committee to look into it and advise the House in a report, so that when the agencies appear before us—in addition to exercising our oversight duty, you know that we also offer some performance enhancement indicators so, we can direct them to where they should look to.\\n\\nMr Speaker, with these words, I thank you for the opportunity to make my comments in support of the Statement made."
    },
    {
      title: "Request for Urgent Support to Contain Cholera Outbreak in the Effutu Municipality",
      date: "Tuesday, 11th February, 2025",
      hansard: "Hansard 11th February, 2025 | Read full Statement & Comments"
    },
    {
      title: "World Social Justice Day",
      date: "Thursday, 20th February, 2025",
      hansard: "Hansard 20th February, 2025 | Read full Statement & Comments"
    },
    {
      title: "2025 Hajj and Eid-ul Adha Festival",
      date: "Tuesday, 27th May, 2025",
      hansard: "Hansard 27th May, 2025 | Read full Statement & Comments"
    },
    {
      title: "Unfortunate Drowning of Students of Lawra Senior High School in the Dikpe River",
      date: "Tuesday, 17th June, 2025",
      hansard: "Hansard 17th June, 2025 | Read full Statement & Comments"
    },
    {
      title: "The Role of Statistics in Evidencebased Law and Policy Making",
      date: "Wednesday, 18th June, 2025",
      hansard: "Hansard 18th June, 2025 | Read full Statement & Comments"
    },
    {
      title: "Commemorative Statement on the 75th Anniversary of Mawuli School",
      date: "Friday, 24th October, 2025",
      hansard: "Hansard 28th October, 2025 | Read full Statement & Comments"
    },
    {
      title: "Commemoration of World Fisheries Day, 2025",
      date: "Friday, 21st November, 2025",
      hansard: "Hansard 21st November, 2025 | Read full Statement & Comments"
    },
    {
      title: "December in Akosombo and Beyond: Strengthening Tourism for Local Economic Development",
      date: "Wednesday, 3rd December, 2025",
      hansard: "Hansard 3rd December, 2025 | Read full Statement & Comments"
    },
    {
      title: "Tribute to the Late Hon Dr Muhammed Murtala Ibrahim",
      date: "Friday, 13th February, 2026",
      hansard: "Hansard 13th February, 2026 | Read full Statement & Comments"
    }
  ]
};`;

// Replace const MP 
content = content.replace(/const MP = \{[\s\S]*?\};\n/, newMP + '\n');
// Replace contact info
content = content.replace(/href="mailto:office@ablakwa\.com"/g, 'href={`mailto:${MP.email}`}');
content = content.replace(/office@ablakwa\.com/g, '{MP.email}');
content = content.replace(/\+233 24 123\s*4567/g, '{MP.phone}');
content = content.replace(/\+233 24 123 \\n\s*4567/g, '{MP.phone}');
content = content.replace(/\+233 24 123\n\s*4567/g, '{MP.phone}');

// Import ChevronDown 
if (!content.includes('ChevronDown')) {
  content = content.replace('Map,', 'Map,\n  ChevronDown,');
}

// Add the explicit basic structured UI to the overview tab
const UI_REPLACEMENT = `
                {/* NEW ADDITIONS FOR DETAILED PROFILE */}
                <h3 className="text-lg font-bold text-deep-navy mb-4 mt-8">
                  Personal Details
                </h3>
                <div className="bg-surface-bg p-4 rounded-[1px] border border-outline-variant/20 mb-8 overflow-hidden">
                  <table className="w-full text-sm text-left">
                    <tbody>
                      <tr className="border-b border-outline-variant/20"><th className="py-2 pr-4 text-on-surface-variant w-1/3">Hometown</th><td className="py-2 font-medium">{MP.hometown}</td></tr>
                      <tr className="border-b border-outline-variant/20"><th className="py-2 pr-4 text-on-surface-variant">Political Party</th><td className="py-2 font-medium">{MP.party}</td></tr>
                      <tr className="border-b border-outline-variant/20"><th className="py-2 pr-4 text-on-surface-variant">Date of Birth</th><td className="py-2 font-medium">{MP.dob}</td></tr>
                      <tr className="border-b border-outline-variant/20"><th className="py-2 pr-4 text-on-surface-variant">Religion</th><td className="py-2 font-medium">{MP.religion}</td></tr>
                      <tr className="border-b border-outline-variant/20"><th className="py-2 pr-4 text-on-surface-variant">Email</th><td className="py-2 font-medium text-[#006B3C]"><a href={\`mailto:\${MP.email}\`}>{MP.email}</a></td></tr>
                      <tr><th className="py-2 pr-4 text-on-surface-variant">Telephone</th><td className="py-2 font-medium">{MP.phone}</td></tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-lg font-bold text-deep-navy mb-4 mt-8">
                  Employment
                </h3>
                <div className="bg-surface-bg p-4 rounded-[1px] border border-outline-variant/20 mb-8 overflow-hidden">
                   <table className="w-full text-sm text-left">
                    <thead>
                      <tr className="border-b border-outline-variant/30 text-on-surface-variant"><th className="py-2 pr-4">Institution</th><th className="py-2 pr-4">Position</th></tr>
                    </thead>
                    <tbody>
                      {MP.employment.map((emp, i) => (
                        <tr key={i} className="border-b border-outline-variant/20 last:border-0">
                          <td className="py-2 pr-4">{emp.institution}</td>
                          <td className="py-2 pr-4 font-medium">{emp.position}</td>
                        </tr>
                      ))}
                    </tbody>
                   </table>
                </div>

                <h3 className="text-lg font-bold text-deep-navy mb-4 mt-8">
                  Committee Membership
                </h3>
                <div className="bg-surface-bg p-4 rounded-[1px] border border-outline-variant/20 mb-8">
                   <ul className="list-disc list-inside space-y-2 text-sm text-on-surface-variant">
                     {MP.committees.map((com, i) => (
                       <li key={i}>{com}</li>
                     ))}
                   </ul>
                </div>

                <h3 className="text-lg font-bold text-deep-navy mb-4 mt-8">
                  Contributions - Statements
                </h3>
                <div className="space-y-4 mb-8">
                  {MP.statements.map((stmt, i) => {
                    const [isOpen, setIsOpen] = useState(i === 0);
                    return (
                      <div key={i} className="border border-outline-variant/30 rounded-[1px] overflow-hidden">
                        <button 
                          onClick={() => setIsOpen(!isOpen)}
                          className="w-full bg-surface-bg p-4 flex items-center justify-between hover:bg-surface-dim transition-colors text-left"
                        >
                          <span className="font-bold text-deep-navy">{stmt.title}</span>
                          <ChevronDown className={\`w-5 h-5 text-on-surface-variant transform transition-transform \${isOpen ? 'rotate-180' : ''}\`} />
                        </button>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div 
                              initial={{ height: 0 }} 
                              animate={{ height: "auto" }} 
                              exit={{ height: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="p-4 bg-white border-t border-outline-variant/20 text-sm">
                                <div className="text-on-surface-variant mb-2 flex items-center gap-2">
                                   <Calendar className="w-4 h-4"/> {stmt.date}
                                </div>
                                <div className="text-[#006B3C] font-medium mb-4 flex items-center gap-2">
                                  <BookOpen className="w-4 h-4" /> {stmt.hansard}
                                </div>
                                {stmt.content && (
                                  <div className="prose prose-sm max-w-none text-on-surface-variant">
                                    {stmt.content.split('\\n\\n').map((p, idx) => (
                                      <p key={idx}>{p}</p>
                                    ))}
                                  </div>
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
`;

// Insert UI into Overview Tab before closing section
content = content.replace(/<\/div>\s*<\/section>\s*\{\/\* SECTION 9: RECENT ACHIEVEMENTS \*\/\}/, UI_REPLACEMENT + '\n              </div>\n              </section>\n\n              {/* SECTION 9: RECENT ACHIEVEMENTS */}');

fs.writeFileSync('src/pages/MPProfile.tsx', content);
