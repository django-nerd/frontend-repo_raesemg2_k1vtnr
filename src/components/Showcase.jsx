import React from 'react';
import { motion } from 'framer-motion';

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
    <section id="work" className="py-28 bg-gradient-to-b from-black to-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white"
          >
            Selected Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-white/70"
          >
            A glimpse into recent production builds across industries.
          </motion.p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group overflow-hidden rounded-2xl bg-white/5 border border-white/10 backdrop-blur"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80 ring-1 ring-white/10">{p.tag}</span>
                <h3 className="mt-3 text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-1 text-sm text-white/70">{p.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
