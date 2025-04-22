// components/ExperienceCard.tsx

interface ExperienceCardProps {
	role: string;
	company: string;
	period: string;
	location: string;
	description: string;
}

export default function ExperienceCard({
	role,
	company,
	period,
	location,
	description
}: ExperienceCardProps) {
	return (
		<div className="border w-[80%] border-gray-600 rounded-xl p-4 bg-gray-800 text-white md:w-full max-w-[800px] mt-3 transform hover:scale-105 transition-all">
			<div className="flex justify-between items-center mb-1">
				<h3 className="text-xl font-bold">{role}</h3>
				<span className="text-sm text-gray-400">{period}</span>
			</div>
			<p className="text-sm text-gray-300 font-semibold">{company} • {location}</p>
			<p className="text-sm text-gray-400 mt-2">{description}</p>
		</div>
	);
}
