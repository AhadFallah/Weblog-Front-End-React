/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,jsx}"],

		  darkMode: "selector", // add this line
	theme: {

		extend: {
			colors:{
				"1a-black":"#1A1A1A"
			},
      fontSize: {
        '10xl': '12rem', // Custom font size
      }

		},
	},
	plugins: [],
};
