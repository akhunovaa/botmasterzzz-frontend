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
        axios({
            url: 'https://botmasterzzz.com/admin/bot/status',
            method: 'post',
            data: {
                access_token: localStorage.getItem('token')
            }
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
        axios({
            url: 'https://botmasterzzz.com/admin/bot/start',
            method: 'post',
            data: {
                access_token: localStorage.getItem('token')
            }
        }).then(result => {
            this.setState({
                create: result.data
            })
        }).catch(result => {
            console.log(result);
        })
    }

    botStop(){
        axios({
            url: 'https://botmasterzzz.com/admin/bot/stop',
            method: 'post',
            data: {
                access_token: localStorage.getItem('token')
            }
        }).then(result => {
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
                <h1>BOT error: {this.state.error}</h1>
                <h1>BOT running: {this.state.running}</h1>
                <button onClick={this.componentDidMount}>Status</button>
                <button onClick={this.botStart}>Start</button>
                <button onClick={this.botStop}>Stop</button>
            </div>
        );
    }
}

export default Protected;