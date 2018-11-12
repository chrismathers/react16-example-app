import React, { Component } from "react";
import PropTypes from 'prop-types'
import Tabs from "../components/Tabs";
import Characters from "../components/Characters";
import IconC3po from "../components/Icons/IconC3po";
import IconVader from "../components/Icons/IconVader";
import IconBb8 from "../components/Icons/IconBb8";
import IconFett from "../components/Icons/IconFett";
import axios from "axios";
import SCTabContent from "../components/SCTabContent";
import SCTitle from "../components/SCTitle";

export default class PeanutsPage extends Component {
    // not totally required for this class
    static propTypes = {
        currentTab: PropTypes.number,
        width: PropTypes.number,
        goMobile: PropTypes.bool,
        tabText: PropTypes.string,
        data: PropTypes.array
    };

    static defaultProps = {
        currentTab: 1,
        width: window.innerWidth,
        goMobile: false,
        tabText: '',
        data: []
    };

    state = {
        currentTab: this.props.currentTab || 1,
        data: this.props.data
    };

    componentDidMount () {
        axios.get('data.json')
            .then(res => {
                this.setState({
                    data: res.data.peanuts.characters
                })
            })
            .catch(function (error) {
                console.log("The Axios call returned this error: " + error)
            })
    }

    changeTab = tab => {
        this.setState({ currentTab: tab.id })
    };

    render() {
        const data = this.state.data;
        return (
            <div className='c_tabsSwitcher'>
                <SCTitle>Peanuts</SCTitle>
                <Tabs
                    currentTab={this.state.currentTab}
                    changeTab={this.changeTab}
                    data={data}
                />
                <SCTabContent>
                {!this.state.goMobile
                    ? <Characters
                        page={data}
                        currentTab={this.state.currentTab}
                    />
                    : <span>
                        <IconC3po />
                        <IconVader />
                        <IconBb8 />
                        <IconFett />
                      </span>}
                </SCTabContent>
            </div>
        );
    }
}