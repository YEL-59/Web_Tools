const plugin = require('tailwindcss/plugin');
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				background: "url('/src/assets/background/bg.jpg')",
				loginBg: "url('/src/assets/background/loginbg.jpg')",
				footerBg: "url('/src/assets/background/footerbg.jpg')",
				homeBg: "url('/src/assets/background/homebg.jpg')",
				forgetBg: "url('/src/assets/background/download.jpg')",
			},
			fontSize: {
				xsm: '.8rem',
			},
			colors: {
				primary: '#523970',
				danger: '	#DC3545',
			},
		},
	},
	plugins: [
		plugin(({ addVariant, e }) => {
			addVariant('sidebar-expanded', ({ modifySelectors, separator }) => {
				modifySelectors(({ className }) => `.sidebar-expanded .${e(`sidebar-expanded${separator}${className}`)}`);
			});
		}),
	],
};
