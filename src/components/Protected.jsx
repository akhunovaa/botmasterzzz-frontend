import React from 'react';
import axios from "axios";

class Protected extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            msg: 'bot stopped'
        };
        this.updateMessage = this.updateMessage.bind(this);
        this.botStatus = this.botStatus.bind(this);
        this.botStart = this.botStart.bind(this);
        this.botStop = this.botStop.bind(this);
    }

    updateMessage() {
        this.setState({
            message: 'Добро пожаловать!'
    });
    }

    componentDidMount(){
        axios.get('/admin/bot/status', {
            params: {
                access_token: localStorage.getItem('token')
            }
        }).then(result => {
            this.setState({
                msg: result.data
            })
        }).catch(result => {
            console.log(result);
        });
    }

    botStatus(){
        axios.get('/admin/bot/status', {
            params: {
                access_token: localStorage.getItem('token')
            }
        }).then(result => {
            this.setState({
                msg: result.data
            })
        }).catch(result => {
            console.log(result);
        });
    }

    botStart(){
            axios.get('/admin/bot/start', {
                params: {
                    access_token: localStorage.getItem('token')
                }
            }).then(result => {
                this.setState({
                    msg: result.data
                })
            }).catch(result => {
                console.log(result);
            });
    }

    botStop(){
        axios.get('/admin/bot/stop', {
            params: {
                access_token: localStorage.getItem('token')
            }
        }).then(result => {
            this.setState({
                msg: result.data
            })
        }).catch(result => {
            console.log(result);
        });
    }

    render() {
        return (
            <div>
                <h1>BOT status: {this.msg}</h1>
                <h1>BOT start: {this.msg}</h1>
                <h1>BOT stop: {this.msg}</h1>
                <button onClick={this.botStatus}>Status</button>
                <button onClick={this.botStart}>Start</button>
                <button onClick={this.botStop}>Stop</button>
            </div>
        );
    }
}

export default Protected;