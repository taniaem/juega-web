import { ThemeDefinition } from "vuetify";

// String that represents the name of the theme I am using
export const MAIN_THEME = "mainTheme";
// Light mode theme
export const mainTheme: ThemeDefinition = {
	dark: false,
	colors: {
		background: "#FBFBFB",
		surface: "#FFFFFF",
		primary: "#313653",
		secondary: "#1DA5C1",
		tertiary: "#F9DB6D",
		"primary--text": "#313653",
		"light--text": "#FF5A5A",
		"grey-shadows": "#EDEDED",		
		error: "#FF5A5A",
		info: "#2196F3",
		success: "#07B028",
		warning: "#F9DB6D",
	},
};

// String that represents the name of the dark theme I am using
export const MAIN_DARK_THEME = "mainDarkTheme";
// Dark mode theme
export const mainDarkTheme: ThemeDefinition = {
	dark: true,
	colors: {
		background: "#FBFBFB",
		surface: "#FFFFFF",
		primary: "#313653",
		secondary: "#1DA5C1",
		tertiary: "#F9DB6D",
		"primary--text": "#313653",
		"light--text": "#FF5A5A",
		"grey-shadows": "#EDEDED",		
		error: "#FF5A5A",
		info: "#2196F3",
		success: "#07B028",
		warning: "#F9DB6D",
	},
};
