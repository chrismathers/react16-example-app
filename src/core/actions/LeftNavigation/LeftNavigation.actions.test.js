import { expect } from 'chai';
import * as actions from './LeftNavigation.actions';
import * as routes from "../../../core/constants/routes";
describe('actions', () => {
    it('should create a SELECTION_CHANGED action when calling selectItem', () => {
        const selectedItem = {id: 2, route: routes.PEANUT, label: 'Peanuts'};
        const expectedAction = {
            type: actions.SELECTION_CHANGED,
            selectedItem
        };
        expect(actions.selectItem(selectedItem)).to.eql(expectedAction);
    });
});

