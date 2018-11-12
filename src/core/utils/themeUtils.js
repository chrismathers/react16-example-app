import theme from "../../theme";

export const determineTheme = (themeName) => {
    switch (themeName) {
        case "dark":
            return theme.darkTheme;
        case "light":
        default:
            return theme.lightTheme;
    }
};

export const determineKey = (selectedTheme) => {
    switch (selectedTheme) {
        case "dark":
            return 2;
        case "light":
        default:
            return 1;
    }
};

export const determineValue = (selection) => {
    switch (selection) {
        case 1:
            return "light";
        case 2:
            return "dark";
        default:
            return "light";
    }
}