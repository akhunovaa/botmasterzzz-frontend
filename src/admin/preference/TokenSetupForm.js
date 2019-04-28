import React, { Component } from 'react';
import './TokenSetupForm.css';
import {Button, Input, Grid} from 'semantic-ui-react'

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