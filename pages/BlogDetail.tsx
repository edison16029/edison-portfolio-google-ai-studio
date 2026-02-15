import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams, Link } from 'react-router-dom';
import { theme } from '../theme';
import { BLOG_POSTS } from '../data';

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  const post = BLOG_POSTS.find(p => p.id === id);

  useEffect(() => {
    if (!post) {
        setLoading(false);
        return;
    }
    
    setLoading(true);
    setError(null);
    
    /**
     * Standard fetch is used to retrieve markdown files from the server.
     * We use a relative path (no leading slash) to ensure it works
     * regardless of whether the app is hosted at the root or a subdirectory.
     */
    fetch(post.contentPath)
      .then(res => {
        if (!res.ok) {
          throw new Error(`Failed to load blog post: ${res.statusText}`);
        }
        return res.text();
      })
      .then(text => {
        setContent(text);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching blog content:', err);
        setError('Blog content could not be loaded. Please ensure the file exists and the server is configured correctly.');
        setLoading(false);
      });
  }, [post]);

  if (!post && !loading) {
      return (
        <div className={theme.styles.container + " py-12 text-center"}>
            <h2 className="text-2xl font-bold text-gray-900">Post not found</h2>
            <Link to="/blog" className="text-indigo-600 hover:underline mt-4 inline-block">Return to Blog</Link>
        </div>
      );
  }
  
  if (!post) return null;

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

        {loading ? (
          <div className="space-y-6 animate-pulse">
            <div className="h-8 bg-gray-200 rounded-lg w-3/4"></div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-100 rounded w-full"></div>
              <div className="h-4 bg-gray-100 rounded w-full"></div>
              <div className="h-4 bg-gray-100 rounded w-5/6"></div>
            </div>
          </div>
        ) : error ? (
          <div className="p-8 bg-red-50 border border-red-100 rounded-2xl text-red-600 text-center">
            <svg className="w-12 h-12 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <p className="font-medium">{error}</p>
          </div>
        ) : (
          <div className="prose prose-indigo md:prose-lg max-w-none">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        )}

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