/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				primary: '#00ADB5',
				'fountain-blue': {
					'50': '#ebfffc',
					'100': '#cdfffb',
					'200': '#a1fffa',
					'300': '#60fff9',
					'400': '#18f8f4',
					'500': '#00dede',
					'600': '#00adb5',
					'700': '#088c96',
					'800': '#10707a',
					'900': '#125d67',
					'950': '#053e47',
			},
			}
		},
	},
	plugins: [],
}
