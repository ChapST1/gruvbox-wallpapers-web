/** @type {import('tailwindcss').Config} */

export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				// light
				bg: "#fbf1c7",
				"bg-accent": "#e9e0b2",

				red: "#cc241d",
				green: "#98971a",
				yellow: "#d79921",
				blue: "#458588",
				purple: "#b16286",
				aqua: "#689d6a",
				orange: "#d65d0e",
				"color-text": "#807568",
				border: "#d3c9a1",
				primary: "#e8e2af",

				// dark
				"bg-dark": "#1d2021",
				"bg-accent-dark": "#282828",
				"color-text-dark": "#a79c83",
				"border-dark": "#3c3836",

				"primary-dark": "#3c3836",

				// bg: "#f8f8c5",
				// "bg-dark": "#282828",

				// "title-color": "#3c3836",
				// "title-color-dark": "#e7dba8",

				// "paragraph-color": "#7c6f69",
				// "paragraph-color-dark": "#f8f8c5",

				// "border-color": "#555758",
			},
		},
	},
	darkMode: "selector",
	plugins: [],
};
//#f8f8c5
