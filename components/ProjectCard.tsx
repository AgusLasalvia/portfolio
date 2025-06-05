'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

interface ProjectCardProps {
	title: string;
	description: string;
	image: string;
	stack: string[];
	github: string;
	demo: string;
	status: string;
}

const ProjectCard = ({ title, description, image, stack, github, demo, status }: ProjectCardProps) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<motion.div
			whileHover={{ scale: 1.02 }}
			whileTap={{ scale: 0.98 }}
			className="relative bg-white/5 rounded-xl overflow-hidden backdrop-blur-sm group min-h-[450px] flex flex-col w-full md:max-w-[400px]"
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}

		>
			{/* Status Badge */}
			<div className="absolute top-4 right-4 z-20">
				<span className={`px-3 py-1 rounded-full text-xs font-medium ${status === "Finished" ? "bg-green-500/20 text-green-400" : "bg-yellow-500/20 text-yellow-400"
					}`}>
					{status}
				</span>
			</div>

			{/* Image Container */}
			<div className="relative h-52 w-full overflow-hidden">
				<Image
					src={image}
					alt={title}
					fill
					className="object-cover transition-transform duration-300 group-hover:scale-110"
				/>
				{/* Overlay on hover */}
				<motion.div
					initial={false}
					animate={{ opacity: isHovered ? 1 : 0 }}
					className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4"
				>
					{github && (
						<a
							href={github}
							target="_blank"
							rel="noopener noreferrer"
							className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors w-12 h-12 flex items-center justify-center"
						>
							<i className="fab fa-github text-white text-xl" />
						</a>
					)}
					{demo && (
						<a
							href={demo}
							target="_blank"
							rel="noopener noreferrer"
							className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors w-12 h-12 flex items-center justify-center"
						>
							<i className="fas fa-external-link-alt text-white text-xl" />
						</a>
					)}
				</motion.div>
			</div>

			{/* Content */}
			<div className="p-6 flex-1 flex flex-col">
				<h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
				<p className="text-gray-400 text-sm mb-4 flex-1">{description || "Project description coming soon..."}</p>

				{/* Tech Stack */}
				<div className="flex flex-wrap gap-2 mt-auto">
					{stack.map((tech, index) => (
						<span
							key={index}
							className="px-3 py-1 bg-white/10 rounded-full text-xs text-white"
						>
							{tech}
						</span>
					))}
				</div>
			</div>
		</motion.div>
	);
};

export default ProjectCard;
