
import React, { useState } from 'react';
import Navigation from './components/Navigation.tsx';
import Footer from './components/Footer.tsx';
import AIAssistant from './components/AIAssistant.tsx';
import Home from './pages/Home.tsx';
import Projects from './pages/Projects.tsx';
import Travel from './pages/Travel.tsx';
import Blog from './pages/Blog.tsx';
import BlogDetail from './pages/BlogDetail.tsx';
import Contact from './pages/Contact.tsx';

export type View = 'home' | 'projects' | 'travel' | 'blog' | 'blog-detail' | 'contact';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  const navigateTo = (view: View) => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  const handleSelectPost = (id: string) => {
    setSelectedPostId(id);
    navigateTo('blog-detail');
  };

  const renderContent = () => {
    switch (currentView) {
      case 'home':
        return <Home navigateTo={navigateTo} />;
      case 'projects':
        return <Projects />;
      case 'travel':
        return <Travel />;
      case 'blog':
        return <Blog onSelectPost={handleSelectPost} />;
      case 'blog-detail':
        return selectedPostId ? (
          <BlogDetail postId={selectedPostId} onBack={() => navigateTo('blog')} />
        ) : (
          <Blog onSelectPost={handleSelectPost} />
        );
      case 'contact':
        return <Contact />;
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
      <AIAssistant />
    </div>
  );
};

export default App;
