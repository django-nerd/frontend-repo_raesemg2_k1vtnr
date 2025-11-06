import React from 'react';
import { Rocket, Cpu, Gamepad2, Code2, Globe, Brain } from 'lucide-react';
import { motion } from 'framer-motion';

const items = [
  { title: 'Augmented Reality (AR)', desc: 'Interactive overlays that merge digital with the real world for retail, training, and field ops.', icon: Rocket },
  { title: 'Virtual Reality (VR)', desc: 'High‑fidelity immersive worlds for simulation, education, and entertainment.', icon: Gamepad2 },
  { title: 'Mixed Reality (MR)', desc: 'Spatial computing solutions that understand environments and context.', icon: Cpu },
  { title: 'Software Engineering', desc: 'Robust platforms, APIs, and systems tailored for scale and reliability.', icon: Code2 },
  { title: 'Web Experiences', desc: 'Blazing‑fast websites and PWAs with modern stacks and design systems.', icon: Globe },
  { title: 'Data Science & AI', desc: 'From analytics to ML—data pipelines, models, and visualization.', icon: Brain },
];

export default function ExpertiseGrid() {
  return (
    <section id="expertise" className="relative py-28 bg-black">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.07),transparent_55%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-white"
          >
            Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-white/70"
          >
            End‑to‑end capabilities across immersive media and enterprise software.
          </motion.p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ title, desc, icon: Icon }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 p-6 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-purple-500/10 blur-2xl group-hover:bg-purple-500/20 transition-colors" />
              <div className="h-12 w-12 rounded-xl bg-white/10 text-white flex items-center justify-center ring-1 ring-white/10">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
