'use client';

import Image from "next/image"
import { motion } from "framer-motion"

interface SkillCardProps {
	type: string,
	description: string,
	icon: string,
	projects?: string[]
}

const SkillCard = ({ type, description, icon, projects = [] }: SkillCardProps) => {
	return (
		<motion.div
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.95 }}
			className="bg-white/5 p-3 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all cursor-pointer group relative w-full"
		>
			<div className="flex items-center gap-3">
				<div className="w-10 h-10 relative">
					<Image
						src={icon}
						alt="Skill Icon"
						fill
						className="object-contain"
					/>
				</div>
				<div className="flex-1">
					<h3 className="text-white font-semibold">{type}</h3>
					<p className="text-gray-400 text-xs">{description}</p>
				</div>
			</div>

			{/* Tooltip with projects */}
			{projects.length > 0 && (
				<div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/90 p-3 rounded-lg -top-2 left-1/2 -translate-x-1/2 -translate-y-full min-w-48 z-10 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:top-full after:border-8 after:border-transparent after:border-t-black/90">
					<p className="text-white text-sm font-medium mb-1">Projects using {type}:</p>
					<ul className="text-gray-300 text-xs space-y-1">
						{projects.map((project, index) => (
							<li key={index}>{project}</li>
						))}
					</ul>
				</div>
			)}
		</motion.div>
	)
}

export default SkillCard
