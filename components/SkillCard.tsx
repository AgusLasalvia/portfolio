import Image from "next/image"

interface SkillCardProps {
	type: string,
	description: string,
	icon: string
}

export default function SkillCard({ type, description, icon }: SkillCardProps) {
	return (
		<div className=" flex items-center justify-start w-[100%] h-[80px] bg-gray-800 rounded gap-2 mt-3 transition-all transform hover:scale-105 ">
			<Image className=" ml-2 md:ml-5" src={icon} alt={type} width={32} height={32} />
			<div>
				<p className=" text-white font-bold">{type}</p>
				<p className=" text-white">{description}</p>
			</div>
		</div>
	)
}