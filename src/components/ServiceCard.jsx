"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 64,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const cardContentVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

const cardItemVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function ServiceCard({
  index,
  title,
  tags,
  image,
  href = "/book-now",
}) {
  return (
    <Link
      href={href}
      className="block w-full focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#758BFD]/30"
    >
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.28 }}
        className="group relative isolate flex w-full cursor-pointer flex-col gap-8 overflow-hidden border-t border-brand-black/20 px-6 py-10 transition-[background-color,border-color] duration-300 hover:z-50 hover:border-brand-black/60 hover:bg-[#758BFD]/8 md:flex-row md:items-baseline md:px-8 md:py-12"
      >
        <div className="absolute inset-y-0 left-0 z-0 w-0 bg-[#758BFD] transition-all duration-300 group-hover:w-3" />

        {/* Mobile Background Image */}
        {image && (
          <div
            className="absolute inset-0 z-0 md:hidden opacity-60 transition-opacity duration-300 group-hover:opacity-30"
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(255,255,255,0.96), rgba(255,255,255,0.78)), url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        )}

        {/* Index */}
        <motion.div
          variants={cardItemVariants}
          className="relative z-10 w-24 shrink-0 font-mono text-sm font-bold uppercase tracking-[0.28em] text-[#758BFD]"
        >
          {index < 10 ? `0${index}` : index}
        </motion.div>

        {/* Content */}
        <motion.div
          variants={cardContentVariants}
          className="relative z-10 flex flex-1 flex-col gap-5 transition-transform duration-300 group-hover:translate-x-4"
        >
          <motion.h3
            variants={cardItemVariants}
            className="m-0 max-w-full font-archivo text-5xl leading-[0.85] uppercase tracking-[-0.04em] text-[#758BFD] md:text-brand-black transition-colors duration-300 group-hover:text-[#758BFD] md:max-w-[70%] md:text-[7vw]"
          >
            {title}
          </motion.h3>

          <motion.div
            variants={cardContentVariants}
            className="flex flex-wrap gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-brand-black"
          >
            {tags.map((tag, i) => (
              <motion.span
                key={i}
                variants={cardItemVariants}
                className="rounded-full border border-brand-black/30 bg-brand-white/90 px-4 py-2 transition-colors duration-300 group-hover:border-brand-black group-hover:bg-brand-white"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            variants={cardItemVariants}
            className="flex items-center gap-3 font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-brand-black/65"
          >
            <span className="h-px w-12 bg-brand-black/30 transition-colors duration-300 group-hover:bg-brand-black" />
            Book this ride
          </motion.div>
        </motion.div>

        {/* Static Image Reveal (Visible on Desktop only) */}
        {image && (
          <div className="absolute right-0 top-1/2 z-20 hidden h-[200px] w-[300px] -translate-y-1/2 translate-x-6 pointer-events-none transition-all duration-[500ms] ease-out group-hover:translate-x-0 group-hover:opacity-100 md:right-24 md:block md:opacity-0 lg:right-28">
            <Image
              src={image}
              alt={title}
              fill
              sizes="300px"
              className="h-full w-full rounded-none border-4 border-brand-white object-cover shadow-[14px_14px_0_0_rgba(117,139,253,1)]"
            />
          </div>
        )}

        {/* Reveal Arrow */}
        <motion.div
          variants={cardItemVariants}
          className="relative z-10 ml-auto self-center pl-8 text-brand-black transition-all duration-300 group-hover:-rotate-45 group-hover:text-[#758BFD] md:pl-0 md:opacity-0 md:group-hover:opacity-100"
        >
          <ArrowRight className="w-12 h-12 md:w-20 md:h-20" strokeWidth={3} />
        </motion.div>
      </motion.div>
    </Link>
  );
}
