import { SELECTION_CHANGED } from "../../actions/LeftNavigation/LeftNavigation.actions";
import * as routes from "../../../core/constants/routes";


export const INITIAL_STATE = {
    selectedItem: undefined,
    navItems: [
        {id: 1, route: routes.STARWARS,   label: 'Star Wars'},
        {id: 2, route: routes.PEANUTS,  label: 'Peanuts'}
    ]
};

function leftNavigationReducer(state = INITIAL_STATE, action) {
    switch(action.type) {

        case SELECTION_CHANGED: {
            return {
                ...state,
                selectedItem: action.selectedItem
            }
        }

        default : return state;
    }
}

export default leftNavigationReducer