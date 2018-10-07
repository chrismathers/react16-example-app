import React from 'react'
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from "styled-components"
import theme from "../theme.js"

import IconC3po from './Icons/IconC3po.js';
import IconVader from './Icons/IconVader.js';
import IconBb8 from './Icons/IconBb8.js';
import IconFett from './Icons/IconFett.js';

const SCPanel = styled.div`
    display: flex;
    flex-direction: row;
    padding: 14px;
    border-radius: ${props => props.theme.units.panelBorderRadius};
    background-color: ${ props => props.dark ? props.theme.colors.panelColorDark : props.theme.colors.panelColor };
  
    @media only screen and (max-width: 500px) {
        font-size: 13px;
        max-width: none;
        padding: 10px;
        border-radius: 9px;
    }
`

const SCText = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 12px;
`

const SCTitle = styled.h3`
    margin: 0;
`

class Characters extends React.Component {
    // not totally required for this class
    static propTypes = {
        data: PropTypes.array
    }

    static defaultProps = {
        data: []
    }

    state = {
        data: this.props.data || []
    }

   render () {

        let current = this.props.currentTab;
        let themeColor = this.props.dark;

        const characterIcon = (id) => ({
           "1": <IconC3po />,
           "2": <IconVader />,
           "3": <IconBb8 />,
           "4": <IconFett />
        })[id]

        const characterDetails = this.props.data.map(function (character) {
             if (character.id === current) {
                return (
                    <SCPanel
                        key={character.id}
                        dark={themeColor}
                    >
                        {characterIcon(character.id)}
                        <SCText className='m_tabpanel_text' key={character.id}>
                            <SCTitle>{character.name}</SCTitle>
                            <p>{character.description}</p>
                        </SCText>
                    </SCPanel>
                )
            }
        })


        return (
            <ThemeProvider theme={theme}>
                <React.Fragment>
                    {characterDetails}
                </React.Fragment>
            </ThemeProvider>
        )
    }
}

export default Characters;