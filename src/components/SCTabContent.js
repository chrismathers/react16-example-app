import React, {Component} from 'react'
import styled from "styled-components";

const StyledDiv = styled.div`
    background-color: transparent;
    margin: 0 auto;
`;

export default class SCTabContent extends Component {
    render() {
        const {...props} = this.props;
        return (
            <StyledDiv
                {...props}
            />
        )
    }
}