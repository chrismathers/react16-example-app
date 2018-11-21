import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import StarWarsPage from "./pages/StarWarsPage";
import PeanutsPage from "./pages/PeanutsPage";
import './App.css';

import styled, { ThemeProvider, createGlobalStyle } from "styled-components"
import SCLeftNavigation from "./components/SCLeftNavigation";
import * as routes from "./core/constants/routes";
import {determineTheme, determineValue} from "./core/utils/themeUtils";
import {connect} from "react-redux";
import SLThemeSelectorButton from "./components/SCThemeSelectorButton";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0 auto;
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

const Left = styled.div`
  background-color: ghostwhite;
  max-width: 80%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 auto;
`;

const Right = styled.div`
  background-color: dimgray;
  padding-top: 40px;
  width: 100%;
`;

class App extends Component {

    render () {
        const navItems = [
            {id: 1, route: routes.STARWARS,   label: 'Star Wars'},
            {id: 2, route: routes.PEANUTS,  label: 'Peanuts'}
        ];

        const { selectedTheme } = this.props;
        const theme = determineTheme(determineValue(selectedTheme));

        return (
            <ThemeProvider theme={theme}>
                <Router>
                    <React.Fragment>
                        <GlobalStyle/>
                        <Left>
                            <div>
                                <SLThemeSelectorButton />
                                <SCLeftNavigation stacked navItems={navItems} />
                            </div>
                            <Right>
                                <Route exact path="/" component={StarWarsPage} />
                                <Route path="/starwars" component={StarWarsPage} />
                                <Route path="/peanuts" component={PeanutsPage} />
                            </Right>
                        </Left>
                    </React.Fragment>
                </Router>
            </ThemeProvider>
        )
    }
}


//export default App;

const mapStateToProps = (state) => ({
    selectedTheme: state.themeState.selectedTheme
});

const mapDispatchToProps = () => ({});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
