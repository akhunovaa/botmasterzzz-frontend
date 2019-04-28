import React, { Component } from 'react';
import './PrivacySetupForm.css';

import Alert from "react-s-alert";
import {feedback} from '../../util/APIUtils';
import {Button, Input, Grid} from 'semantic-ui-react'

class PrivacySetupForm extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            userLogin: '',
            userMail: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {

        return (
            <div className="privacy-form-container">
                            <fieldset className="fieldsetx">
                                <legend className="legendprivacy">
                                    Настройки доступа
                                </legend>
                                <label className="bottom-text">Проект доступен для</label>
                                <Grid textAlign="left">
                                <Grid.Column >
                                <ol className="olp">
                                    <li className="lip">
                                        <form onSubmit={this.handleSubmit}>
                                        <Input className="inputp" type="text" id="userLogin" name="userLogin"
                                               placeholder="Логин пользователя" value={this.state.userLogin} onChange={this.handleInputChange} required/>
                                        <Button.Group className="privacy-apply">
                                            <Button color="vk">Выдать доступ</Button>
                                            <Button.Or className="privacy-apply" text="or"/>
                                            <Button color="red">Запретить доступ</Button>
                                        </Button.Group>
                                        </form>
                                    </li>
                                    <li>
                                        <label className="bottom-text inner">Пользователь не зарегистрирован?</label>
                                    </li>
                                    <li className="lip">
                                        <form onSubmit={this.handleSubmit}>
                                        <Input className="inputp" type="email" id="userMail" name="userMail"
                                               placeholder="Введите email для приглашения" value={this.state.name} onChange={this.handleInputChange} required/>
                                        <Button color="vk" className="invite-submit" content='Пригласить' />
                                        </form>
                                    </li>
                                </ol>
                                    </Grid.Column>
                                </Grid>

                            </fieldset>
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

export default PrivacySetupForm