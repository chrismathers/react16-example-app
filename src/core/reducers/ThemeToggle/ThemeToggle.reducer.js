import { SELECTION_CHANGED } from "../../actions/ThemeToggle/ThemeToggle.actions";

export const INITIAL_STATE = {
    selectedTheme: undefined
};

function themeToggleReducer(state = INITIAL_STATE, action) {
    switch(action.type) {

        case SELECTION_CHANGED: {
            return {
                ...state,
                selectedTheme: action.selectedTheme
            }
        }

        default : return state;
    }
}

export default themeToggleReducer