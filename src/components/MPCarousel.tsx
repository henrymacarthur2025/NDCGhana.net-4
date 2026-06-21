import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { MapPin, ExternalLink, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

const SAMPLE_MPS = [
  {
    slug: "1",
    name: "Rockson-Nelson Dafeamekpor",
    constituency: "South Dayi",
    region: "Volta Region",
    initials: "RD",
    image: "https://i.ibb.co/SwGzfyrz/001-Hon-Rockson-Nelson-Etse-Kwami-Dafeamekpor-Done.jpg",
    bio: "Vocal advocate for accountability, championing the enhancement of lottery proceeds and educational infrastructure.",
    projects: 7,
    devScore: "76%",
  },
  {
    slug: "2",
    name: "Samuel Okudzeto Ablakwa",
    constituency: "North Tongu",
    region: "Volta Region",
    initials: "SA",
    image: "https://i.ibb.co/b5ftdN4L/Hon-Samuel-Okudzeto-Ablakwa-Done.jpg",
    bio: "Education advocate leading comprehensive school redevelopment initiatives across North Tongu districts.",
    projects: 45,
    devScore: "98%",
  },
  {
    slug: "3",
    name: "Haruna Iddrisu",
    constituency: "Tamale South",
    region: "Northern Region",
    initials: "HI",
    image: "https://i.ibb.co/JFbqCfdC/Hon-Haruna-Iddrisu-Done.jpg",
    bio: "Distinguished lawmaker and advocate for agricultural development, economic opportunities, and youth employment.",
    projects: 38,
    devScore: "96%",
  },
  {
    slug: "4",
    name: "Emmanuel Armah-Kofi Buah",
    constituency: "Ellembelle",
    region: "Western Region",
    initials: "EB",
    image: "https://i.ibb.co/VcLBLYj1/Hon-Emmanuel-Armah-Kofi-Buah.jpg",
    bio: "Energy sector expert championing oil revenue accountability and rural electrification in Western Ghana.",
    projects: 29,
    devScore: "92%",
  },
  {
    slug: "5",
    name: "Cassiel Ato Baah Forson",
    constituency: "Ajumako Enyan Essiam",
    region: "Central Region",
    initials: "CF",
    image: "https://i.ibb.co/1kbsPWn/Hon-Cassiel-Ato-Baah-Forson.jpg",
    bio: "Financial expert and minority leader focused on national fiscal policy, economic stability, and rural education.",
    projects: 12,
    devScore: "85%",
  },
  {
    slug: "vanderpuije",
    name: "Hon. Alfred Okoe Vanderpuije",
    constituency: "Ablekuma South",
    region: "Greater Accra Region",
    initials: "AV",
    image: "https://i.ibb.co/hx2qp99X/Hon-Alfred-Okoe-Vanderpuije.jpg",
    bio: "Metropolitan Chief Executive turned dedicated public servant and currently serves as the Member of Parliament for Ablekuma South.",
    projects: 20,
    devScore: "84%",
  },
  {
    slug: "7",
    name: "Kweku Addo",
    constituency: "Ablekuma West",
    region: "Greater Accra Region",
    initials: "KA",
    image: "https://i.ibb.co/0y8my3Fh/Hon-Kweku-Addo.jpg",
    bio: "Distinguished educator, real estate professional, and theologian advocating for environment, science, technology, and ethical public service.",
    projects: 15,
    devScore: "80%",
  },
  {
    slug: "8",
    name: "Grace Ayensu-Danquah",
    constituency: "Essikado-Ketan",
    region: "Western Region",
    initials: "GA",
    image: "https://i.ibb.co/CGCzCRq/Hon-Grace-Ayensu-Danquah.jpg",
    bio: "Distinguished medical doctor and surgeon championing healthcare systems, gender equity, and youth mentorship in science.",
    projects: 18,
    devScore: "82%",
  },
  {
    slug: "9",
    name: "Ewurabena Aubynn",
    constituency: "Ablekuma North",
    region: "Greater Accra Region",
    initials: "EA",
    image: "https://i.ibb.co/Vp5gn7p6/Hon-Ewurabena-Aubynn.jpg",
    bio: "Experienced academic administrator and educational entrepreneur prioritizing foreign affairs, regional integration, and citizen safety.",
    projects: 14,
    devScore: "81%",
  },
  {
    slug: "10",
    name: "Zanetor Agyeman-Rawlings",
    constituency: "Klottey-Korle",
    region: "Greater Accra Region",
    initials: "ZA",
    image: "https://i.ibb.co/3y42dqYt/Hon-Zanetor-Agyeman-Rawlings.jpg",
    bio: "Advocating for disaster risk reduction, youth empowerment, food security, and sustainable urban development in Accra.",
    projects: 26,
    devScore: "89%",
  },
  {
    slug: "11",
    name: "Abla Dzifa Gomashie",
    constituency: "Ketu South",
    region: "Volta Region",
    initials: "AG",
    image: "https://i.ibb.co/hxMm4B7B/Hon-Abla-Dzifa-Gomashie.jpg",
    bio: "Renowned actress, queen mother, and dedicated representative championing border security, arts and culture, and women's micro-credit.",
    projects: 22,
    devScore: "86%",
  },
  {
    slug: "12",
    name: "Dorcas Toffey",
    constituency: "Jomoro",
    region: "Western Region",
    initials: "DT",
    image: "https://i.ibb.co/0VZW8W7L/Hon-Dorcas-Toffey.jpg",
    bio: "Highly dedicated professional and entrepreneur focusing on women's economic empowerment, health access, and regional security.",
    projects: 16,
    devScore: "83%",
  },
];

export default function MPCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % SAMPLE_MPS.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + SAMPLE_MPS.length) % SAMPLE_MPS.length,
    );
  };

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [nextSlide, isPlaying]);

  return (
    <div className="w-full flex flex-col gap-5 sm:gap-6 lg:gap-8 mx-auto max-w-full">
      {/* Main Card */}
      <div className="w-full rounded-2xl md:rounded-[32px] overflow-hidden shadow-lg border border-white/10 bg-[#026237] relative">
        {/* Slides rendering layer - using CSS Grid to stack slides naturally without fixed heights */}
        <div className="grid w-full items-stretch">
          {SAMPLE_MPS.map((mp, index) => (
            <div
              key={mp.slug}
              className={`[grid-area:1/1] flex flex-col md:flex-row w-full transition-opacity duration-1000 ease-in-out ${
                index === currentIndex
                  ? "opacity-100 z-10 relative"
                  : "opacity-0 z-0 pointer-events-none absolute md:relative"
              }`}
              aria-hidden={index !== currentIndex}
            >
              {/* Left Section (Image) */}
              <div className="w-full md:w-[45%] lg:w-[42%] bg-[#054929] relative overflow-hidden min-h-[300px] sm:min-h-[350px] md:min-h-full aspect-square sm:aspect-[4/3] md:aspect-auto">
                <img
                  src={mp.image}
                  alt={mp.name}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                
                {/* NDC Badge */}
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 bg-[#db001c] rounded-md px-3 py-1 z-10 shadow-md">
                  <span className="text-white text-[10px] sm:text-xs font-black uppercase tracking-wider">NDC</span>
                </div>
              </div>

              {/* Right Section (Content) */}
              <div className="w-full md:w-[55%] lg:w-[58%] flex flex-col justify-center p-[clamp(1.5rem,5vw,3rem)] lg:p-[clamp(3rem,6vw,4rem)]">
                <div className="text-[#db001c] font-bold text-[10px] sm:text-xs tracking-[0.2em] uppercase mb-3 sm:mb-4">
                  MP — {mp.constituency}
                </div>
                
                <h3 className="text-white text-[clamp(1.5rem,4vw,2.5rem)] lg:text-[2.75rem] font-bold mb-3 sm:mb-4 tracking-tight leading-tight">
                  {mp.name}
                </h3>
                
                <div className="flex items-center align-middle text-[#cedad3] text-sm sm:text-base font-medium mb-5 sm:mb-6">
                  <MapPin className="w-4 h-4 sm:w-[18px] sm:h-[18px] mr-2 flex-shrink-0" />
                  <span className="truncate">{mp.region}</span>
                </div>
                
                <p className="text-[#e2e8f0] text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 leading-relaxed max-w-xl">
                  {mp.bio}
                </p>
                
                <div className="flex flex-row gap-3 sm:gap-4 lg:gap-5 mb-8 sm:mb-10 w-full max-w-md">
                  <div className="bg-[#1f734a] rounded-xl p-4 sm:p-5 lg:p-6 flex-1 flex flex-col items-center justify-center shadow-inner">
                    <span className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-1.5">{mp.projects}</span>
                    <span className="text-[#cedad3] text-[10px] sm:text-xs font-medium uppercase tracking-wider">Projects</span>
                  </div>
                  <div className="bg-[#1f734a] rounded-xl p-4 sm:p-5 lg:p-6 flex-1 flex flex-col items-center justify-center shadow-inner">
                    <span className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-1.5">{mp.devScore}</span>
                    <span className="text-[#cedad3] text-[10px] sm:text-xs font-medium uppercase tracking-wider">Dev Score</span>
                  </div>
                </div>
                
                <div className="mt-auto sm:mt-0 flex text-left w-full">
                  <Link
                    to={`/mps/${mp.slug}`}
                    className="inline-flex items-center justify-center gap-2 bg-[#db001c] text-white font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg hover:bg-[#b00016] transition-colors text-sm sm:text-base w-full sm:w-auto min-w-[200px]"
                  >
                    View Profile <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination & Controls */}
      <div className="flex justify-between items-center px-1 sm:px-4 lg:px-6 w-full">
        {/* Dots */}
        <div className="flex gap-2 sm:gap-3 items-center">
          {SAMPLE_MPS.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 sm:h-2.5 transition-all rounded-full ${
                index === currentIndex ? "w-6 sm:w-8 bg-[#054929]" : "w-2 sm:w-2.5 bg-[#a3b3aa]/50 hover:bg-[#85998f]"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Prev / Next & Play / Pause Buttons */}
        <div className="flex gap-2 sm:gap-3 items-center">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-700 hover:bg-gray-50 focus:ring-2 focus:ring-[#054929]/20 transition-all shadow-sm"
            aria-label={isPlaying ? "Pause slide rotation" : "Play slide rotation"}
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 sm:w-5 sm:h-5" />
            ) : (
              <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
            )}
          </button>
          <button
            onClick={prevSlide}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-700 hover:bg-gray-50 focus:ring-2 focus:ring-[#054929]/20 transition-all shadow-sm"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-700 hover:bg-gray-50 focus:ring-2 focus:ring-[#054929]/20 transition-all shadow-sm"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
