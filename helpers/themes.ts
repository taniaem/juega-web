import { ThemeDefinition } from "vuetify";

// String that represents the name of the theme I am using
export const MAIN_THEME = "mainTheme";
// Light mode theme
export const mainTheme: ThemeDefinition = {
  dark: false,
  colors: {
    // background: "#FFFFFF",
    // surface: "#FFFFFF",
    // primary: "#4f46e5",
    // secondary: "#9333ea",
    // error: "#ef4444",
    // info: "#3b82f6",
    // success: "#22c55e",
    // warning: "#f59e0b",
    background: "#FFFFFF",
    primary: "#FF784F",
    secondary: "#313653",
    "primary--text": "#313653",
    "grey-shadows": "#EDEDED",
    error: "#B00020",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#DB9D47",
  },
};

// String that represents the name of the dark theme I am using
export const MAIN_DARK_THEME = "mainDarkTheme";
// Dark mode theme
export const mainDarkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    // background: "#0C111B",
    // surface: "#1f2937",
    // primary: "#6366f1",
    // secondary: "#9333ea",
    // error: "#ef4444",
    // info: "#3b82f6",
    // success: "#22c55e",
    // warning: "#f59e0b",
	background: "#FFFFFF",
    primary: "#FF784F",
    secondary: "#313653",
    "primary--text": "#313653",
    "grey-shadows": "#EDEDED",
    error: "#B00020",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#DB9D47",
  },
};
