import React, { Component } from "react";
import PropTypes from 'prop-types'
import Tabs from "../components/Tabs";
import Characters from "../components/Characters";
import axios from "axios";
import SCTitle from "../components/SCTitle";
import SCTabContent from "../components/layout/SCTabContent";

export default class StarWarsPage extends Component {
    // not totally required for this class
    static propTypes = {
        currentTab: PropTypes.number,
        width: PropTypes.number,
        goMobile: PropTypes.bool,
        starwars: PropTypes.array,
        data: PropTypes.array
    };

    static defaultProps = {
        currentTab: 1,
        width: window.innerWidth,
        goMobile: false,
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
                    data: res.data.starwars.characters
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
                <SCTitle>Star Wars</SCTitle>
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
                        {/*<IconC3po />
                        <IconVader />
                        <IconBb8 />
                        <IconFett />*/}
                      </span>}
                </SCTabContent>
            </div>
        );
    }
}