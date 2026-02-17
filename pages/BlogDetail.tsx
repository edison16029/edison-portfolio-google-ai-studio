import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { theme } from '../theme';
import { BLOG_POSTS } from '../data';

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const post = BLOG_POSTS.find(p => p.id === id);

  if (!post) {
    return (
      <div className={theme.styles.container + " py-12 text-center"}>
        <h2 className="text-2xl font-bold text-gray-900">Post not found</h2>
        <Link to="/blog" className="text-indigo-600 hover:underline mt-4 inline-block">Return to Blog</Link>
      </div>
    );
  }

  return (
    <div className={theme.styles.container + " py-12"}>
      <Link
        to="/blog"
        className="mb-8 flex items-center text-indigo-600 font-bold hover:translate-x-1 transition-transform group w-fit"
      >
        <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Journal
      </Link>

      <article className="max-w-3xl mx-auto">
        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
            <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-bold uppercase tracking-wider">{post.category}</span>
            <span>{post.date}</span>
            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-[1.15] mb-10">
            {post.title}
          </h1>
          <div className="aspect-[21/9] rounded-[2rem] overflow-hidden shadow-2xl mb-12 border border-gray-100">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>
        </header>

        <div className="prose prose-indigo md:prose-lg max-w-none">
          <post.Content />
        </div>

        <footer className="mt-20 pt-10 border-t border-gray-100">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-white shadow-md">
              <img src="https://drive.google.com/thumbnail?id=11wy-7hg1NEcYH2ensCfEZpBANneWfRn2" alt="Edison Moni" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="text-base font-bold text-gray-900">Edison Moni</div>
              <div className="text-sm text-gray-500">Software Engineer</div>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
};

export default BlogDetail;