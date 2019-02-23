import React from 'react';
import axios from "axios";

class Protected extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
                status: 'unknown',
                error: false,
                running: false
        };
        this.botStatus = this.botStatus.bind(this)
        this.botStart = this.botStart.bind(this)
        this.botStop = this.botStop.bind(this)
    }

    componentDidMount(){
        axios.get('/admin/bot/status', {
            params: {
                access_token: localStorage.getItem('token')
            }
        }).then(result => {
            this.setState({
                status: result.data.status,
                error: result.data.hasError,
                running: result.data.running,
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
            this.setState({msg: result.data})
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
                    status: result.data.status,
                    error: result.data.hasError,
                    running: result.data.running,
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
                status: result.data.status,
                error: result.data.hasError,
                running: result.data.running,
            })
        }).catch(result => {
            console.log(result);
        });
    }

    render () {
        return (
            <div className='button__container'>
                <button className='button_status' onClick={this.botStatus}>
                    BOT Status
                </button>
                <button className='button_start' onClick={this.botStart}>
                    BOT Start
                </button>
                <button className='button_stop' onClick={this.botStop}>
                    BOT Stop
                </button>
                <h3>Статус бота: {this.state.status}</h3>
                <h3>Ошибки бота: {this.state.hasError}</h3>
                <h3>Запущен бот: {this.state.running}</h3>
            </div>
        )
    }
}

export default Protected;