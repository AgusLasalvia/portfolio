const links = [
	{ href: "/", label: "About" },
	{ href: "#projects", label: "Projects" },
	{ href: "#experience", label: "Experience" }
];

export default function Navbar() {
	return (
		<nav className="fixed top-4  z-50 w-[90%] max-w-2xl mx-auto h-14 px-6 flex items-center justify-center bg-gray/50 border-1 border-gray-900 backdrop-blur-md rounded-full shadow-md">

			<ul className="flex gap-8">
				{links.map((link) => (
					<li key={link.label}>
						<a
							href={link.href}
							className="text-white font-medium relative group transition-colors duration-200"
						>
							{link.label}
							<span className="block h-[2px] w-0 group-hover:w-full transition-all duration-300 bg-blue-500 absolute bottom-[-4px] left-0"></span>
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
}
