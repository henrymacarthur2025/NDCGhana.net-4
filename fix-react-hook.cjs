const fs = require('fs');

let content = fs.readFileSync('src/pages/MPProfile.tsx', 'utf8');

const FIX = `
function StatementItem({ stmt, defaultOpen }: { stmt: any, defaultOpen: boolean }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="border border-outline-variant/30 rounded-[1px] overflow-hidden">
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
                  {stmt.content.split('\\n\\n').map((p: string, idx: number) => (
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
}

export default function MPProfile() {
`;

content = content.replace(/export default function MPProfile\(\) \{/, FIX);

// Fix the map loop
const BAD_MAP = `                  {MP.statements.map((stmt, i) => {
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
                  })}`;

const GOOD_MAP = `                  {MP.statements.map((stmt, i) => (
                    <StatementItem key={i} stmt={stmt} defaultOpen={i === 0} />
                  ))}`;

content = content.replace(BAD_MAP, GOOD_MAP);

fs.writeFileSync('src/pages/MPProfile.tsx', content);
