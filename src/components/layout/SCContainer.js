import React, {Component} from 'react'
import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: ${props => props.theme.colors.leftNavColor};
  max-width: 80%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 auto;
`;

export default class SCContainer extends Component {
    render() {
        const {...props} = this.props;
        return (
            <StyledDiv
                {...props}
            />
        )
    }
}