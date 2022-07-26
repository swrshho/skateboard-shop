/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: [
		'./public/index.html',
		'./src/components/**/*{js,jsx}',
		'./src/assets/**/*{js,jsx}',
		'./src/pages/**/**/*.{js,jsx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				heroBg: "url('assets/images/hero.jpg')",
			},
			spacing: {
				'512px': '32rem',
				'650px': '40.625rem',
			},
			dropShadow: {
				red: '-6px 8px 0 rgba(261, 0, 50, 1)',
			},
			minWidth: {
				'274px': '17.25rem',
				'420px': '26.25rem',
				'450px': '28.125rem',
			},
			maxWidth: {
				'261px': '261px',
				'512px': '32rem',
			},
		},
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
