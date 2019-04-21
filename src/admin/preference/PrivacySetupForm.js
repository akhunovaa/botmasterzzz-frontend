import React, { Component } from 'react';
import '../../feedback/Feedback.css';
import './PrivacySetupForm.css';
import Alert from "react-s-alert";
import {feedback} from '../../util/APIUtils';
import {TextArea, Button, Dropdown, Input, Image, Grid} from 'semantic-ui-react'

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
                                <Grid columns={1} width="seven" verticalAlign="left" stretched relaxed textAlign="left">
                                <Grid.Column >
                                <ol className="olx">
                                    <li className="lix">
                                        <Input className="inputx" type="text" id="name" name="name"
                                               placeholder="Логин пользователя" value={this.state.userLogin} onChange={this.handleInputChange} required/>
                                        <Button size="medium" fluid content='Выдать доступ' />
                                    </li>
                                    <li className="lix">
                                        <Input className="inputx" type="text" id="name" name="name"
                                               placeholder="Введите email для приглашения" value={this.state.name} onChange={this.handleInputChange} required/>
                                        <Button size="medium" fluid content='Пригласить' />
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