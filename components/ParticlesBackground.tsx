'use client';

import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
	const particlesInit = useCallback(async (engine: Engine) => {
		await loadSlim(engine);
	}, []);

	const particlesLoaded = useCallback(async (container: Container | undefined) => {
		console.log("Particles container loaded", container);
	}, []);

	return (
		<Particles
			className="absolute inset-0 -z-10"
			id="tsparticles"
			init={particlesInit}
			loaded={particlesLoaded}
			options={{
				background: {
					color: {
						value: "#000000",
					},
				},
				fpsLimit: 60,
				particles: {
					color: {
						value: "#ffffff",
					},
					links: {
						enable: false,
					},
					move: {
						enable: true,
						outModes: {
							default: "bounce",
						},
						random: false,
						speed: 0.5,
						straight: false,
					},
					number: {
						density: {
							enable: true,
							area: 800,
						},
						value: 50,
					},
					opacity: {
						value: 0.3,
					},
					shape: {
						type: "circle",
					},
					size: {
						value: { min: 1, max: 2 },
					},
				},
				detectRetina: true,
			}}
		/>
	);
};

export default ParticlesBackground; 