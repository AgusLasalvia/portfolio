'use client'

import ContentSection from "@/components/ContentSection";
import ExperienceCard from "@/components/ExperienceCard";
import ProjectCard from "@/components/ProjectCard";
import SkillCard from "@/components/SkillCard";

import Image from "next/image";

const social = [
	{ icon: "fa-brands fa-linkedin-in fa-xl", href: "https://www.linkedin.com/in/agustin-lasalvia/" },
	{ icon: "fa-brands fa-github-alt fa-xl", href: "https://github.com/AgusLasalvia" },
	{ icon: "fa-brands fa-instagram fa-xl", href: "https://www.instagram.com/agustin.lasalvia/" }
]


const skills = [
	{ title: "Typescript", description: "JavaScript with strong typing", icon: "/typescript.png" },
	{ title: "NodeJS", description: "JavaScript runtime", icon: "/node.png" },
	{ title: "MySQL", description: "Relational Database", icon: "/mysql.png" },
	{ title: "React", description: "JavaScript Web Framework", icon: "/react.png" },
	{ title: "C#", description: ".NET Language", icon: "/c-sharp.png" },
	{ title: "Python", description: "General Purpose Language", icon: "/python.png" }
]


const experience = [
	{ role: "IT Technician", company: "UDELAR", period: "2021 - Present", location: "Montevideo - Uruguay", description: "Responsibilities. Properly configure and install the hardware and software on the relevant devices, and configure the software and drivers as necessary. Ensure proper maintenance and repair of all IT equipment and accessories, including routers and printers, etc. " },
	{ role: "Backend Developer", company: "Freelance", period: "2023", location: "Montevideo - Uruguay", description: "Responsible for the design, development, implementation, and updating of various backend systems.Utilized development tools and programming languages such as Node.js for backend logic and MongoDB for data storage, including proper data validation." }
]

const projects = [
	{
		title: "QUITEL 2023",
		description: "",
		image: "/quitel.png",
		stack: ["React", "NodeJS", "MongoDB", "Typescript","Express.JS"],
		github: "https://github.com/AgusLasalvia/Congress-2023",
		demo: "https://quitelcongress-showcase.netlify.app/",
		status: "Finished"
	},

	{
		title: "SorvisLater",
		description: "",
		image: "/sorvis.png",
		stack: ["NodeJS", "Supabase", "Express", "Typescript", "Prisma"],
		github: "https://github.com/AgusLasalvia/SorviceLater",
		demo: "https://sorvislater.netlify.app/login",
		status: "Finished"
	},
	{
		title: "Tambo",
		description: "",
		image: "/tambo.png",
		stack: ["C#", ".NET", "MVC"],
		github: "https://github.com/AgusLasalvia/Tambo",
		demo: "https://tambo.onrender.com/",
		status: "Finished"
	},
	{
		title: "YourDelivery",
		description: "",
		image: "/delivery.png",
		stack: ["C#", ".NET", "MVC", "Entity Framework"],
		github: "https://github.com/AgusLasalvia/YourDelivery",
		demo: "",
		status: "Finished"
	},

	{
		title: "Recisaver App",
		description: "",
		image: "/recisaver.png",
		stack: ["React Native", "Expo", "Reanimated", "Typescript"],
		github: "https://github.com/AgusLasalvia/recisaver-app",
		demo: "",
		status: "Progress"
	},

	{
		title: "Recisaver Server",
		description: "",
		image: "/github.png",
		stack: ["NodeJS", "Supabase", "SQL", "Express", "Typescript", "Prisma"],
		github: "https://github.com/AgusLasalvia/recisaver-server",
		demo: "",
		status: "Progress"
	}


]

export default function Home() {
	return (

		<div className=" flex justify-center flex-col items-center mt-6" >

			{/* About me About */}
			< ContentSection title="" id="about" >
				<div className="flex flex-col justify-center items-center md:flex-row md:items-start w-full md:w-[80%] text-white">
					<figure className="flex items-center justify-center w-full md:w-[250px]">
						<Image
							src="/profile.jpg"
							alt="Profile Picture"
							width={250}
							height={250}
							className="rounded-2xl"
						/>
					</figure>
					<div className="flex flex-col h-full w-full items-center md:items-start justify-center md:ml-5 mt-5 md:mt-0">
						<p className="font-bold text-2xl w-full text-center md:text-start">Agustin Lasalvia</p>
						<p className="text-gray-400 w-full text-center md:text-start">Full Stack Developer</p>
						<p className="text-gray-400 w-full text-center md:text-start">Montevideo - Uruguay</p>
					</div>
				</div>
				<p className="text-white mt-5 text-center w-[90%] md:w-[80%] md:text-start ">I m a Junior Full-Stack Developer with a passion for creating and solving problems,
					Ready for new adventures!
				</p>
				<div className="flex gap-10 mt-5 justify-center w-[80%] md:justify-start">
					{social.map((link) => {
						return (
							<a
								href={link.href}
								className="text-white hover:text-blue-800 transition-all transform hover:scale-150 "
								key={link.icon}>
								<i className={link.icon} />
							</a>
						)
					})}
				</div>
			</ContentSection >

			{/* Skills */}
			< ContentSection title="Skills" id="skills" >
				<div className="grid md:grid-cols-2 md:w-[80%] w-[80%] mb-10 gap-5">
					{skills.map((skill) => {
						return (
							<SkillCard
								key={skill.title}
								type={skill.title}
								description={skill.description}
								icon={skill.icon} />
						)
					})}
				</div>

			</ContentSection >

			{/* Experience */}
			< ContentSection
				title="Experience"
				id="experience" >

				{
					experience.map((exp) => {
						return (
							<ExperienceCard
								key={exp.role}
								role={exp.role}
								company={exp.company}
								period={exp.period}
								location={exp.location}
								description={exp.description}
							/>
						)
					})
				}
			</ContentSection >


			{/* Projects */}

			< ContentSection title="Projects" id="projects" >
				<div className="grid md:grid-cols-2 md:w-[100%] w-[80%] mb-10 gap-5">
					{projects.map((project) => {

						return (

							<ProjectCard
								title={project.title}
								description={project.description}
								image={project.image}
								stack={project.stack}
								github={project.github}
								demo={project.demo}
								status={project.status}
								key={project.title}
							/>
						)
					})}
				</div>
			</ContentSection >
		</div >

	);
}
