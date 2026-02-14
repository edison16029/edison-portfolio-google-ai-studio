import React from 'react';
import { theme } from '../theme';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12 mt-20">
      <div className={theme.styles.container}>
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Edison Moni. Built with React.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-indigo-600">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-indigo-600">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-indigo-600">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;