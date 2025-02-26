import { motion, Variants } from "framer-motion";
import { HiOutlineLightBulb } from "react-icons/hi";

import Link from "next/link";
import { HOBBIES } from "@/utils/constants";

interface HobbyCardProps {
  title: string;
  icon: React.ElementType;
  description: string;
  link?: string;
  gradient: string;
}

const HobbyCard = ({
  title,
  icon: Icon,
  description,
  link,
  gradient,
}: HobbyCardProps) => {
  const CardWrapper = ({ children }: { children: React.ReactNode }) => {
    return link ? (
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {children}
      </Link>
    ) : (
      <>{children}</>
    );
  };

  return (
    <CardWrapper>
      <motion.div
        className={`relative flex flex-col h-full border-white/10 hover:border-white/20 ${gradient} backdrop-blur-sm p-5 md:p-6 border rounded-3xl transition-all overflow-hidden group hover:scale-[1.02]`}
        variants={{
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
        }}
        whileHover={{ y: -5 }}
      >
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
        <div className="relative space-y-3 md:space-y-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10">
              <Icon className="w-5 h-5 text-white" />
            </div>
            <h3 className="font-semibold text-xl md:text-2xl text-white">
              {title}
            </h3>
          </div>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            {description}
          </p>
          {link && (
            <div className="pt-2">
              <span className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors">
                Learn more →
              </span>
            </div>
          )}
        </div>
      </motion.div>
    </CardWrapper>
  );
};

const Hobbies = () => {
  const containerVariants: Variants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const titleVariants: Variants = {
    initial: { opacity: 0, y: 50 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <motion.div
      className="relative space-y-6 md:space-y-8 px-4 md:px-0 pt-16 md:pt-24"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      id="hobbies"
    >
      <motion.div variants={titleVariants}>
        <div className="flex items-center gap-2 md:gap-3 mb-2">
          <HiOutlineLightBulb className="w-5 md:w-6 h-5 md:h-6 text-white" />
          <h3 className="font-medium text-lg text-white md:text-xl">
            Beyond Coding
          </h3>
        </div>
        <motion.h2 className="font-bold text-4xl md:text-[90px] leading-none">
          <span className="text-white">INTERESTS</span>{" "}
          <span className="text-gray-600">& HOBBIES</span>
        </motion.h2>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        variants={{
          initial: { opacity: 0 },
          animate: {
            opacity: 1,
            transition: {
              staggerChildren: 0.15,
              delayChildren: 0.2,
            },
          },
        }}
      >
        {HOBBIES.map((hobby) => (
          <HobbyCard key={hobby.title} {...hobby} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Hobbies;
