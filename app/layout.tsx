import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/react';
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import ParticlesBackground from "@/components/ParticlesBackground";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Agustin Lasalvia | Full Stack Developer",
	description: "Full Stack Developer specializing in TypeScript, Node.js, React, and .NET. View my projects, skills, and experience.",
	keywords: ["Full Stack Developer", "TypeScript", "Node.js", "React", "C#", ".NET", "MongoDB", "MySQL"],
	authors: [{ name: "Agustin Lasalvia" }],
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://aguslasalvia.vercel.app",
		siteName: "Agustin Lasalvia Portfolio",
		title: "Agustin Lasalvia | Full Stack Developer",
		description: "Full Stack Developer specializing in TypeScript, Node.js, React, and .NET",
		images: [
			{
				url: "/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Agustin Lasalvia Portfolio"
			}
		]
	},
	twitter: {
		card: "summary_large_image",
		title: "Agustin Lasalvia | Full Stack Developer",
		description: "Full Stack Developer specializing in TypeScript, Node.js, React, and .NET",
		images: ["/og-image.jpg"],
	}
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			{/* Font from Google */}
			<head>
				<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />

				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" />

				{/* Font Awesome icons */}
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
				/>
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} flex flex-col items-center antialiased h-screen w-full relative`}
			>
				<ThemeProvider attribute="class" defaultTheme="dark">
					<ParticlesBackground />
					<Navbar />
					{children}
					<Analytics />
				</ThemeProvider>
			</body>
		</html>
	);
}
