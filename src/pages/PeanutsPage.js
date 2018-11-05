import React, { Component } from "react";
import PropTypes from 'prop-types'
import Tabs from "../components/Tabs";
import Characters from "../components/Characters";
import IconC3po from "../components/Icons/IconC3po";
import IconVader from "../components/Icons/IconVader";
import IconBb8 from "../components/Icons/IconBb8";
import IconFett from "../components/Icons/IconFett";
import styled from "styled-components";
import axios from "axios";

const SCTabContent = styled.div`
    background-color: transparent;
    margin: 0 auto;
`

const SCTitle = styled.h4`
    line-height: 2em;
    margin: 0 0 2em 0;
    display: inline-block;
    color: ${ props => props.dark ? props.theme.colors.panelColorDark : props.theme.colors.panelColor };
`

export default class StarWarsPage extends Component {
    // not totally required for this class
    static propTypes = {
        currentTab: PropTypes.number,
        width: PropTypes.number,
        goMobile: PropTypes.bool,
        tabText: PropTypes.string,
        data: PropTypes.array
    }

    static defaultProps = {
        currentTab: 1,
        width: window.innerWidth,
        goMobile: false,
        tabText: '',
        data: []
    }

    state = {
        currentTab: this.props.currentTab || 1,
        selectedTheme: "light",
        data: this.props.data
    }

    componentDidMount () {
        axios.get('data.json')
            .then(res => {
                this.setState({
                    data: res.data.peanuts.characters
                })
            })
            .catch(function (error) {
                console.log("The Axios call returned this error: " + error)
            })
    }

    changeTab = tab => {
        this.setState({ currentTab: tab.id })
    }

    render() {

        const {...props} = this.props;

        let current = this.props.currentTab;
        let themeColor = this.props.dark;

        const data = this.state.data;

        return (
            <div className='c_tabsSwitcher'>

                <SCTitle>Peanuts</SCTitle>

                <Tabs
                    currentTab={this.state.currentTab}
                    changeTab={this.changeTab}
                    data={data}
                />
                <SCTabContent>
                    {!this.state.goMobile
                        ? <Characters
                            page={data}
                            currentTab={this.state.currentTab}
                        />
                        : <span>
                                <IconC3po />
                                <IconVader />
                                <IconBb8 />
                                <IconFett />
                            </span>}
                </SCTabContent>

            </div>
        );
    }
}