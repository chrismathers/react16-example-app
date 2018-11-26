import React, {Component} from 'react'
import styled from "styled-components";

const StyledH4 = styled.h4`
    line-height: 2em;
    margin: 0 0 2em 0;
    display: inline-block;
    color: ${props => props.theme.colors.H4Color};
`;

export default class SCTitle extends Component {
    render() {
        const {...props} = this.props;
        return (
            <StyledH4
                {...props}
            />
        )
    }
}