import React from 'react';

const projects = [
  {
    title: 'Spatial Commerce',
    tag: 'AR Retail',
    desc: 'Try‑before‑you‑buy experiences driving 3x conversion.',
    image: 'https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Training Simulator',
    tag: 'VR Simulation',
    desc: 'Photoreal environments for high‑stakes learning.',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Web System Dashboard',
    tag: 'Web Platform',
    desc: 'Realtime analytics and control surfaces for operations.',
    image: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function Showcase() {
  return (
    <section id="work" className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Selected Work</h2>
          <p className="mt-3 text-gray-700">A glimpse into recent production builds across industries.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-sm">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">{p.tag}</span>
                <h3 className="mt-3 text-lg font-semibold text-gray-900">{p.title}</h3>
                <p className="mt-1 text-sm text-gray-700">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
