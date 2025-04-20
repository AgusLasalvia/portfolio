interface ContentSectionProps {
	title: string,
	children: React.ReactNode
	id: string
}

export default function ContentSection({ title, children, id }: ContentSectionProps) {
	return (
		<section id={id} className=" flex flex-col justify-center items-center w-[100%] md:w-[70%] mt-12 mb-12">
			<h2 className=" w-[70%] flex justify-start text-2xl font-bold mb-5">{title}</h2>
			{children}
		</section>
	)
}