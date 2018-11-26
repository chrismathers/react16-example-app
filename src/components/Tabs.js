import React from 'react'
import PropTypes from 'prop-types';

import Tab from '../components/Tab.js'
import styled from 'styled-components'

const SCTabList = styled.ul`
    display: flex;
    flex-direction: row;
    margin: 0 3px -1px 3px;
      
    @media only screen and (max-width: 500px) {
        font-size: 12px;
        padding: 0 14px;
        max-width: none;
        width: 100%;
    }
`

export default class Tabs extends React.Component {
    static propTypes = {
        data: PropTypes.array
    };

    static defaultProps = {
        data: []
    };

    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick (tab) {
        console.log("tab ", tab);
        this.props.changeTab(tab)
    }

    render () {
        const {...props} = this.props;
        return (
            <SCTabList role='tablist'>
                {this.props.data.map(
                    function (tab) {
                        return (
                            <Tab
                                key={tab.id}
                                handleClick={this.handleClick.bind(this, tab)}
                                name={tab.name}
                                isCurrent={props.currentTab === tab.id}
                            />
                        )
                    }.bind(this)
                )}
            </SCTabList>
        )
    }
}