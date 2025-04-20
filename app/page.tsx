import ContentSection from "@/components/ContentSection";
import ExperienceCard from "@/components/ExperienceCard";
import SkillCard from "@/components/SkillCard";
import Image from "next/image";
import { title } from "process";

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
	{ role: "Backend Developer", company:"Freelance", period:"2023 - 2024", location: "Montevideo - Uruguay", description: "Responsible for the design, development, implementation, and updating of various backend systems.Utilized development tools and programming languages such as Node.js for backend logic and MongoDB for data storage, including proper data validation." }
]

export default function Home() {
	return (
		<div className=" flex justify-center flex-col items-center">
			{/* About me About */}
			<ContentSection title="" id="">
				<div className="flex flex-col justify-center items-center md:justify-start md:flex-row md:items-start w-[70%]  text-white ">
					<Image
						src="/profile.jpg"
						alt="Profile Picture"
						width={100}
						height={100}
						className=" rounded-full" />
					<div className=" flex flex-col h-full justify-center ml-5">

						<p className=" font-bold text-2xl">Agustin Lasalvia</p>
						<p className=" text-gray-400">Full Stack Developer</p>
						<p className=" text-gray-400"><Image className=" text-amber-100 !important" src="/pin.png" alt="Location" width={20} height={20} />Montevideo - Uruguay</p>
					</div>
				</div>
				<p className="text-white w-[70%] mt-5">I'm a Junior Full-Stack Developer with a passion for creating and solving problems, located at Montevideo - Uruguay.
					Ready for new adventures!
				</p>
				<div className="flex gap-5 mt-5 justify-center  w-[70%] md:justify-start">
					{social.map((link) => {
						return (
							<a href={link.href} className="text-white hover:text-gray- transition-all transform hover:scale-150 " key={link.icon}>
								<i className={link.icon}></i>
							</a>
						)
					})}
				</div>
			</ContentSection>

			{/* Skills */}
			<ContentSection title="Skills" id="skills">
				<div className="grid md:grid-cols-2 md:w-[70%] w-full mb-10 gap-3 justify-center">
					{skills.map((skill) => {
						return (
							<SkillCard key={skill.title} type={skill.title} description={skill.description} icon={skill.icon} />
						)
					})}
				</div>

			</ContentSection>

			{/* Experience */}
			<ContentSection title="Experience" id="experience">
				{experience.map((exp) => {
					return (
						<ExperienceCard key={exp.role} role={exp.role} company={exp.company} period={exp.period} location={exp.location} description={exp.description} />
					)
				})}
			</ContentSection>
			{/* Projects */}
		</div>
	);
}