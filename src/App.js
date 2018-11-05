import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import StarWarsPage from "./pages/StarWarsPage";
import PeanutsPage from "./pages/PeanutsPage";
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

class App extends Component {
    render () {
        return (
            <ThemeProvider theme={theme}>
                <Router>
                    <React.Fragment>
                        <GlobalStyle/>
                        <Route exact path="/" component={StarWarsPage} />
                        <Route exact path="/starwars" component={StarWarsPage} />
                        <Route path="/peanuts" component={PeanutsPage} />
                    </React.Fragment>
                </Router>
            </ThemeProvider>
        )
    }
}


export default App;
