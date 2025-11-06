import React from 'react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/40 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500" />
            <span className="font-semibold tracking-tight text-gray-900">FlamesBlue Studio</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            <a href="#expertise" className="hover:text-gray-900 transition-colors">Expertise</a>
            <a href="#work" className="hover:text-gray-900 transition-colors">Work</a>
            <a
              href="mailto:hello@flames.blue"
              className="inline-flex items-center rounded-full bg-gray-900 px-4 py-2 text-white shadow-sm hover:bg-gray-800 transition-colors"
            >
              Get in touch
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
