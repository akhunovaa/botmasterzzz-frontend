import React from 'react';
import axios from "axios";

class Protected extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            status: 'bot stopped', create: '', stop: ''
        };
        this.updateMessage = this.updateMessage.bind(this);
    }

    updateMessage() {
        this.setState({
            message: 'Добро пожаловать!'
    });
    }

    componentDidMount(){
        const url = 'https://botmasterzzz.com/admin/bot/status';
            axios({
            url: url,
            method: 'get',
        }).then(result => {
            const parsedResponse = JSON.parse(JSON.stringify(result.data));
            this.setState({
                status: parsedResponse.status
            })
        }).catch(result => {
            console.log(result);
        })
    }

    botStart(){
        const url = 'https://botmasterzzz.com/admin/bot/start?access_token=' + localStorage.getItem('token');
        axios({
            url: url,
            method: 'get'
        }).then(result => {
            const parsedResponse = JSON.parse(JSON.stringify(result.data));
            console.log(result);
            console.log(result.data);
            console.log(parsedResponse);
            this.setState({
                create: result.data
            })
        }).catch(result => {
            console.log(result);
        })
    }

    botStop(){
        const url = 'https://botmasterzzz.com/admin/bot/stop?access_token=' + localStorage.getItem('token');
        axios({
            url: url,
            method: 'get'
        }).then(result => {
            const parsedResponse = JSON.parse(JSON.stringify(result.data));
            console.log(result);
            console.log(result.data);
            console.log(parsedResponse);
            this.setState({
                stop: result.data
            })
        }).catch(result => {
            console.log(result);
        })
    }

    render() {
        return (
            <div>
                <h1>BOT status: {this.state.status}</h1>
                <h1>BOT start: {this.state.start}</h1>
                <h1>BOT stop: {this.state.stop}</h1>
                <button onClick={this.componentDidMount}>Status</button>
                <button onClick={this.botStart}>Start</button>
                <button onClick={this.botStop}>Stop</button>
            </div>
        );
    }
}

export default Protected;