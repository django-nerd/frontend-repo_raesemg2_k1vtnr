import React from 'react';

export default function ContactCTA() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-gray-900 via-gray-800 to-black p-10 sm:p-14 text-white">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Build the future with us</h2>
            <p className="mt-3 text-white/80">From prototypes to production, we partner with teams to deliver standout immersive products.</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="mailto:hello@flames.blue" className="inline-flex items-center justify-center rounded-full bg-white text-gray-900 px-6 py-3 font-medium shadow hover:bg-gray-100">Start a project</a>
              <a href="#expertise" className="inline-flex items-center justify-center rounded-full ring-1 ring-white/20 px-6 py-3">See capabilities</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
