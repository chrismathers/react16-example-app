import React, {Component, component} from "react";

const axios = require('axios');

let instance = axios.create({
    baseURL: 'localhost:3000/data.json',
    timeout: 1000
});

export default class dataApi extends Component {
    state = {
        data: []
    };

    componentDidMount() {
        axios.get('http://localhost:3000/data.json')
            //.then(json => console.log('this be the json: ', json))
            .then(json => {
                this.setState({
                    data: json.data.starwars.characters
                })
            })
            .catch(function (error) {
                console.log("The Axios call returned this error: " + error)
            })
    }
    render() {
        return this.props.children(this.state);
    }
}