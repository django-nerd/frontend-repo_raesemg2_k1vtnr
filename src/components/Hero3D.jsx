import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero3D() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-white" id="home">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/9HgHYACX2il7xmYO/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative z-10 pointer-events-none">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Immersive 3D Experiences for the Next Era of Tech
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-gray-700">
              We craft award‑winning solutions across AR, VR, MR, games, web, and data science — blending design, engineering, and storytelling.
            </p>
            <div className="mt-8 flex gap-3 pointer-events-auto">
              <a href="#expertise" className="inline-flex items-center rounded-full bg-gray-900 px-5 py-3 text-white shadow hover:bg-gray-800">Explore Expertise</a>
              <a href="#work" className="inline-flex items-center rounded-full bg-white px-5 py-3 text-gray-900 ring-1 ring-gray-200 hover:ring-gray-300">View Work</a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white" />
    </section>
  );
}
