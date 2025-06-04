'use client';

import { motion } from 'framer-motion';

const DownloadCV = () => {
	return (
		<motion.a
			href="/cv.pdf"
			download
			className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors group"
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.95 }}
		>
			<span>Download CV</span>
			<motion.i
				className="fas fa-download"
				animate={{ y: [0, 3, 0] }}
				transition={{
					duration: 1,
					repeat: Infinity,
					repeatType: "reverse",
				}}
			/>
		</motion.a>
	);
};

export default DownloadCV; 