import {
  Users,
  Target,
  MapPin,
  Calendar,
  Star,
  ExternalLink,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import SuggestionModal from "../components/SuggestionModal";
import MPCarousel from "../components/MPCarousel";

import RotatingHeadline from "../components/RotatingHeadline";
import DuesPaymentSection from "../components/DuesPaymentSection";

const FEATURED_PROJECTS = [
  {
    id: 1,
    title: "Accra Ring Road Phase 2",
    description:
      "Major expansion of the inner ring road to ease traffic congestion in the central business district.",
    location: "Accra Central",
    status: "Ongoing",
    image:
      "https://i.ibb.co/4ZQQmzJ5/Accra-Ring-Road-Phase-2.jpg",
  },
  {
    id: 2,
    title: "Kumasi Market Complex Expansion",
    description:
      "Modernization of the central market with improved drainage, fire safety, and 500 new stalls.",
    location: "Kumasi Central",
    status: "Completed",
    image:
      "https://i.ibb.co/CKQJ9q0h/Kumasi-Market-Complex-Expansion.jpg",
  },
  {
    id: 3,
    title: "Tamale Central Hospital Renovation",
    description:
      "Upgrading maternity and emergency wards with modern medical equipment.",
    location: "Tamale North",
    status: "Ongoing",
    image:
      "https://i.ibb.co/W4FsPPPP/Tamale-Central-Hospital-Renovation.jpg",
  },
  {
    id: 4,
    title: "Cape Coast STEM School",
    description:
      "State-of-the-art science and technology high school for gifted students in the region.",
    location: "Cape Coast Central",
    status: "Completed",
    image:
      "https://i.ibb.co/vxsFVkz4/Cape-Coast-STEM-School.jpg",
  },
  {
    id: 5,
    title: "Volta River Community Water",
    description:
      "Installation of mechanized boreholes and purification systems for 5 riverine communities.",
    location: "North Tongu",
    status: "Upcoming",
    image:
      "https://i.ibb.co/4wWdSZFg/Volta-River-Community-Water.jpg",
  },
  {
    id: 6,
    title: "Accra Youth Innovation Hub",
    description:
      "Tech incubator providing high-speed internet, mentorship, and workspace for young entrepreneurs.",
    location: "Klottey-Korle",
    status: "Ongoing",
    image:
      "https://i.ibb.co/209pXz09/Accra-Youth-Innovation-Hub.jpg",
  },
];

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative text-surface-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image of NDC Rally */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <img
            src="https://i.ibb.co/Jj8bYMM4/NDC-Party-Crowd.jpg"
            alt="NDC Rally Ghana"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          {/* Green Overlay - 15% transparent (85% opacity) */}
          <div className="absolute inset-0 bg-[#006b3a]/85"></div>
        </div>

        <div className="absolute -inset-4 bg-royal-blue/10 blur-3xl rounded-[1px] z-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-20">
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 rounded-[1px] border border-white/50 text-white text-xs font-semibold uppercase tracking-wider mb-4">
              NDC MPs OF GHANA - OFFICIAL TRANSPARENCY PORTAL
            </div>

            <RotatingHeadline />

            <p className="text-lg text-surface-white/80 max-w-xl">
              Track your MP's performance, monitor community development
              projects, and make your voice heard all in one official platform
              built for Ghana.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="/mps"
                className="bg-ndc-red text-white px-6 py-3 rounded-[1px] text-sm font-semibold flex items-center gap-2 hover:bg-white hover:text-deep-navy transition-colors shadow-sm"
              >
                <Users className="w-5 h-5" />
                Explore MPs
              </Link>
              <button className="bg-transparent border border-surface-white text-surface-white px-6 py-3 rounded-[1px] text-sm font-semibold flex items-center gap-2 hover:bg-surface-white/10 transition-colors">
                <Target className="w-5 h-5" />
                Track Projects
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-white text-deep-navy px-6 py-3 rounded-[1px] text-sm font-semibold flex items-center gap-2 hover:bg-gray-100 transition-colors"
              >
                Submit Suggestion to MP
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 lg:mt-0">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[1px] p-6 hover:-translate-y-[1px] transition-transform duration-300 shadow-sm">
              <div className="text-surface-white mb-2">
                <Users className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold mb-1 text-white">184</div>
              <div className="text-xs font-semibold uppercase tracking-wider text-surface-white/80">
                Members of Parliament
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[1px] p-6 hover:-translate-y-[1px] transition-transform duration-300 shadow-sm">
              <div className="text-surface-white mb-2">
                <Target className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold mb-1 text-white">847+</div>
              <div className="text-xs font-semibold uppercase tracking-wider text-surface-white/80">
                Active Projects
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[1px] p-6 hover:-translate-y-[1px] transition-transform duration-300 shadow-sm">
              <div className="text-surface-white mb-2">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold mb-1 text-white">276</div>
              <div className="text-xs font-semibold uppercase tracking-wider text-surface-white/80">
                Constituencies
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[1px] p-6 hover:-translate-y-[1px] transition-transform duration-300 shadow-sm">
              <div className="text-ndc-red mb-2">
                <Users className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold mb-1 text-white">
                2,400,000+
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-surface-white/80">
                Citizens Engaged
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Your NDC Members of Parliament Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-bright border-b border-outline-variant/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Column (About NDC MPs Introduction) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="bg-surface-white border border-outline-variant/30 rounded-[1px] p-8 md:p-10 shadow-sm hover:shadow-sm transition-shadow">
                <div className="inline-block px-3 py-1 bg-surface-container rounded-[1px] text-xs text-on-surface-variant font-semibold uppercase tracking-wider mb-6">
                  About NDC MPs
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-6 leading-tight">
                  Serving Ghana Through Leadership and Accountability
                </h2>

                <p className="text-base text-on-surface-variant leading-relaxed mb-8">
                  The Members of Parliament of the National Democratic Congress
                  (NDC) work tirelessly to represent their constituencies,
                  champion development projects, and ensure that the voices of
                  citizens are heard at the national level. Through this
                  platform, citizens can monitor projects, engage with their
                  MPs, and stay informed about parliamentary activities.
                </p>

                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 bg-deep-navy hover:bg-opacity-90 text-surface-white font-bold py-3.5 px-6 rounded-[1px] transition-all group w-fit shadow-sm shadow-deep-navy/20"
                >
                  Learn More About This Platform
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Column (NDC MPs Carousel) */}
            <div className="lg:col-span-7 h-full w-full">
              <MPCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-white border-b border-outline-variant/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
            <div>
              <div className="inline-block px-3 py-1 bg-surface-container rounded-[1px] text-xs text-on-surface-variant font-semibold uppercase mb-3">
                Development Tracking
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-2">
                Featured Projects
              </h2>
              <p className="text-base text-on-surface-variant max-w-2xl">
                Progress of key community development initiatives driven by our Government.
              </p>
            </div>
            <Link
              to="/projects"
              className="shrink-0 flex items-center gap-2 text-royal-blue font-bold hover:text-deep-navy transition-colors"
            >
              View All Projects <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURED_PROJECTS.map((project) => (
              <div
                key={project.id}
                className="bg-surface-white rounded-[1px] border border-outline-variant/30 overflow-hidden flex flex-col hover:shadow-sm transition-all duration-300 group"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover  transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-[1px] shadow-sm backdrop-blur-md ${project.status === "Completed" ? "bg-deep-navy text-surface-white" : project.status === "Ongoing" ? "bg-ndc-red text-white" : "bg-surface-white/90 text-on-surface-variant"}`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-start text-xs text-on-surface-variant mb-3 font-semibold">
                    <MapPin className="w-4 h-4 mr-1.5 text-royal-blue flex-shrink-0" />
                    <span className="truncate">{project.location}</span>
                  </div>

                  <h3 className="font-bold text-xl text-deep-navy leading-tight mb-2 line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-on-surface-variant line-clamp-2 mb-6 flex-grow leading-relaxed">
                    {project.description}
                  </p>

                  <div className="pt-4 border-t border-outline-variant/30 mt-auto">
                    <Link
                      to="/projects"
                      className="text-sm font-bold text-royal-blue hover:text-deep-navy flex items-center justify-between group/link"
                    >
                      Track Project
                      <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Programs Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-bright border-b border-outline-variant/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
            <div>
              <div className="inline-block px-3 py-1 bg-surface-container rounded-[1px] text-xs text-on-surface-variant font-semibold uppercase mb-3">
                Constituency Engagement
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-2">
                MP Special Initiative Programs
              </h2>
              <p className="text-base text-on-surface-variant max-w-2xl">
                MPs are driving community impact programmes organised around
                constituents in every district.
              </p>
            </div>
            <Link
              to="/programs"
              className="shrink-0 flex items-center gap-2 text-royal-blue font-bold hover:text-deep-navy transition-colors"
            >
              View All Programmes <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                title: "Essay Writing Programme",
                category: "EDUCATION",
                status: "ONGOING",
                desc: "Empowering students through literacy and critical thinking across the constituency's public schools.",
                loc: "Tamale South",
                pax: 240,
                img: "https://i.ibb.co/wxw7yL2/Esay-Writing-Competition.jpg",
              },
              {
                title: "Youth Innovation Initiative",
                category: "YOUTH DEVELOPMENT",
                status: "ACTIVE",
                desc: "Providing technical skills training and startup support for young constituents aged 18-35.",
                loc: "North Tongu",
                pax: 180,
                img: "https://i.ibb.co/8g0mkhmc/Youth-Innovation-Initiative.jpg",
              },
              {
                title: "Photography Exhibition",
                category: "ARTS & CULTURE",
                status: "COMPLETED",
                desc: "Celebrating local culture and talent through a community photography showcase and gallery.",
                loc: "Klottey-Korle",
                pax: 95,
                img: "https://i.ibb.co/Kj31b6sN/Photography-Exhibition.jpg",
              },
              {
                title: "Women's Agri-Business Workshop",
                category: "WOMEN EMPOWERMENT",
                status: "ONGOING",
                desc: "Training female farmers in modern agri-business practices to boost income and food security.",
                loc: "Ellembelle",
                pax: 320,
                img: "https://i.ibb.co/Ldv5DWvb/Women-in-Agriculture.jpg",
              },
            ].map((prog, i) => (
              <div
                key={i}
                className="bg-surface-white rounded-[1px] border border-outline-variant/30 overflow-hidden flex flex-col hover:shadow-sm transition-all duration-300 group"
              >
                <div className="relative h-40 w-full overflow-hidden bg-gray-100">
                  <img
                    src={prog.img}
                    alt={prog.title}
                    className="w-full h-full object-cover  transition-transform duration-500"
                  />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex gap-2 mb-3">
                    <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 bg-green-50 text-deep-navy rounded-[1px]">
                      {prog.category}
                    </span>
                    <span
                      className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-[1px] ${prog.status === "COMPLETED" ? "bg-gray-100 text-gray-600" : "bg-red-50 text-ndc-red"}`}
                    >
                      {prog.status}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg text-deep-navy leading-tight mb-2 line-clamp-2">
                    {prog.title}
                  </h3>
                  <p className="text-xs text-on-surface-variant line-clamp-3 mb-4 flex-grow leading-relaxed">
                    {prog.desc}
                  </p>
                  <div className="flex justify-between items-center text-[11px] text-on-surface-variant font-medium pt-3 border-t border-gray-100 mt-auto">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {prog.loc}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3" /> Participants: {prog.pax}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-surface-white border border-outline-variant/30 rounded-[1px] p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div>
              <h3 className="text-lg font-bold text-deep-navy mb-1">
                Each Programme is Constituency-Specific
              </h3>
              <p className="text-sm text-on-surface-variant">
                All constituency programmes are tailored to local needs, managed
                by the MP's office and independently verified. Visit each
                constituency's page and the Project Tracker page for full
                details.
              </p>
            </div>
            <Link
              to="/mps"
              className="shrink-0 bg-deep-navy text-white px-6 py-3 rounded-[1px] text-sm font-semibold hover:bg-opacity-90 transition-colors flex items-center gap-2"
            >
              Browse by Constituency <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* NDC Membership ID Card Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-surface-white to-surface-bright border-b border-outline-variant/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Column (Branding & Copy) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="bg-surface-white border border-outline-variant/30 rounded-[1px] p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow">
                <div className="inline-block px-3 py-1 bg-[#006B3C]/10 border border-[#006B3C]/15 rounded-[1px] text-xs text-[#006B3C] font-semibold uppercase tracking-wider mb-6">
                  MEMBERSHIP SERVICES
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-6 leading-tight">
                  Get Your Official NDC Membership ID Card
                </h2>

                <p className="text-base text-on-surface-variant leading-relaxed mb-8">
                  Register for your official NDC Membership ID Card and enjoy
                  seamless identification across party activities, constituency
                  events, branch engagements, and national programs.
                </p>

                <a
                  href="https://idcards.ghanandc.com/home/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#CE1126] hover:bg-opacity-90 text-white font-bold py-3.5 px-6 rounded-[1px] transition-all group w-fit shadow-sm shadow-[#CE1126]/20"
                >
                  Get My ID Card
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Column (Premium Membership Card Showcase) */}
            <div className="lg:col-span-7 w-full flex flex-col items-center">
              <div className="w-full bg-surface-white border border-outline-variant/30 rounded-2xl md:rounded-[32px] p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center">
                {/* ID Card Wrapper with Perspective Effect */}
                <div className="w-full max-w-md [perspective:1000px] group/cardContainer">
                  {/* Premium Digital ID Card */}
                  <div className="relative aspect-[1.586/1] w-full bg-gradient-to-br from-[#026237] via-[#037A44] to-[#014024] rounded-2xl p-4 md:p-6 text-white shadow-xl overflow-hidden border border-white/20 select-none flex flex-col justify-between transform group-hover/cardContainer:[transform:rotateY(4deg)_rotateX(4deg)_translateY(-2px)] group-hover/cardContainer:shadow-[0_25px_50px_-12px_rgba(0,107,60,0.25)] transition-all duration-500">
                    {/* Security Guilloche Overlay Effect */}
                    <div className="absolute inset-0 opacity-[0.06] pointer-events-none mix-blend-overlay">
                      <div className="absolute inset-[-50%] bg-[radial-gradient(circle_at_center,_#ffffff_0%,_transparent_60%)] animate-pulse" style={{ animationDuration: "12s" }}></div>
                    </div>
                    
                    {/* Sparkle Glow Highlight */}
                    <div className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-30 group-hover/cardContainer:animate-[shimmer_1.5s_infinite_linear]"></div>

                    {/* Top Row: Party logos and type */}
                    <div className="flex justify-between items-start gap-2 relative z-10 w-full">
                      <div className="flex items-center gap-1.5 md:gap-2">
                        {/* Custom SVG NDC Umbrella Logo */}
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-full p-1.5 flex items-center justify-center shadow-md">
                          <svg viewBox="0 0 100 100" className="w-full h-full">
                            <path d="M 50 20 C 32 20, 18 35, 15 45 C 22 42, 30 42, 35 45 C 40 42, 48 42, 53 45 C 58 42, 66 42, 71 45 C 76 42, 84 42, 85 45 C 82 35, 68 20, 50 20 Z" fill="#006B3C" />
                            <path d="M 50 20 C 42 20, 36 28, 35 45 C 40 42, 48 42, 53 45 C 50 28, 46 22, 50 20 Z" fill="#CE1126" />
                            <path d="M 50 20 C 47 20, 44 24, 45 45 C 48 42, 52 42, 53 45 C 52 24, 51 21, 50 20 Z" fill="#ffffff" />
                            <path d="M 48 45 L 48 78 C 48 81, 52 81, 52 78 L 52 45 Z" fill="#000000" />
                            <circle cx="50" cy="17" r="2.5" fill="#CE1126" />
                          </svg>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[9px] md:text-[11px] font-extrabold tracking-tight leading-3">NATIONAL</span>
                          <span className="text-[9px] md:text-[11px] font-extrabold tracking-tight leading-3">DEMOCRATIC</span>
                          <span className="text-[9px] md:text-[11px] font-extrabold tracking-tight leading-3 text-[#fcd116]">CONGRESS</span>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <span className="text-[8px] md:text-[9px] font-mono tracking-wider font-extrabold text-[#fcd116] border border-[#fcd116]/30 px-1.5 py-0.5 rounded-sm bg-[#fcd116]/5 uppercase">
                          MEMBERSHIP IDENTITY CARD
                        </span>
                      </div>
                    </div>

                    {/* Middle Row: Content and Gold Contact Chip */}
                    <div className="grid grid-cols-12 gap-3 items-center my-1 md:my-2 relative z-10 w-full h-full">
                      {/* Left Block: Chip and details (Span 8) */}
                      <div className="col-span-8 flex flex-col justify-between h-full space-y-1.5 md:space-y-3">
                        {/* Gold Chip element */}
                        <div className="w-8 h-6 md:w-10 md:h-7.5 bg-gradient-to-br from-[#ffe57f] via-[#ffd54f] to-[#ffb300] rounded-sm p-[1px] shadow border border-[#ffd54f]/40 relative overflow-hidden flex flex-col justify-between">
                          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_#fff_0%,_transparent_70%)]"></div>
                          <div className="flex justify-between h-full">
                            <div className="w-[30%] border-r border-[#ffb300]/50 h-full"></div>
                            <div className="w-[40%] flex flex-col justify-between h-full">
                              <div className="h-[25%] border-b border-[#ffb300]/50 w-full"></div>
                              <div className="h-[25%] border-b border-[#ffb300]/50 w-full"></div>
                            </div>
                            <div className="w-[30%] border-l border-[#ffb300]/50 h-full"></div>
                          </div>
                        </div>

                        {/* Person details */}
                        <div className="space-y-0.5 md:space-y-1 text-[9px] md:text-xs font-mono">
                          <div className="flex gap-1">
                            <span className="text-white/60 w-16 md:w-20 shrink-0">Name:</span>
                            <span className="text-white font-bold uppercase tracking-wide truncate">OSAAH HANNET</span>
                          </div>
                          <div className="flex gap-1">
                            <span className="text-white/60 w-16 md:w-20 shrink-0">ID No:</span>
                            <span className="text-[#fcd116] font-bold">E430410018</span>
                          </div>
                          <div className="flex gap-1">
                            <span className="text-white/60 w-16 md:w-20 shrink-0">Branch:</span>
                            <span className="text-white/90 truncate">CMB SHED DUMASUA</span>
                          </div>
                          <div className="flex gap-1">
                            <span className="text-white/60 w-16 md:w-20 shrink-0">Constituency:</span>
                            <span className="text-white/90 truncate">OFFINSO</span>
                          </div>
                          <div className="flex gap-1">
                            <span className="text-white/60 w-16 md:w-20 shrink-0">Region:</span>
                            <span className="text-white/90 truncate">ASHANTI REGION</span>
                          </div>
                        </div>
                      </div>

                      {/* Right Block: Photo (Span 4) */}
                      <div className="col-span-4 flex justify-end h-full">
                        <div className="relative w-18 h-22 md:w-24 md:h-28 bg-[#fafbfa] rounded-lg p-[3px] shadow-lg border border-white/20 overflow-hidden self-center group-hover/cardContainer:scale-[1.03] transition-transform duration-500">
                          <div className="w-full h-full bg-slate-100 rounded-md overflow-hidden relative">
                            <img
                              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
                              alt="Osaah Hannet (Verified Member)"
                              className="w-full h-full object-cover object-top"
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                          </div>
                          
                          {/* Checked Validation badge */}
                          <div className="absolute bottom-1 right-1 bg-[#006B3C] text-white p-0.5 rounded-full shadow border border-white">
                            <svg viewBox="0 0 20 20" fill="currentColor" className="w-2 md:w-2.5 h-2 md:h-2.5">
                              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Edge Colored Banner Stripe of the NDC */}
                    <div className="h-1.5 md:h-2 w-full flex rounded-sm overflow-hidden mt-1 md:mt-2 relative z-10 shadow-inner">
                      <div className="bg-[#CE1126] flex-1"></div>
                      <div className="bg-[#ffffff] flex-1"></div>
                      <div className="bg-[#000000] flex-1"></div>
                      <div className="bg-[#006B3C] flex-1"></div>
                    </div>
                  </div>
                </div>

                {/* Micro/Small Feature Indicators */}
                <div className="flex flex-wrap gap-2 md:gap-3 justify-center mt-6 md:mt-8 w-full">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#006B3C]/5 border border-[#006B3C]/10 text-[#006B3C] text-[10px] md:text-[11px] font-bold uppercase tracking-wider rounded-[1px]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#006B3C]" />
                    Official Party Identification
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#006B3C]/5 border border-[#006B3C]/10 text-[#006B3C] text-[10px] md:text-[11px] font-bold uppercase tracking-wider rounded-[1px]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#006B3C]" />
                    Verified Membership
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#006B3C]/5 border border-[#006B3C]/10 text-[#006B3C] text-[10px] md:text-[11px] font-bold uppercase tracking-wider rounded-[1px]">
                    <Award className="w-3.5 h-3.5 text-[#006B3C]" />
                    National Recognition
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NDC Party Dues Payment Section */}
      <DuesPaymentSection />
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface-white border-b border-outline-variant/10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block px-3 py-1 bg-surface-container rounded-[1px] text-xs text-on-surface-variant font-semibold uppercase mb-3">
            Platform Reach
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-4">
            Our Growing Community
          </h2>
          <p className="text-base text-on-surface-variant max-w-2xl mx-auto mb-12">
            Ghanaians at home and abroad are joining the platform to track
            leadership and demand accountability.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-deep-navy text-white rounded-[1px] p-8 flex flex-col items-center justify-center shadow-sm transform transition hover:-translate-y-[1px]">
              <Users className="w-8 h-8 mb-4 opacity-80" />
              <div className="text-4xl md:text-5xl font-bold mb-2">33,930</div>
              <div className="text-sm font-medium opacity-90">
                Total Community Members
              </div>
            </div>
            <div className="bg-surface-bright border border-outline-variant/30 rounded-[1px] p-8 flex flex-col items-center justify-center shadow-sm transform transition hover:-translate-y-[1px]">
              <MapPin className="w-8 h-8 mb-4 text-deep-navy" />
              <div className="text-4xl md:text-5xl font-bold mb-2 text-deep-navy">
                26,730
              </div>
              <div className="text-sm font-medium text-on-surface-variant mb-1">
                Ghanaians in Ghana
              </div>
              <div className="text-xs font-bold text-ndc-red">
                78.8% of total
              </div>
            </div>
            <div className="bg-surface-bright border border-outline-variant/30 rounded-[1px] p-8 flex flex-col items-center justify-center shadow-sm transform transition hover:-translate-y-[1px]">
              <Target className="w-8 h-8 mb-4 text-deep-navy" />
              <div className="text-4xl md:text-5xl font-bold mb-2 text-deep-navy">
                7,183
              </div>
              <div className="text-sm font-medium text-on-surface-variant mb-1">
                Ghanaians in Diaspora
              </div>
              <div className="text-xs font-bold text-ndc-red">
                21.2% of total
              </div>
            </div>
          </div>

          <Link
            to="/community"
            className="inline-flex items-center gap-2 bg-deep-navy hover:bg-opacity-90 text-surface-white font-bold py-3 px-6 rounded-[1px] transition-all text-sm shadow-sm"
          >
            View Full Community Statistics <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 2026 Reorganisation Section */}
      <section className="bg-deep-navy text-surface-white py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 relative">
            <div className="hidden lg:block absolute h-[1px] w-[75%] bg-white/10 top-3 left-[12.5%] -z-10"></div>

            <div className="text-center">
              <div className="inline-block px-3 py-1 bg-deep-navy/10 text-white text-[10px] font-bold uppercase rounded-[1px] border border-white/20 mb-4 tracking-wider">
                UPCOMING
              </div>
              <h3 className="font-bold text-base mb-2">Branch Elections</h3>
              <div className="flex items-center justify-center gap-1.5 text-surface-white/50 text-xs mb-3 font-mono">
                <Calendar className="w-3 h-3" />
                15 Jan - 10 Mar 2026
              </div>
              <p className="text-xs text-surface-white/40 px-2 leading-relaxed">
                Grassroots branch officer elections across all 16 regions
              </p>
            </div>

            <div className="text-center">
              <div className="inline-block px-3 py-1 bg-ndc-gold/10 text-white text-[10px] font-bold uppercase rounded-[1px] border border-ndc-gold/20 mb-4 tracking-wider">
                UPCOMING
              </div>
              <h3 className="font-bold text-base mb-2">
                Constituency Elections
              </h3>
              <div className="flex items-center justify-center gap-1.5 text-surface-white/50 text-xs mb-3 font-mono">
                <Calendar className="w-3 h-3" />
                20 Mar - 30 Apr 2026
              </div>
              <p className="text-xs text-surface-white/40 px-2 leading-relaxed">
                Constituency executive elections in all 276 constituencies
              </p>
            </div>

            <div className="text-center">
              <div className="inline-block px-3 py-1 bg-white/5 text-white text-[10px] font-bold uppercase rounded-[1px] border border-white/10 mb-4 tracking-wider">
                UPCOMING
              </div>
              <h3 className="font-bold text-base mb-2 text-white/80">
                Regional Congresses
              </h3>
              <div className="flex items-center justify-center gap-1.5 text-surface-white/40 text-xs mb-3 font-mono">
                <Calendar className="w-3 h-3" />
                10 May - 5 Jun 2026
              </div>
              <p className="text-xs text-surface-white/40 px-2 leading-relaxed">
                Regional delegates elect regional executive officers
              </p>
            </div>

            <div className="text-center">
              <div className="inline-block px-3 py-1 bg-white/5 text-white text-[10px] font-bold uppercase rounded-[1px] border border-white/10 mb-4 tracking-wider">
                UPCOMING
              </div>
              <h3 className="font-bold text-base mb-2 text-white/80">
                National Delegates Congress
              </h3>
              <div className="flex items-center justify-center gap-1.5 text-surface-white/40 text-xs mb-3 font-mono">
                <Calendar className="w-3 h-3" />
                20 Jun - 22 Jun 2026
              </div>
              <p className="text-xs text-surface-white/40 px-2 leading-relaxed">
                National congress elects national executives and leadership
              </p>
            </div>
          </div>

          {/* CTA Card */}
          <div className="relative overflow-hidden rounded-[1px] bg-ndc-red text-white shadow-sm flex flex-col md:flex-row items-center justify-between p-10 md:p-14">
            {/* Right Graphic/Icon */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none hidden md:block">
              <div className="w-64 h-64 rounded-[1px] border-[12px] border-white/30 flex items-center justify-center -mr-16">
                <Users className="w-32 h-32 text-white" />
              </div>
            </div>

            <div className="relative z-10 max-w-2xl text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 text-white text-xs font-bold uppercase rounded-[1px] border border-white/20 mb-6 tracking-wider">
                <Calendar className="w-3 h-3" />
                NDC 2026
              </div>

              <h2 className="text-3xl md:text-4xl leading-tight font-bold mb-4 tracking-tight">
                Stay Updated on the NDC 2026 Reorganisation
              </h2>
              <p className="text-surface-white/90 text-sm md:text-base mb-8 max-w-xl leading-relaxed">
                Access official information, timelines, guidelines, and
                publicity regarding the NDC 2026 internal elections and
                nationwide reorganisation process.
              </p>

              <button className="bg-white hover:bg-gray-100 text-ndc-red font-bold py-3.5 px-6 rounded-[1px] transition-all flex items-center gap-2 shadow-sm shadow-black/10 hover:-translate-y-0.5 w-fit">
                View Your Official Election Information
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {isModalOpen && <SuggestionModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}
