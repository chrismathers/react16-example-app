export const SELECTION_CHANGED  = 'home/theme/theme-changed';
export const selectTheme = (selectedTheme) => {
    return {
        type: SELECTION_CHANGED,
        selectedTheme
    }
};