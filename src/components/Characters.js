import React from 'react'
import PropTypes from 'prop-types';
import styled from "styled-components"

const SCPanel = styled.div`
    display: flex;
    flex-direction: row;
    padding: 14px;
    border: 1px solid ${props => props.theme.colors.panelBorderColor};
    border-radius: ${props => props.theme.units.panelBorderRadius};
    background-color: ${props => props.theme.colors.panelColor};
    
    img {
       max-height: 72px;
    }
  
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
    constructor(props) {
        super(props);
        this.state = {
            starwars: null,
            peanuts: null,
            characters: null
        }
    }

    // not totally required for this class
    static propTypes = {
        starwars: PropTypes.array,
        peanuts: PropTypes.array,
        characters: PropTypes.array
    };

    static defaultProps = {
        starwarspage: '',
        peanutspage: ''
    };

   render () {

        const {...props} = this.props;
        let current = props.currentTab;
        const page = props.page;

        const characterDetails = page.map((character) => {
            if (character.id === current) {
                return <SCPanel
                        key={character.id}
                    >
                        <img src={require("./Icons/" + character.icon)} alt={character.icon} />
                        <SCText className='m_tabpanel_text' key={character.id}>
                            <SCTitle>{character.name}</SCTitle>
                            <p>{character.description}</p>
                        </SCText>
                    </SCPanel>
            } else {
                return null;
            }
        });

        return (
                <React.Fragment>
                   {characterDetails}
                </React.Fragment>
        )
    }
}

export default Characters;