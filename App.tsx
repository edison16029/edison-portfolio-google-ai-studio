import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation.tsx';
import Footer from './components/Footer.tsx';
import Home from './pages/Home.tsx';
import Projects from './pages/Projects.tsx';
import Travel from './pages/Travel.tsx';
import Blog from './pages/Blog.tsx';
import BlogDetail from './pages/BlogDetail.tsx';
import Contact from './pages/Contact.tsx';
import { FEATURES } from './config';

const App: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          
          {FEATURES.projects ? (
            <Route path="/projects" element={<Projects />} />
          ) : (
            <Route path="/projects" element={<Navigate to="/" replace />} />
          )}

          {FEATURES.travel ? (
            <Route path="/travel" element={<Travel />} />
          ) : (
            <Route path="/travel" element={<Navigate to="/" replace />} />
          )}

          {FEATURES.blog && (
            <>
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogDetail />} />
            </>
          )}
          {!FEATURES.blog && <Route path="/blog/*" element={<Navigate to="/" replace />} />}

          {FEATURES.contact ? (
            <Route path="/contact" element={<Contact />} />
          ) : (
            <Route path="/contact" element={<Navigate to="/" replace />} />
          )}
          
          {/* Catch all redirect to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;