import React from 'react';
import { useNavigate } from 'react-router-dom';
import { theme } from '../theme';
import { FEATURES } from '../config';

const Home: React.FC = () => {
  const navigate = useNavigate();

  // Filter menu cards based on feature flags
  const menuCards = [
    { 
      title: 'Projects', 
      description: 'Deep dive into backend architecture', 
      path: '/projects', 
      color: theme.colors.primary.split('-')[0],
      enabled: FEATURES.projects,
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    { 
      title: 'Travel', 
      description: 'Exploring the world one port at a time', 
      path: '/travel', 
      color: 'rose',
      enabled: FEATURES.travel,
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    { 
      title: 'Blog', 
      description: 'Tech deep dives and life updates', 
      path: '/blog', 
      color: 'amber',
      enabled: FEATURES.blog,
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
  ].filter(card => card.enabled);

  // Determine grid columns and width based on number of items to ensure centering
  let gridClassName = "grid grid-cols-1 gap-6";
  if (menuCards.length === 1) {
    gridClassName += " max-w-md mx-auto";
  } else if (menuCards.length === 2) {
    gridClassName += " md:grid-cols-2 max-w-4xl mx-auto";
  } else {
    gridClassName += " md:grid-cols-3";
  }

  return (
    <div className="pb-12">
      {/* Top-view tech workspace cover photo */}
      <div className="relative h-48 md:h-64 bg-gray-200">
        <img 
          src="https://plus.unsplash.com/premium_photo-1661775756810-82dbd209fc95?q=80&w=1354" 
          alt="Software Engineer Desk Top View" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 md:left-8 md:translate-x-0">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white overflow-hidden bg-white shadow-xl">
            <img 
              src="https://drive.google.com/thumbnail?id=11wy-7hg1NEcYH2ensCfEZpBANneWfRn2" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className={`${theme.styles.container} mt-16`}>
        <div className="text-center md:text-left md:ml-40">
          <h1 className="text-3xl md:text-4xl font-serif font-bold">Edison Moni</h1>
          <p className="text-gray-500 font-medium text-sm md:text-base">Software Engineer | Sports Enthusiast</p>
        </div>

        {/* Favorite Quote */}
        <div className="mt-8 text-center bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm max-w-3xl mx-auto">
          <p className="text-lg md:text-xl italic text-gray-700 font-serif">
            "The world is a book and those who do not travel read only one page."
          </p>
          <p className="mt-3 text-xs md:text-sm text-gray-400 font-medium uppercase tracking-widest">— St. Augustine</p>
        </div>

        {/* About Me Section */}
        <section className="mt-12 md:mt-16 max-w-3xl mx-auto">
          <h2 className={theme.styles.heading}>About Me</h2>
          <div className="mt-6 space-y-6 text-gray-600 leading-relaxed">
            <p>
            I’m a Software Engineer at Google, based in Bengaluru, building backend systems that power products used by millions of people. Over the years, I’ve owned features end-to-end from ambiguous problem statements to design docs, production rollouts, and post-launch reliability. I care about shipping things that last, systems that scale, code that reads well six months later, and decisions that don’t need to be undone every quarter.
            </p>
            
            <p>
            Outside of work, mostly I try to spend some quality time with my family. I also try to stay consistent at the gym (with mixed success), follow the NBA and cricket closely, and enjoy discovering new places to eat. I’ve done a few treks, explored a handful of cities, and keep a growing list of countries I’d like to visit.
            </p>

            <p>
            Still learning about systems, about discipline, about life, but enjoying the process of getting a little better each year.
            </p>

            

            <div className="pt-4">
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-serif">When I’m not working or navigating the chaos of new parenthood, you can find me:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100 shadow-sm">
                  <span className="text-2xl">🏀</span>
                  <span>Watching the Lakers and hoping for a win.</span>
                </li>
                <li className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100 shadow-sm">
                  <span className="text-2xl">🎮</span>
                  <span>Relaxing with Age of Empires 4 or Valorant.</span>
                </li>
                <li className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100 shadow-sm">
                  <span className="text-2xl">📺</span>
                  <span>Rewatching Friends (because we were on a break!).</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Menu Cards */}
        {menuCards.length > 0 && (
          <section className="mt-20">
            <div className={gridClassName}>
              {menuCards.map((card) => (
                <button 
                  key={card.title} 
                  onClick={() => navigate(card.path)}
                  className={`${theme.styles.card} relative p-8 flex flex-col items-center text-center group active:scale-95 w-full hover:border-${card.color}-200 transition-all duration-300`}
                >
                  <div className={`w-16 h-16 bg-${card.color}-50 text-${card.color}-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-sm`}>
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                  <p className="text-gray-500 leading-relaxed mb-8">{card.description}</p>
                  
                  {/* Arrow Indicator */}
                  <div className={`mt-auto w-10 h-10 rounded-full bg-gray-50 text-gray-400 flex items-center justify-center group-hover:bg-${card.color}-600 group-hover:text-white transition-all duration-300`}>
                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                     </svg>
                  </div>
                </button>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Home;