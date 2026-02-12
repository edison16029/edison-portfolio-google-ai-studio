
import React from 'react';
import { theme } from '../theme';
import { TRAVEL_DATA } from '../data';

const Travel: React.FC = () => {
  const visited = TRAVEL_DATA.filter(t => t.status === 'visited');
  const mustSee = TRAVEL_DATA.filter(t => t.status === 'bucket-list' && t.category === 'must-see');
  const goodToSee = TRAVEL_DATA.filter(t => t.status === 'bucket-list' && t.category === 'good-to-see');
  const otherConsiderations = TRAVEL_DATA.filter(t => t.status === 'bucket-list' && t.category === 'other');

  return (
    <div className={theme.styles.container + " py-12"}>
      <header className="mb-16 max-w-4xl">
        <h1 className={theme.styles.heading + " mb-8"}>Travel Chronicles</h1>
        <div className="p-8 bg-indigo-50/50 rounded-3xl border border-indigo-100/50 relative overflow-hidden shadow-sm">
          <div className="absolute top-0 right-0 p-6 opacity-10">
            <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21 16.5c0 .38-.21.71-.53.88l-7.97 4.19c-.32.17-.69.17-1 0l-7.97-4.19c-.32-.17-.53-.5-.53-.88V7.5c0-.38.21-.71.53-.88l7.97-4.19c.32-.17.69-.17 1 0l7.97 4.19c.32.17.53.5.53.88v9z"/>
            </svg>
          </div>
          <p className="text-xl text-indigo-950 leading-relaxed font-medium font-serif italic">
            "For me, travel is less about checking boxes and more about the curiosity of the unknown. Though I’m early in my journey of exploring the world, I find myself drawn to the stories told through local cuisines, the history etched into architecture, and the vibrant energy of unfamiliar streets. Every trip is an opportunity to expand my perspective and embrace a new way of seeing the world."
          </p>
        </div>
      </header>

      {/* Visited Section */}
      <section className="mb-24">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 bg-green-100 text-green-600 rounded-xl flex items-center justify-center shadow-sm">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <h2 className="text-3xl font-serif font-bold">Places I've Visited</h2>
        </div>
        <div className="grid grid-cols-1 gap-12">
          {visited.map(place => (
            <div key={place.id} className="group relative overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-xl flex flex-col md:flex-row min-h-[400px]">
              <div className="md:w-1/2 overflow-hidden bg-gray-100">
                <img 
                  src={place.image} 
                  alt={place.country} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
                <div className="inline-flex items-center px-4 py-1.5 bg-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-widest rounded-full w-fit mb-6">
                  {place.date}
                </div>
                <h3 className="text-4xl font-serif font-bold mb-6 text-gray-900 leading-tight">
                  {place.city}
                  <span className="block text-indigo-600 text-2xl mt-1">{place.country}</span>
                </h3>
                <div className="relative">
                  <div className="absolute -left-6 top-0 w-1.5 h-full bg-indigo-100 rounded-full"></div>
                  <p className="text-lg text-gray-600 leading-relaxed italic pl-2">
                    "{place.notes}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bucket List Section */}
      <section>
        <div className="flex items-center gap-3 mb-12">
          <div className="w-10 h-10 bg-rose-100 text-rose-600 rounded-xl flex items-center justify-center shadow-sm">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h2 className="text-3xl font-serif font-bold">On My Bucket List</h2>
        </div>

        {/* Must See */}
        <div className="mb-20">
          <h3 className="text-xl font-bold mb-8 text-indigo-900 flex items-center gap-3">
            <span className="w-12 h-px bg-indigo-200"></span>
            Must See
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {mustSee.map(place => (
              <div key={place.id} className="group relative rounded-3xl overflow-hidden h-80 shadow-md hover:shadow-2xl transition-all duration-500">
                <div className="absolute inset-0 bg-gray-200 animate-pulse group-hover:hidden"></div>
                <img 
                  src={place.image} 
                  alt={place.country} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="text-[10px] font-black text-rose-400 uppercase tracking-[0.2em] mb-2">Priority Destination</div>
                  <h4 className="text-2xl font-bold text-white mb-2">{place.country}</h4>
                  <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    {place.city}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Good to See */}
        <div className="mb-20">
          <h3 className="text-xl font-bold mb-8 text-amber-900 flex items-center gap-3">
            <span className="w-12 h-px bg-amber-200"></span>
            Good to See
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {goodToSee.map(place => (
              <div key={place.id} className="flex items-center gap-5 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:border-amber-200 hover:shadow-md transition-all duration-300 group">
                <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 bg-gray-50">
                  <img src={place.image} alt={place.country} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 group-hover:text-amber-700 transition-colors">{place.country}</h4>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">{place.notes}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Considerations */}
        <div className="pb-12">
          <h3 className="text-xl font-bold mb-8 text-gray-600 flex items-center gap-3">
            <span className="w-12 h-px bg-gray-200"></span>
            Other Considerations
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherConsiderations.map(place => (
              <div key={place.id} className="flex items-center gap-5 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:border-gray-300 hover:shadow-md transition-all duration-300 group">
                <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 bg-gray-50">
                  <img src={place.image} alt={place.country} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">{place.country}</h4>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">{place.notes || `${place.city} - Exploration awaiting.`}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Travel;
