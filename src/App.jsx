import React from 'react';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import ExpertiseGrid from './components/ExpertiseGrid';
import ContactCTA from './components/ContactCTA';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero3D />
        <ExpertiseGrid />
        <ContactCTA />
      </main>
      <footer className="py-10 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} FlamesBlue Studio. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#expertise" className="hover:text-gray-900">Expertise</a>
            <a href="#work" className="hover:text-gray-900">Work</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
