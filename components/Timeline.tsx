'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface TimelineItemProps {
	role: string;
	company: string;
	period: string;
	location: string;
	description: string;
	logo?: string;
	achievements?: string[];
}

const TimelineItem = ({ role, company, period, location, description, logo, achievements = [] }: TimelineItemProps) => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, x: -50 }}
			animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
			transition={{ duration: 0.5 }}
			className="relative pl-8 pb-8 group"
		>
			{/* Timeline line */}
			<div className="absolute left-0 top-0 h-full w-0.5 bg-gray-600 group-last:h-6"></div>

			{/* Timeline dot */}
			<div className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-blue-500"></div>

			{/* Content */}
			<div className="bg-white/5 p-6 rounded-lg backdrop-blur-sm hover:bg-white/10 transition-all">
				<div className="flex items-center justify-between mb-2">
					<h3 className="text-white font-semibold text-lg">{role}</h3>
					<span className="text-gray-400 text-sm">{period}</span>
				</div>
				<div className="mb-2">
					<p className="text-blue-400">{company}</p>
					<p className="text-gray-400 text-sm">{location}</p>
				</div>
				<p className="text-gray-300 mb-4">{description}</p>

				{achievements.length > 0 && (
					<div className="space-y-2">
						<h4 className="text-white font-medium">Key Achievements:</h4>
						<ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
							{achievements.map((achievement, index) => (
								<li key={index}>{achievement}</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</motion.div>
	);
};

const Timeline = ({ items }: { items: TimelineItemProps[] }) => {
	return (
		<div className="relative">
			{items.map((item, index) => (
				<TimelineItem key={index} {...item} />
			))}
		</div>
	);
};

export default Timeline; 