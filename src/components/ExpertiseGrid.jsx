import React from 'react';
import { Rocket, Cpu, Gamepad2, Code2, Globe, Brain } from 'lucide-react';

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
    <section id="expertise" className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Expertise</h2>
          <p className="mt-3 text-gray-700">End‑to‑end capabilities across immersive media and enterprise software.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="group rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow bg-white">
              <div className="h-12 w-12 rounded-xl bg-gray-900 text-white flex items-center justify-center">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-700 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
