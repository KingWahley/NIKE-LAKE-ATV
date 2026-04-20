"use client";

import { motion } from "framer-motion";
import ExperienceList from "@/components/home/ExperienceList";
import { experiences } from "@/components/home/content";

const sectionVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.08,
    },
  },
};

export default function ExperienceSection() {
  return (
    <section className="mb-24 bg-brand-white py-2 text-brand-black selection:bg-[#758BFD] selection:text-brand-white sm:py-8">
      <motion.div
        className="max-w-[1600px] mx-auto relative"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
      >
        <ExperienceList items={experiences} />
        <div className="w-full border-t border-brand-black/20" />
      </motion.div>
    </section>
  );
}
