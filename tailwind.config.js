module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			width: {
				'max': '81.846%',
				'w-input': '500px',
			},
			height: {
				'max2': '768px',
				'h-header': '72px',
			},
			fontSize: {
				'fontsizeForMainText': '22px',
			},
			colors: {
				'fon': '#F9F9F9',
				'fon-Header': '#0064EB',
				'fon-text': '#808080',
			},
			borderRadius: {
				'borderSearch': '6px',
			},
			spacing: {
				'center': '0 auto',
			},
			backgroundImage: {
				'searchIcon': "url('/src/images/image.png')",
			},

			backgroundPosition: {
				'bgpositionsearchInput': 'bottom 50% right 96.2%',
			},
		},
	},
	plugins: [],
}
