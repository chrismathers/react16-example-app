import React from 'react'
import styled from 'styled-components'

const SCTabItem = styled.li`
  background-color: ${props => (props.isCurrent 
        ? props => props.theme.colors.panelColor
        : props.theme.colors.tabColor
    )};
  border-top-left-radius: ${props => props.theme.units.tabBorderRadius};
  border-top-right-radius: ${props => props.theme.units.tabBorderRadius};
  padding: 8px 8px 5px 8px;
  margin-left: 1px;
  color: ${props => (props.isCurrent ? props.theme.colors.tabSelectedTextColor : props.theme.colors.tabTextColor)};
  font-weight: bold;
`

export default class Tab extends React.Component {
    constructor (props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick (e) {
        e.preventDefault()
        this.props.handleClick()
    }

    render () {
        return (
            <SCTabItem
                aria-controls={'panel-' + this.props.id}
                aria-selected='true'
                role='tab'
                isCurrent={this.props.isCurrent}
                //dark={this.props.dark}
            >
                <span onClick={this.handleClick}>
                    {this.props.name}
                </span>
            </SCTabItem>
        )
    }
}