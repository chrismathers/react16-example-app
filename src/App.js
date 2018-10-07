import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import styled, { ThemeProvider, createGlobalStyle } from "styled-components"
import theme from "./theme.js"

import axios from 'axios'
import PropTypes from 'prop-types'
import IconC3po from './components/Icons/IconC3po.js'
import IconVader from './components/Icons/IconVader.js'
import IconBb8 from './components/Icons/IconBb8.js'
import IconFett from './components/Icons/IconFett.js'
import Characters from './components/Characters.js'
import Tabs from './components/Tabs.js'

const GlobalStyle = createGlobalStyle`
    body {
        margin: 20px;
        background-color: ${props => props.theme.colors.bodyBgColor};
        color: ${props => props.theme.colors.baseTextColor};
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }
    .flex-row {
          display: flex;
          flex-direction: row;
    }
    .flex-col {
          display: flex;
          flex-direction: column;
    }
    p {
        margin: 0;
    }
    svg {
        min-width: 48px;
    }
    ul {
        list-style: none;
    }
    .c_tabsSwitcher {
          min-width: 500px;
          max-width: 40%;
          margin: 0 auto;
    }
    
    .nav--is-hidden {
        display: none;
    }
    
    @media only screen and (max-width: 500px) {
        .c_tabsSwitcher {
            min-width: 210px;
            max-width: none;
            margin: 0;
        }
    }
`;

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

class App extends Component {
    // not totally required for this class
    static propTypes = {
        currentTab: PropTypes.number,
        width: PropTypes.number,
        goMobile: PropTypes.bool,
        tabText: PropTypes.string,
        characters: PropTypes.array
    }

    static defaultProps = {
        currentTab: 1,
        width: window.innerWidth,
        goMobile: false,
        tabText: '',
        characters: []
    }

    state = {
        currentTab: this.props.currentTab || 1
    }

    componentDidMount () {
        axios.get('data.json')
            .then(res => {
                this.setState({
                    characters: res.data
                })
            })
            .catch(function (error) {
                console.log("The Axios call returned this error: " + error)
            })
    }

    changeTab = tab => {
        this.setState({ currentTab: tab.id })
    }

    render () {

        const items = this.state.characters;

        return (
            <ThemeProvider theme={theme}>
                <React.Fragment>
                    <GlobalStyle/>
                    <div className='c_tabsSwitcher'>
                        <Tabs
                            currentTab={this.state.currentTab}
                            changeTab={this.changeTab}
                            data={items}
                        />
                        <SCTabContent>
                            {!this.state.goMobile
                                ? <Characters
                                    data={items}
                                    currentTab={this.state.currentTab}
                                />
                                : <span>
                                    <IconC3po />
                                    <IconVader />
                                    <IconBb8 />
                                    <IconFett />
                                </span>}
                        </SCTabContent>

                        <SCTitle>Default Theme</SCTitle>

                        <Tabs
                            currentTab={this.state.currentTab}
                            changeTab={this.changeTab}
                            data={items}
                            dark
                        />
                        <SCTabContent>
                            {!this.state.goMobile
                                ? <Characters
                                    dark
                                    data={items}
                                    currentTab={this.state.currentTab}
                                />
                                : <span>
                                    <IconC3po />
                                    <IconVader />
                                    <IconBb8 />
                                    <IconFett />
                                </span>}
                        </SCTabContent>

                        <SCTitle dark>Dark Theme</SCTitle>
                    </div>
                </React.Fragment>
            </ThemeProvider>
        )
    }
}


export default App;
