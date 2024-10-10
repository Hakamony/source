/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				'prime-blue': '#01baef',
				'prime-orange': '#ff6f00',
				'prime-green': {
					100: '#32cd3260',
					200: '#32cd32',
				},
				'prime-yellow': '#ffe156',
				'prime-white': '#fdf0d5',
				'prime-dark': '#000000',
			},
		},
	},
	plugins: [],
};
