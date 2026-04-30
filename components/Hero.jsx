"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-blue-700 text-white py-20 px-6 text-center">
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Spin Kenya
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Stronger Playing In Numbers
      </motion.p>

      <motion.a
        href="/tournaments"
        className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold"
        whileHover={{ scale: 1.1 }}
      >
        View Tournaments
      </motion.a>
    </section>
  );
}