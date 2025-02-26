import { motion, Variants } from "framer-motion";
import { HiOutlineHeart } from "react-icons/hi";
import {
  FiCalendar,
  FiClock,
  FiBriefcase,
  FiChevronRight,
} from "react-icons/fi";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import Image from "next/image";
import { VOLUNTEER_EXPERIENCES } from "@/utils/constants";
interface VolunteerRoleProps {
  organization: string;
  role: string;
  period: string;
  responsibilities: string[];
  logoSrc?: string;
}

const VolunteerRole = ({
  organization,
  role,
  period,
  responsibilities,
  logoSrc,
}: VolunteerRoleProps) => {
  const formatPeriod = (period: string) => {
    const [start, end] = period.split(" - ");
    const isPresent = end.toLowerCase() === "present";
    return { start, end, isPresent };
  };

  return (
    <motion.div
      className="relative flex flex-col gap-4 md:gap-6 border-white/10 md:hover:border-white/20 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm p-5 md:p-8 border rounded-3xl transition-all overflow-hidden group hover:md:scale-105"
      variants={{
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
      }}
    >
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
      <div className="relative space-y-3 md:space-y-4">
        <div className="space-y-2 md:space-y-3">
          <div className="flex items-center gap-2 md:gap-3">
            {logoSrc ? (
              <div className="relative w-8 h-8 md:w-10 md:h-10 overflow-hidden rounded-full">
                <Image
                  src={logoSrc}
                  alt={`${organization} logo`}
                  fill
                  sizes="(max-width: 768px) 32px, 40px"
                  className="object-cover"
                />
              </div>
            ) : (
              <HiOutlineOfficeBuilding className="w-5 md:w-6 h-5 md:h-6 text-white" />
            )}
            <h3 className="md:group-hover:text-white/90 font-semibold text-3xl text-white md:text-5xl transition-colors">
              {organization}
            </h3>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <FiBriefcase className="w-4 md:w-5 h-4 md:h-5" />
            <p className="text-lg md:text-2xl">{role}</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2 text-gray-500">
            <FiCalendar className="w-4 h-4" />
            <p className="text-base md:text-lg">{formatPeriod(period).start}</p>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <FiClock className="w-4 h-4" />
            <p
              className={`text-base md:text-lg ${
                formatPeriod(period).isPresent ? "text-green-400" : ""
              }`}
            >
              {formatPeriod(period).end}
            </p>
          </div>
        </div>
      </div>

      <ul className="relative space-y-3 md:space-y-4">
        {responsibilities.map((responsibility, index) => (
          <motion.li
            key={index}
            className="flex items-start gap-2 md:gap-3 text-gray-300 text-sm md:text-lg leading-relaxed"
            variants={{
              initial: { opacity: 0, x: -20 },
              animate: { opacity: 1, x: 0 },
            }}
            transition={{ delay: index * 0.1 }}
          >
            <FiChevronRight className="md:group-hover:text-white/60 flex-shrink-0 mt-1 w-4 md:w-5 h-4 md:h-5 text-gray-500 transition-colors" />
            <span>{responsibility}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

const VolunteerWork = () => {
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
      id="volunteer-work"
    >
      <motion.div variants={titleVariants}>
        <div className="flex items-center gap-2 md:gap-3 mb-2">
          <HiOutlineHeart className="w-5 md:w-6 h-5 md:h-6 text-white" />
          <h3 className="font-medium text-lg text-white md:text-xl">
            Giving Back
          </h3>
        </div>
        <motion.h2 className="font-bold text-4xl md:text-[90px] leading-none">
          <span className="text-white">VOLUNTEER</span>{" "}
          <span className="text-gray-600">WORK</span>
        </motion.h2>
      </motion.div>

      <motion.div
        className="space-y-4 md:space-y-6"
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
        {VOLUNTEER_EXPERIENCES.map((experience) => (
          <VolunteerRole key={experience.role} {...experience} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default VolunteerWork;
