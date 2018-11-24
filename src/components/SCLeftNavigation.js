import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from "recompose";
import { selectItem } from "../core/actions/LeftNavigation/LeftNavigation.actions";
import SCNav, {SCNavItem} from "./SCNav";

export class SCLeftNavigation extends Component {

    render() {

        const {
            selectedItem,
            navItems
        } = this.props;

        const onNavItemClick = (item) => {
            this.props.selectItem(item);
            this.props.history.push(item.route);
        };

        const getActiveKey = selectedItem => navItems.find( item => item.id === selectedItem.id );

        let stacked = this.props.stacked;

        return (
            <SCNav
                bsStyle="tabs"
                activeKey={getActiveKey(selectedItem||navItems[0])}
                stacked={stacked}
            >
                {navItems.map(item => <SCNavItem key={item.id} eventKey={item} onSelect={onNavItemClick}>{item.label}</SCNavItem>)}
            </SCNav>
        )
    }
}

const mapStateToProps = (state) => ({
    selectedItem: state.leftNavigationState.selectedItem
});

const mapDispatchToProps = (dispatch) => ({
    selectItem: item => dispatch(selectItem(item)),
});

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(SCLeftNavigation);