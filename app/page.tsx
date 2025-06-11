"use client";

import ContentSection from "@/components/ContentSection";
import ProjectCard from "@/components/ProjectCard";
import SkillCard from "@/components/SkillCard";
import Timeline from "@/components/Timeline";
import DownloadCV from "@/components/DownloadCV";
import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";
import { motion } from "framer-motion";

const social = [
  {
    icon: "fa-brands fa-linkedin-in fa-xl",
    href: "https://www.linkedin.com/in/agustin-lasalvia/",
  },
  {
    icon: "fa-brands fa-github-alt fa-xl",
    href: "https://github.com/AgusLasalvia",
  },
  {
    icon: "fa-brands fa-instagram fa-xl",
    href: "https://www.instagram.com/agustin.lasalvia/",
  },
];

const skills = [
  {
    title: "Typescript",
    description: "JavaScript with strong typing",
    icon: "/typescript.png",
    level: 85,
    projects: ["QUITEL 2023", "SorvisLater", "Recisaver App"],
  },
  {
    title: "NodeJS",
    description: "JavaScript runtime",
    icon: "/node.png",
    level: 90,
    projects: ["QUITEL 2023", "SorvisLater", "Recisaver Server"],
  },
  {
    title: "MySQL",
    description: "Relational Database",
    icon: "/mysql.png",
    level: 80,
    projects: ["Tambo", "YourDelivery"],
  },
  {
    title: "React",
    description: "JavaScript Web Framework",
    icon: "/react.png",
    level: 85,
    projects: ["QUITEL 2023", "Recisaver App"],
  },
  {
    title: "C#",
    description: ".NET Language",
    icon: "/c-sharp.png",
    level: 75,
    projects: ["Tambo", "YourDelivery"],
  },
  {
    title: "Python",
    description: "General Purpose Language",
    icon: "/python.png",
    level: 70,
    projects: [],
  },
];

const experience = [
  {
    role: "IT Technician",
    company: "UDELAR",
    period: "2021 - Present",
    location: "Montevideo - Uruguay",
    description:
      "Responsibilities. Properly configure and install the hardware and software on the relevant devices, and configure the software and drivers as necessary. Ensure proper maintenance and repair of all IT equipment and accessories, including routers and printers, etc.",
  },
  {
    role: "Backend Developer",
    company: "Freelance",
    period: "2023",
    location: "Montevideo - Uruguay",
    description:
      "Responsible for the design, development, implementation, and updating of various backend systems. Utilized development tools and programming languages such as Node.js for backend logic and MongoDB for data storage, including proper data validation.",
  },
];

const projects = [
  {
    title: "QUITEL 2023",
    description:
      "Conference management system for QUITEL 2023, featuring registration, schedule management, and abstract submissions.",
    image: "/quitel.png",
    stack: ["React", "NodeJS", "MongoDB", "Typescript", "Express.JS"],
    github: "https://github.com/AgusLasalvia/Congress-2023",
    demo: "https://quitelcongress-showcase.netlify.app/",
    status: "Finished",
  },

  {
    title: "SorvisLater",
    description:
      "A platform for scheduling and managing service appointments with real-time notifications.",
    image: "/sorvis.png",
    stack: ["NodeJS", "Supabase", "Express", "Typescript", "Prisma"],
    github: "https://github.com/AgusLasalvia/SorviceLater",
    demo: "https://sorvislater.netlify.app/login",
    status: "Finished",
  },
  {
    title: "Tambo",
    description:
      "Dairy farm management system built with .NET, handling inventory, production, and sales tracking.",
    image: "/tambo.png",
    stack: ["C#", ".NET", "MVC"],
    github: "https://github.com/AgusLasalvia/Tambo",
    demo: "https://tambo.onrender.com/",
    status: "Finished",
  },
  {
    title: "YourDelivery",
    description:
      "Food delivery management system with real-time order tracking and restaurant integration.",
    image: "/delivery.png",
    stack: ["C#", ".NET", "MVC", "Entity Framework"],
    github: "https://github.com/AgusLasalvia/YourDelivery",
    demo: "https://yourdelivery.onrender.com/",
    status: "Finished",
  },

  {
    title: "Recisaver App",
    description:
      "Mobile app for saving and organizing recipes with shopping list integration.",
    image: "/recisaver.png",
    stack: ["React Native", "Expo", "Reanimated", "Typescript"],
    github: "https://github.com/AgusLasalvia/recisaver-app",
    demo: "",
    status: "Progress",
  },

  {
    title: "Recisaver Server",
    description:
      "Backend service for the Recisaver app, handling user data and recipe management.",
    image: "/github.png",
    stack: ["NodeJS", "Supabase", "SQL", "Express", "Typescript", "Prisma"],
    github: "https://github.com/AgusLasalvia/recisaver-server",
    demo: "",
    status: "Progress",
  },
];

export default function Home() {
  return (
    <div className="flex justify-center flex-col items-center mt-6 max-w-6xl mx-auto">
      {/* About me About */}
      <ContentSection title="" id="about">
        <AnimatedSection className="flex flex-col justify-center items-center md:flex-row md:items-start w-full md:w-[80%] text-white">
          <motion.figure
            whileHover={{ scale: 1.05 }}
            className="flex items-center justify-center w-full md:w-[250px]"
          >
            <Image
              src="/profile.jpg"
              alt="Profile Picture"
              width={250}
              height={250}
              className="rounded-2xl"
            />
          </motion.figure>
          <div className="flex flex-col h-full w-full items-center md:items-start justify-center md:ml-5 mt-5 md:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="font-bold text-2xl w-full text-center md:text-start">
                Agustin Lasalvia
              </h1>
              <p className="text-gray-400 w-full text-center md:text-start">
                Full Stack Developer
              </p>
              <p className="text-gray-400 w-full text-center md:text-start">
                Montevideo - Uruguay
              </p>
            </motion.div>
            <p className="text-white mt-5 text-center w-[90%] md:w-[80%] md:text-start">
              I'm a Junior Full-Stack Developer with a passion for creating and
              solving problems, Ready for new adventures!
            </p>
            <div className="mt-5 flex flex-col md:flex-row gap-5 items-center">
              <DownloadCV />
              <div className="flex gap-10 justify-center">
                {social.map((link) => (
                  <motion.a
                    key={link.icon}
                    href={link.href}
                    className="text-white hover:text-blue-500"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <i className={link.icon} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </ContentSection>

      {/* Skills */}
      <ContentSection title="Skills" id="skills">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
          {skills.map((skill, index) => (
            <AnimatedSection key={skill.title} delay={index * 0.1}>
              <SkillCard {...skill} type={skill.title} />
            </AnimatedSection>
          ))}
        </div>
      </ContentSection>

      {/* Experience */}
      <ContentSection title="Experience" id="experience">
        <div className="w-[80%] md:w-[70%]">
          <Timeline items={experience} />
        </div>
      </ContentSection>

      {/* Projects */}
      <ContentSection title="Projects" id="projects">
        <div className="grid md:grid-cols-2 md:w-[100%] w-[80%] mb-10 gap-5">
          {projects.map((project, index) => (
            <AnimatedSection key={project.title} delay={index * 0.1}>
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                stack={project.stack}
                github={project.github}
                demo={project.demo}
                status={project.status}
              />
            </AnimatedSection>
          ))}
        </div>
      </ContentSection>
    </div>
  );
}
