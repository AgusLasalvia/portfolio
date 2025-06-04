"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface SkillCardProps {
  type: string;
  description: string;
  icon: string;
  projects?: string[];
}

const SkillCard = ({
  type,
  description,
  icon,
  projects = [],
}: SkillCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-white/5 p-6 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all cursor-pointer group relative w-[480px] md:max-w-[350px] md:w-full mx-auto md:h-[90px]"
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 relative bg-white/5 rounded-lg p-2">
          <Image
            src={icon}
            alt={`${type} Icon`}
            fill
            className="object-contain"
          />
        </div>
        <div>
          <h3 className="text-white text-lg font-semibold mb-2">{type}</h3>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>
      </div>

      {/* Tooltip with projects */}
      {projects.length > 0 && (
        <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/90 p-3 rounded-lg -top-2 left-1/2 -translate-x-1/2 -translate-y-full min-w-48 z-10 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:top-full after:border-8 after:border-transparent after:border-t-black/90">
          <p className="text-white text-sm font-medium mb-1">
            Projects using {type}:
          </p>
          <ul className="text-gray-300 text-xs space-y-1">
            {projects.map((project, index) => (
              <li key={index}>{project}</li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
};

export default SkillCard;
