import React, {Component} from 'react'
import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: ${props => props.theme.colors.rightPanelColor};
  padding-top: 40px;
  width: 100%;
  
`;

export default class SCContent extends Component {
    render() {
        const {...props} = this.props;
        return (
            <StyledDiv
                {...props}
            />
        )
    }
}