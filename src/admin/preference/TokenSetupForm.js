import React, { Component } from 'react';
import './TokenSetupForm.css';
import {Button, Input, Grid} from 'semantic-ui-react'
import {projectTokenUpdate} from "../../util/APIUtils";
import Alert from "react-s-alert";

class TokenSetupForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            project: props.project,
            token: props.project.token ? props.project.token : ''
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
                                               placeholder="Токен" defaultValue={this.state.token} required/>
                                            <Button color='vk' content="Применить"/>
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
        const data = new FormData(event.target);
        const token = data.get('token');
        const projectDataRequest = Object.assign({}, {id: this.state.project.id, 'token' : token});

        projectTokenUpdate(projectDataRequest)
            .then(response => {
                if (response.error) {
                    Alert.warning(response.error + '. Необходимо заново авторизоваться.');
                }else if (response.success === false) {
                    Alert.warning(response.message);
                } else {
                    Alert.success('Данные успешно сохранены');
                }
            }).catch(error => {
            Alert.error('Что-то пошло не так! Попробуйте заново.' || (error && error.message));
        });
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