import React, { useState } from 'react';
import Navigation from './components/Navigation.tsx';
import Footer from './components/Footer.tsx';
import Home from './pages/Home.tsx';
import Projects from './pages/Projects.tsx';
import Travel from './pages/Travel.tsx';
import Blog from './pages/Blog.tsx';
import BlogDetail from './pages/BlogDetail.tsx';
import Contact from './pages/Contact.tsx';
import { FEATURES } from './config';

export type View = 'home' | 'projects' | 'travel' | 'blog' | 'blog-detail' | 'contact';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  const navigateTo = (view: View) => {
    // If the view is linked to a feature that is disabled, redirect to home
    if (view === 'projects' && !FEATURES.projects) return setCurrentView('home');
    if (view === 'travel' && !FEATURES.travel) return setCurrentView('home');
    if (view === 'blog' && !FEATURES.blog) return setCurrentView('home');
    if (view === 'blog-detail' && !FEATURES.blog) return setCurrentView('home');
    if (view === 'contact' && !FEATURES.contact) return setCurrentView('home');

    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  const handleSelectPost = (id: string) => {
    if (!FEATURES.blog) return;
    setSelectedPostId(id);
    navigateTo('blog-detail');
  };

  const renderContent = () => {
    switch (currentView) {
      case 'home':
        return <Home navigateTo={navigateTo} />;
      case 'projects':
        return FEATURES.projects ? <Projects /> : <Home navigateTo={navigateTo} />;
      case 'travel':
        return FEATURES.travel ? <Travel /> : <Home navigateTo={navigateTo} />;
      case 'blog':
        return FEATURES.blog ? <Blog onSelectPost={handleSelectPost} /> : <Home navigateTo={navigateTo} />;
      case 'blog-detail':
        return FEATURES.blog && selectedPostId ? (
          <BlogDetail postId={selectedPostId} onBack={() => navigateTo('blog')} />
        ) : (
          <Home navigateTo={navigateTo} />
        );
      case 'contact':
        return FEATURES.contact ? <Contact /> : <Home navigateTo={navigateTo} />;
      default:
        return <Home navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation currentView={currentView === 'blog-detail' ? 'blog' : currentView} onNavigate={navigateTo} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;