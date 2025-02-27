"use client";

import { motion } from "framer-motion";
import { SKILL_CATEGORIES } from "@/utils/constants";

export default function PremiumTools() {
  return (
    <motion.div
      className="space-y-8 md:space-y-16 px-4 md:px-0 pt-16 md:pt-32"
      initial="initial"
      animate="animate"
      variants={{
        initial: { opacity: 0 },
        animate: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
    >
      <motion.h2
        className="font-bold text-5xl md:text-[120px] leading-none"
        variants={{
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
        }}
      >
        <span className="text-white">TECH</span>{" "}
        <span className="text-gray-600">STACK</span>
      </motion.h2>

      <div className="space-y-4 md:space-y-6">
        {SKILL_CATEGORIES.map((category) => (
          <motion.div
            key={category.title}
            className="space-y-4 md:space-y-6"
            variants={{
              initial: { opacity: 0 },
              animate: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.05,
                },
              },
            }}
          >
            <h3 className="font-semibold text-white/80 text-xl md:text-2xl">
              {category.title}
            </h3>
            <motion.div
              className="gap-3 md:gap-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
              variants={{
                initial: { opacity: 0 },
                animate: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.05,
                  },
                },
              }}
            >
              {category.items.map((item) => (
                <motion.div
                  key={item.name}
                  className="relative flex items-center gap-3 md:gap-4 border-white/10 bg-white/5 md:hover:bg-white/10 backdrop-blur-sm p-3 md:p-4 border rounded-2xl transition-colors cursor-default md:cursor-pointer group"
                  variants={{
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                  }}
                >
                  <item.icon
                    className={`w-6 h-6 md:w-8 md:h-8 ${item.color}`}
                  />
                  <div>
                    <h4 className="md:group-hover:text-white/90 font-medium text-sm text-white md:text-base">
                      {item.name}
                    </h4>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
