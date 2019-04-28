import React, { Component } from 'react';
import './TokenSetupForm.css';
import {Button, Input, Grid} from 'semantic-ui-react'
import Alert from "react-s-alert";
import {feedback} from "../../util/APIUtils";

class TokenSetupForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            token: ''
        };


        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    render() {
        return (
            <div className="token-form-container">
                <fieldset className="fieldset-token-container">
                    <legend className="legend-token-container">
                        Настройка токена
                    </legend>
                    <label className="bottom-text">Установить токен для бота</label>
                    <Grid textAlign="left">
                        <Grid.Column >
                            <ol className="olp">
                                <li className="lip">
                                    <form onSubmit={this.handleSubmit}>
                                        <Input className="inputp" type="text" id="token" name="token"
                                               placeholder="Токен" value={this.state.token} onChange={this.handleInputChange} required/>
                                            <Button color='vk' content="Применить" onClick={this.handleCancel}/>
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

export default TokenSetupForm