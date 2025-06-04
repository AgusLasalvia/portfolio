'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
	children: ReactNode;
	className?: string;
	delay?: number;
}

const AnimatedSection = ({ children, className = "", delay = 0 }: AnimatedSectionProps) => {
	const [ref, inView] = useInView({
		triggerOnce: true,
		threshold: 0.1,
	});

	return (
		<motion.div
			ref={ref}
			initial={{ y: 50, opacity: 0 }}
			animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
			transition={{
				duration: 0.8,
				delay: delay,
				ease: [0.43, 0.13, 0.23, 0.96]
			}}
			className={className}
		>
			{children}
		</motion.div>
	);
};

export default AnimatedSection; 