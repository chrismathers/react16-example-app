import React, { Component } from "react";
import PropTypes from 'prop-types'
import Tabs from "../components/Tabs";
import Characters from "../components/Characters";
import axios from "axios";
import SCTabContent from "../components/layout/SCTabContent";
import SCTitle from "../components/SCTitle";

export default class PeanutsPage extends Component {
    // not totally required for this class
    static propTypes = {
        currentTab: PropTypes.number,
        width: PropTypes.number,
        tabText: PropTypes.string,
        data: PropTypes.array
    };

    static defaultProps = {
        currentTab: 1,
        width: window.innerWidth,
        tabText: '',
        data: []
    };

    state = {
        currentTab: this.props.currentTab || 1,
        data: this.props.data
    };

    componentDidMount () {
        axios.get('https://chrismathers.github.io/react16-example-app/data.json')
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
                        {/*<IconCharlie />
                        <IconFranklin />
                        <IconLucy />
                        <IconSnoopy />*/}
                      </span>}
                </SCTabContent>
            </div>
        );
    }
}