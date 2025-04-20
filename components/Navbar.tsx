const links = [
	{ href: "/", label: "About", icon: "" },
	{ href: "#projects", label: "Projects", icon: "" },
	{ href: "#experience", label: "Experience", icon: "" }
]

// Change UI Soon as possible

export default function Navbar() {
	return (
		<nav className="flex justify-center w-full">
			<div className="flex items-center justify-center gap-[25%] w-[58%] mt-2 rounded h-[40px] max-w-[700px] border-b-1 border-white">
				{links.map((link) => (
					<a key={link.label} href={link.href} className="text-white hover:text-gray-700">
						{link.label}
					</a>
				))}
			</div>
		</nav>
	)

};