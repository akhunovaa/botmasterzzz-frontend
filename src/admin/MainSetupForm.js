import React, { Component } from 'react';
import '../feedback/Feedback.css';
import './MainSetupForm.css';
import Alert from "react-s-alert";
import {feedback, form} from '../util/APIUtils';
import { ReCaptcha } from 'react-recaptcha-google'
import {TextArea, Checkbox,  Dropdown} from 'semantic-ui-react'

class MainSetupForm  extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            name: '',
            description: '',
            type: 1,
            secret: '',
            start: '',
            stop: '',
            captchaToken: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
        this.verifyCallback = this.verifyCallback.bind(this);
    }


    componentDidMount() {
        if (this.captcha) {
            this.captcha.reset();
        }
    }
    onLoadRecaptcha() {
        if (this.captcha) {
            this.captcha.reset();
        }
    }

    verifyCallback(recaptchaToken) {
        this.setState({
            captchaToken : recaptchaToken
        })
    }

    render() {
        const options = [
            { key: 1, text: 'Публичный', value: 1 },
            { key: 2, text: 'Приватный', value: 2 }];

        return (
            <div className="main-form-container">
                <div className="main-form-content divTableBody">
                    <form onSubmit={this.handleSubmit}>
                        <div className="divTableRow form-item">
                            <div className="divTableCell">
                                <label form="name">Наименование бота</label>
                            </div>
                            <div className="divTableCell">
                                <input type="text" id="name" name="name"
                                                                 className="form-control"
                                       placeholder="BotMasterzzz project" value={this.state.name} onChange={this.handleInputChange} required/>
                            </div>
                        </div>
                        <div className="divTableRow form-item">
                            <div className="divTableCell"><label form="description">Описание</label></div>
                            <div className="divTableCell">
                                    <TextArea className="form-control" rows={1} placeholder='BotMasterzzz_project'
                                              id="description" name="description" value={this.state.description} onChange={this.handleInputChange}/>
                            </div>
                        </div>
                        <div className="divTableRow form-item">
                            <div className="divTableCell"><label form="type">Тип бота</label></div>
                            <div className="divTableCell">
                                <Dropdown className="form-control" id="type" name="type" value={this.state.type}
                                          onChange={this.handleInputChange} clearable options={options} selection />
                            </div>
                        </div>
                        <div className="divTableRow form-item">
                            <div className="divTableCell"><label form="secret">Кодовое слово</label>
                            </div>
                            <div className="divTableCell">
                                <input type="text" id="secret" name="secret"
                                       className="form-control"
                                value={this.state.secret} onChange={this.handleInputChange} required/>
                            </div>
                        </div>

                        <div className="divTableRow form-item">
                            <div className="divTableCell"><label form="start">Действие</label>
                            </div>
                            <div className="divTableCell">
                                <Checkbox className="form-control" label='Приостановить' id="stop" name="stop"
                                          value={this.state.start} onChange={this.handleInputChange}/>
                                <Checkbox className="form-control" label='Запустить' id="start" name="start"
                                          value={this.state.stop} onChange={this.handleInputChange}/>
                            </div>
                        </div>
                    </form>
                        <div className="form-item">
                            <ReCaptcha
                                ref={(el) => {this.captcha = el;}}
                                size="normal"
                                data-theme="light"
                                render="explicit"
                                sitekey="6LeulZwUAAAAAA07OHdhKen90gZauyUDCBe8GDEn"
                                onloadCallback={this.onLoadRecaptcha}
                                verifyCallback={this.verifyCallback}
                                hl="ru"
                            />
                        </div>
                        <div className="form-item">
                            <button id="button" type="submit" className="btn confirm-button btn-primary">Отправить</button>
                        </div>

                </div>
            </div>
        );
                        }

    handleSubmit(event) {
        event.preventDefault();

        const setupRequest = Object.assign({}, this.state);
        if (setupRequest.name.length >= 3000){
            Alert.warning('Наименование для сохраняемого бота слишком длинное.');
        }

        if (setupRequest.captchaToken !== ""){
            feedback(setupRequest).then(response => {
                Alert.success("Настройки для бота удачно сохранены'" + response.message + "'");
                this.onLoadRecaptcha();
                this.props.history.push("/tools");
            }).catch(error => {
                Alert.error((error && error.message) || 'Что-то пошло не так! Попробуйте заново.');
            });
        }
    }


    handleInputChange(event) {
        const target = event.target;
        const inputName = target.name;
        const inputValue = target.value;

        this.setState({
            [inputName] : inputValue
        });
    }
}

export default MainSetupForm