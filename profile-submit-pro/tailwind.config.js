/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./templates/**/*.php'
	],
	theme: {
		colors: {
			...require('tailwindcss/colors'),
			'wp-primary': '#2271b1',
			'wp-secondary': '#135e96',
			'wp-error': '#d63638'
		},
	},
	plugins: [
		require('@tailwindcss/forms')
	],
}
