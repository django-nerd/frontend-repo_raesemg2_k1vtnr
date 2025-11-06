import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero3D() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 120]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0.6]);

  return (
    <section className="relative min-h-[110vh] w-full overflow-hidden bg-black" id="home">
      {/* 3D Scene */}
      <motion.div className="absolute inset-0" style={{ y, opacity }}>
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </motion.div>

      {/* Top gradients and vignette that don't block interactions */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(120,119,198,0.12),transparent_60%)]" />
      </div>

      {/* Content overlay */}
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight bg-gradient-to-br from-white via-white to-purple-200 bg-clip-text text-transparent"
            >
              Cyber‑futurist 3D Experiences
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.8, ease: 'easeOut' }}
              className="mt-5 text-lg sm:text-xl text-white/80"
            >
              We design immersive worlds and advanced software across AR, VR, MR, web, games, and AI—where aesthetics meets engineering.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a href="#expertise" className="inline-flex items-center rounded-full bg-white/10 backdrop-blur px-6 py-3 text-white ring-1 ring-white/20 hover:bg-white/20 transition-colors">
                Explore Expertise
              </a>
              <a href="#work" className="inline-flex items-center rounded-full bg-purple-500/90 px-6 py-3 text-white shadow-lg shadow-purple-500/30 hover:bg-purple-500">
                View Work
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom fade to transition into next section, non-blocking */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-black" />
    </section>
  );
}
