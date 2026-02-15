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
      enabled: FEATURES.projects 
    },
    { 
      title: 'Travel', 
      description: 'Exploring the world one port at a time', 
      path: '/travel', 
      color: 'rose',
      enabled: FEATURES.travel 
    },
    { 
      title: 'Blog', 
      description: 'Tech deep dives and life updates', 
      path: '/blog', 
      color: 'amber',
      enabled: FEATURES.blog 
    },
  ].filter(card => card.enabled);

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
            I’m a Software Engineer at Google, based in Bengaluru. 
            I work mostly on backend systems — the kind of things users 
            don’t see but definitely notice when they break. 
            I enjoy understanding how pieces fit together and building systems that don’t need constant babysitting.
            </p>
            <p>
            I’m not the “move fast and rewrite later” type. 
            I prefer thinking things through, asking a few annoying “why” questions, 
            and then building something that holds up. Clean code, simple design, 
            fewer surprises — that’s usually the goal.
            </p>
            <p> 
            Outside of work, I occasionally go to the gym (and consistently think about going more). 
            I read books in bursts, tell myself I’ll read daily, and then repeat the cycle. 
            I have done a few treks, visited few places, and have a growing list of countries I want to explore someday.
            </p>
            <p> 
            Still figuring things out — in tech, in fitness, in life — but enjoying the process.  
            </p>

            <div className="pt-4">
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-serif">Currently, I’m split between two high-stakes worlds:</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className={`font-bold text-${theme.colors.primary} shrink-0`}>By day:</span>
                  <span>Engineering the future of backend systems and getting hands-on with the latest in AI agent development. I enjoy the challenge of building autonomous agents that can navigate the same lack of "direct solutions" I face in my daily codebases.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-rose-500 shrink-0">By night:</span>
                  <span>Navigating my newest (and most complex) deployment yet—being a parent to a newborn. I’ve found that debugging a distributed system and decoding a 3 AM cry require a surprisingly similar set of analytical skills.</span>
                </li>
              </ul>
            </div>

            <div className="pt-4">
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-serif">When I’m not architecting perfection or navigating the chaos of new parenthood, you can find me:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100 shadow-sm">
                  <span className="text-2xl">🏀</span>
                  <span>Watching the Lakers and hoping for a win.</span>
                </li>
                <li className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100 shadow-sm">
                  <span className="text-2xl">🎮</span>
                  <span>Recalibrating with Age of Empires 4 or Valorant.</span>
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {menuCards.map((card) => (
                <button 
                  key={card.title} 
                  onClick={() => navigate(card.path)}
                  className={`${theme.styles.card} p-6 flex flex-col items-center text-center group active:scale-95 w-full`}
                >
                  <div className={`w-12 h-12 bg-${card.color}-100 text-${card.color}-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{card.title}</h3>
                  <p className="mt-2 text-sm text-gray-500">{card.description}</p>
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