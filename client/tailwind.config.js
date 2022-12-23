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
			screens: {
				'x-md': '800px',
				'x-sm': '340px',
			},
			backgroundImage: {
				heroBg: "url('assets/images/hero.jpg')",
				bulletsBg: "url('assets/images/bullets-bg.png')",
				bulletsBgFaded: "url('assets/images/bullets-bg-faded.png')",
				authBg: "url('assets/images/auth-bg.png')",
			},
			backgroundColor: {
				transparent: 'transparent',
			},
			spacing: {
				'512px': '32rem',
				'650px': '40.625rem',
			},
			dropShadow: {
				red: '-6px 8px 0 rgba(261, 0, 50, 1)',
			},
			width: {
				116: '29rem',
			},
			minWidth: {
				92: '23rem',
				'274px': '17.25rem',
				'320px': '20rem',
				'450px': '28.125rem',
			},
			maxWidth: {
				'215px': '13.5rem',
				'261px': '261px',
				'330px': '20.5rem',
				'512px': '32rem',
			},
			maxHeight: {
				'420px': '26.125rem',
				'496px': '31rem',
				'656px': '41rem',
			},
			borderRadius: {
				xLarge: '2.5rem',
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
			gold: '#E5C100',
		},
		fontFamily: {
			poppins: ['Poppins'],
			anton: ['Anton'],
		},
	},
	plugins: [],
}
