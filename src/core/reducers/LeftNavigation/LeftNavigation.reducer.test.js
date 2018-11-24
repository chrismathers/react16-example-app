import { expect } from 'chai';
import * as actions from '../../actions/LeftNavigation/LeftNavigation.actions';
import { INITIAL_STATE } from "./LeftNavigation.reducer";
import leftNavigationReducer from "./LeftNavigation.reducer";
import * as routes from "../../../core/constants/routes";
describe('leftNavigationReducer', () => {
    it('should return the initial state', () => {
        expect(leftNavigationReducer(undefined, {})).to.eql(
            INITIAL_STATE
        )
    });
    it('should handle SELECTION_CHANGED', () => {
        const selectedItem = {id: 2, route: routes.PEANUTS, label: 'Peanuts'};
        expect(leftNavigationReducer(INITIAL_STATE, {
            type: actions.SELECTION_CHANGED,
            selectedItem
        })).to.eql({
            ...INITIAL_STATE,
            selectedItem
        })
    });
});