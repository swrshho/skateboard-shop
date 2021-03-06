/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: [
		'./public/index.html',
		'./src/components/**/*{js,jsx}',
		'./src/assets/**/*.{js,jsx}',
	],
	theme: {
		extend: {},
		colors: {
			black: '#000000',
			white: '#ffffff',
			red: '#D80032',
			'half-black': 'rgba(0,0,0,0.5)',
			'light-bluish-gray': '#EDF2F4',
			'dark-blue': '#2B2D42',
			'velvet-red': '#8C0020',
			'nothing:': 'rgba(0,0,0, 0)',
		},
		fontFamily: {
			poppins: ['Poppins'],
			anton: ['Anton'],
		},
	},
	plugins: [],
}
