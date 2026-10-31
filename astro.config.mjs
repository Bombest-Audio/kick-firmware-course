// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://bombest-audio.github.io',
	base: '/kick-firmware-course',
	integrations: [
		starlight({
			title: 'KICK Firmware Course',
			description:
				'An unofficial, community-made course on how the open-source KICK firmware works.',
			customCss: [
				'@fontsource/barlow-condensed/500.css',
				'@fontsource/barlow-condensed/600.css',
				'@fontsource/barlow-condensed/700.css',
				'@fontsource/hanken-grotesk/400.css',
				'@fontsource/hanken-grotesk/500.css',
				'@fontsource/hanken-grotesk/700.css',
				'@fontsource/dm-mono/400.css',
				'@fontsource/dm-mono/500.css',
				'./src/styles/tokens.css',
				'./src/styles/course.css',
			],
			components: {
				Footer: './src/components/Footer.astro',
			},
			sidebar: [
				{ label: 'Start here', slug: 'course/start-here' },
				{ label: '0. Orientation', slug: 'course/00-orientation' },
				{ label: '1. The hardware map', slug: 'course/01-hardware-map' },
				{ label: '2. Boot', slug: 'course/02-boot' },
				{ label: '3. Embedded Linux and Buildroot', slug: 'course/03-embedded-linux-buildroot' },
				{ label: '4. The app skeleton', slug: 'course/04-app-skeleton' },
				{ label: '5. Talking to the hardware', slug: 'course/05-talking-to-hardware' },
				{ label: '6. Sound engine I', slug: 'course/06-sound-engine-1' },
				{ label: '7. Sound engine II', slug: 'course/07-sound-engine-2' },
				{ label: '8. Time', slug: 'course/08-time' },
				{ label: '9. State', slug: 'course/09-state' },
				{ label: '10. Updates and recovery', slug: 'course/10-updates-and-recovery' },
				{ label: '11. The camera', slug: 'course/11-camera' },
				{ label: '12. Fork it', slug: 'course/12-fork-it' },
				{ label: 'Diagram kit', slug: 'contribute/diagram-kit' },
			],
		}),
	],
});
