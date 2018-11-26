import React, {Component} from 'react'
import styled from "styled-components";

const StyledDiv = styled.div`
  border-left: 1px solid ${props => props.theme.colors.leftNavBorderColor};
  border-right: 1px solid ${props => props.theme.colors.leftNavBorderColor};
`;

export default class SCLeftNav extends Component {
    render() {
        const {...props} = this.props;
        return (
            <StyledDiv
                {...props}
            />
        )
    }
}