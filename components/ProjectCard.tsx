import Image from "next/image";

interface ProjectCardProps {
	title: string;
	description: string;
	image: string;
	stack: string[];
	github?: string;
	demo?: string;
	className?: string;
}

export default function ProjectCard({ title, description, image, stack, github, demo, className }: ProjectCardProps) {
	return (
		<div className={` rounded-2xl overflow-hidden shadow-md bg-gray-800 dark:text-white transition-all transform hover:scale-105 ${className}`}>
			<Image src={image} alt={title} width={800} height={400} className="object-cover w-full h-48" />
			<div className="p-4">
				<h3 className="text-xl font-bold mb-1">{title}</h3>
				<p className="text-gray-500 dark:text-gray-300 text-sm">{description}</p>
				<div className="flex flex-wrap gap-2 mt-2">
					{stack.map((tech) => (
						<span key={tech} className="text-xs bg-blue-100 dark:bg-blue-950 text-blue-100 px-2 py-1 rounded-md">
							{tech}
						</span>
					))}
				</div>
				<div className="flex gap-4 mt-4">
					{github && (
						<a href={github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
							GitHub
						</a>
					)}
					{demo && (
						<a href={demo} target="_blank" rel="noopener noreferrer" className="text-green-500 hover:underline">
							Live Demo
						</a>
					)}
				</div>
			</div>
		</div>
	);
};

