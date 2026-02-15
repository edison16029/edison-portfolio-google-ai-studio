import React from 'react';
import { useNavigate } from 'react-router-dom';
import { theme } from '../theme';
import { BLOG_POSTS } from '../data';

const Blog: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={theme.styles.container + " py-16"}>
      <header className="mb-16 text-center md:text-left">
        <h1 className={theme.styles.heading + " text-4xl md:text-5xl"}>Edison's Journal</h1>
        <p className="mt-4 text-gray-500 text-lg max-w-2xl">
          Thoughts on backend engineering, the philosophy of code, and chronicles from my global explorations.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {BLOG_POSTS.map((post) => (
          <article 
            key={post.id} 
            className="group cursor-pointer bg-white rounded-[2.5rem] p-5 border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            onClick={() => navigate(`/blog/${post.id}`)}
          >
            <div className="aspect-[16/10] overflow-hidden rounded-[1.8rem] mb-8 shadow-sm">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
            </div>
            
            <div className="px-3 pb-4 space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  {post.category}
                </span>
                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                <span className="text-sm text-gray-500 font-medium">{post.date}</span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 group-hover:text-indigo-600 transition-colors leading-tight">
                {post.title}
              </h2>
              
              <p className="text-gray-600 line-clamp-2 leading-relaxed text-base">
                {post.excerpt}
              </p>
              
              <div className="pt-6 border-t border-gray-50 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{post.readTime}</span>
                </div>
                
                <div className="w-12 h-12 bg-gray-50 text-indigo-600 rounded-2xl flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 transform group-hover:rotate-12">
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;