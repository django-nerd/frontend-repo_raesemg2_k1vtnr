import React from 'react';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import ExpertiseGrid from './components/ExpertiseGrid';
import Showcase from './components/Showcase';

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-500/40 selection:text-white">
      <Navbar />
      <main>
        <Hero3D />
        <ExpertiseGrid />
        <Showcase />
      </main>
      <footer className="py-10 border-t border-white/10 bg-black/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <p>© {new Date().getFullYear()} FlamesBlue Studio. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#expertise" className="hover:text-white">Expertise</a>
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
