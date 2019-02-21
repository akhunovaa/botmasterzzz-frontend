import React from 'react';
import axios from "axios";

class Protected extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message: 'my friend (from state)!'
    };
        this.updateMessage = this.updateMessage.bind(this);
    }

    updateMessage() {
        this.setState({
            message: 'my friend (from changed state)!'
    });
    }

    componentDidMount(){
        axios({
            url: 'https://botmasterzzz.com/admin/bot/status',
            method: 'post',
            data: {
                access_token: localStorage.getItem('token')
            }
        }).then(result => {
            const parsedResponse = JSON.parse(JSON.stringify(result.data));
            console.log(parsedResponse);
        }).catch(result => {
            console.log(result);
        })
    }

    render() {
        return (
            <div>
                <h1>Hello {this.state.message}!</h1>
                <button onClick={this.componentDidMount}>Status</button>
            </div>
        );
    }
}

export default Protected;