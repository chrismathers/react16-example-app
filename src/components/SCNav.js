import React, {Component} from 'react';
import styled from "styled-components";
import {Nav, NavItem} from 'react-bootstrap';

const StyledBootstrapNav = styled(Nav)`
    &.nav {
      margin-bottom: 4em;
      padding-left: 0;
      list-style: none;
    }
    .nav > li {
      position: relative;
      display: block;
    }
    &.nav > li > a {
      padding: 15px;
    }
    .nav > li > a:hover,
    .nav > li > a:focus {
      text-decoration: none;
      background-color: ${props => props.theme.colors.navLiColor};
    }
    .nav > li.disabled > a {
      color: ${props => props.theme.colors.btnDefaultDisabledColor};
    }
    .nav > li.disabled > a:hover,
    .nav > li.disabled > a:focus {
      color: ${props => props.theme.colors.btnDefaultDisabledColor};
      text-decoration: none;
      background-color: transparent;
      cursor: not-allowed;
    }
    .nav .open > a,
    .nav .open > a:hover,
    .nav .open > a:focus {
      background-color: ${props => props.theme.colors.navLiColor};
    }
    .nav &.nav-divider {
      height: 1px;
      margin: 9px 0;
      overflow: hidden;
      background-color: ${props => props.theme.colors.bodyBorderColor};
    }
    .nav > li > a > img {
      max-width: none;
    }
    &.nav-tabs {
      border: none;
      font-weight: normal;
    }
    &.nav-tabs > li {
      float: left;
      margin-bottom: -1px;
      border-bottom: none;
      border-top: 1px solid ${props => props.theme.colors.bodyBorderColor};
    }
    &.nav-tabs > li:last-of-type {
      border-bottom: 1px solid ${props => props.theme.colors.bodyBorderColor};
    }
    
    &.nav-tabs > li > a {
      font-weight: normal;
      margin-right: 0;
      border-radius: 0;
      color: ${props => props.theme.colors.navItemColor};
    }
    &.nav-tabs > li > a:hover {
      border-color: transparent;
      border-radius: 0;
      color: ${props => props.theme.colors.navItemColorHover};
    }
    &.nav-tabs > li.active > a,
    &.nav-tabs > li.active > a:hover,
    &.nav-tabs > li.active > a:focus {
      color: ${props => props.theme.colors.navItemColorActive};
      background-color: ${props => props.theme.colors.navItemBgColorActive};
      border: none;
      border-radius: 0;
      font-weight: 500;
      margin-right: 0;
    }
`;

const StyledBootstrapNavItem = styled(NavItem)`
    width: 100%;
    font-size: 15px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    border: none;
    background-color: transparent;
    padding: 0;
    border-radius: 0;
    
    &:first-of-type {
      border: none;
    }
    &:first-of-type,
    &:last-of-type {
      border-radius: 0;
    }
    
    &.list-group-item {
      color: ${props => props.theme.colors.listColor};
    }
`;


export class SCNavItem extends Component {
    render() {
        const {...props} = this.props;
        return <StyledBootstrapNavItem {...props}/>
    }
}

export default class SCNav extends Component {
    render() {
        const {...props} = this.props;
        return (
            <StyledBootstrapNav
                {...props}
            />
        );
    }
}