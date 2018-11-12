import { combineReducers } from 'redux';
import leftNavigationReducer from "./LeftNavigation/LeftNavigation.reducer";
import themeToggleReducer from "./ThemeToggle/ThemeToggle.reducer";

const rootReducer = combineReducers({
    leftNavigationState: leftNavigationReducer,
    themeState: themeToggleReducer
});

export default rootReducer;


