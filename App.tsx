import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Travel from './pages/Travel';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Contact from './pages/Contact';

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