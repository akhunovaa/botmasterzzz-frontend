import React from 'react';
import axios from "axios";

class Protected extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            msg: 'bot stopped'
        };
        this.updateMessage = this.updateMessage.bind(this);
    }

    updateMessage() {
        this.setState({
            message: 'Добро пожаловать!'
    });
    }

    componentDidMount(){
        let url = 'https://botmasterzzz.com/admin/bot/status';
            axios({
            url: url,
            method: 'get',
        }).then(result => {
            const parsedResponse = JSON.parse(JSON.stringify(result.data));
            this.setState({
                msg: parsedResponse
            })
        }).catch(result => {
            console.log(result);
        })
    }

    botStatus(){
        let url = 'https://botmasterzzz.com/admin/bot/status';
            axios({
            url: url,
            method: 'get',
        }).then(result => {
            const parsedResponse = JSON.parse(JSON.stringify(result.data));
            this.setState({
                msg: parsedResponse
            })
        }).catch(result => {
            console.log(result);
        })
    }

    botStart(){
        let url = 'https://botmasterzzz.com/admin/bot/start?access_token=' + localStorage.getItem('token');
        axios({
            url: url,
            method: 'get'
        }).then(result => {
            const parsedResponse = JSON.parse(JSON.stringify(result.data));
            this.setState({
                msg: parsedResponse
            })
        }).catch(result => {
            console.log(result);
        })
    }

    botStop(){
        let url = 'https://botmasterzzz.com/admin/bot/stop?access_token=' + localStorage.getItem('token');
        axios({
            url: url,
            method: 'get'
        }).then(result => {
            this.setState({
                msg: result.data
            })
        }).catch(result => {
            console.log(result);
        })
    }

    render() {
        return (
            <div>
                <h1>BOT status: {this.msg.status}</h1>
                <h1>BOT start: {this.msg.status}</h1>
                <h1>BOT stop: {this.msg.status}</h1>
                <button onClick={this.botStatus}>Status</button>
                <button onClick={this.botStart}>Start</button>
                <button onClick={this.botStop}>Stop</button>
            </div>
        );
    }
}

export default Protected;