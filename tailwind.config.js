/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				main: ['El Messiri', 'sans-serif'],
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				'prime-blue': '#1e90ff',
				'prime-orange': '#ff6f00',
				'prime-green': {
					100: '#A6EAA6',
					200: '#32cd32',
				},
				'prime-yellow': '#ffd700',
				'prime-white': '#f0f0f0',
				'prime-dark': '#333333',
			},
		},
	},
	plugins: [],
};
