import React, {Component} from 'react'
import {
    ToggleButtonGroup,
    ToggleButton
} from 'react-bootstrap';
import styled from 'styled-components';

import {
    selectTheme
} from "../core/actions/ThemeToggle/ThemeToggle.actions";

import {compose} from "recompose";
import connect from "react-redux/es/connect/connect";

const SCToggleButtonGroup = styled(ToggleButtonGroup)`
    padding-top: 25px;
    margin: 15px 15px 30px;
    display: flex;
    justify-content: center;
`;

export class SLThemeSelectorButton extends Component {

    handleChange = (selection) => {
        this.props.selectTheme(selection);
    };

    render() {
        const {
            selectedTheme
        } = this.props;

        return <SCToggleButtonGroup
            name="themeSelectorToggle"
            type="radio"
            value={selectedTheme}
            onChange={this.handleChange}
        >
            <ToggleButton value={1}>Light Theme</ToggleButton>
            <ToggleButton value={2}>Dark Theme</ToggleButton>
        </SCToggleButtonGroup>
    }
}

const mapStateToProps = (state) => ({
    selectedTheme: state.themeState.selectedTheme
});

const mapDispatchToProps = (dispatch) => ({
    selectTheme: selection => dispatch(selectTheme(selection)),
});

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(SLThemeSelectorButton);