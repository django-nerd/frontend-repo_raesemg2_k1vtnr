import React from 'react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-purple-500 via-fuchsia-500 to-indigo-500" />
            <span className="font-semibold tracking-tight text-white">FlamesBlue Studio</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#expertise" className="hover:text-white transition-colors">Expertise</a>
            <a href="#work" className="hover:text-white transition-colors">Work</a>
            <a
              href="mailto:hello@flames.blue"
              className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-white ring-1 ring-white/20 hover:bg-white/20 transition-colors"
            >
              Get in touch
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
