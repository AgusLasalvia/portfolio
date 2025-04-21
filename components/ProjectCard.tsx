import Image from "next/image";

interface ProjectCardProps {
	title: string;
	description: string;
	image: string;
	stack: string[];
	github?: string;
	demo?: string;
	status?: string;
	className?: string;
}

export default function ProjectCard({title,description,image,stack,github,demo,status,className}: ProjectCardProps) {
	
	
	const getStatusStyle = () => {
		if (status === "Progress") return "bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-200";
		if (status === "Finished") return "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-200";
		return "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
	};

	return (
		<div className={`rounded-2xl overflow-hidden shadow-md bg-gray-800 dark:text-white transition-all transform hover:scale-105 ${className}`}>
			<Image src={image} alt={title} width={800} height={400} className="object-cover w-full h-48" />
			<div className="p-4">
				<div className="flex justify-between items-center mb-2">
					<h3 className="text-xl font-bold">{title}</h3>
					{status && (
						<span className={`text-xs px-3 py-1 rounded-full font-semibold ${getStatusStyle()}`}>
							{status}
						</span>
					)}
				</div>
				<p className="text-gray-400 text-sm">{description}</p>
				<div className="flex flex-wrap gap-2 mt-3">
					{stack.map((tech) => (
						<span key={tech} className="text-xs bg-blue-100 dark:bg-blue-950 text-blue-500 px-2 py-1 rounded-md">
							{tech}
						</span>
					))}
				</div>
				<div className="flex gap-3 mt-4 flex-wrap justify-center">
					{github && (
						<a
							href={github}
							target="_blank"
							rel="noopener noreferrer"
							className="text-sm px-3 py-1 rounded-full border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition"
						>
							GitHub
						</a>
					)}
					{demo && (
						<a
							href={demo}
							target="_blank"
							rel="noopener noreferrer"
							className="text-sm px-3 py-1 rounded-full border border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition"
						>
							Live Demo
						</a>
					)}
				</div>
			</div>
		</div>
	);
}
