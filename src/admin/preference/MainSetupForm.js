import React, { Component } from 'react';
import '../../feedback/Feedback.css';
import './MainSetupForm.css';
import Alert from "react-s-alert";
import Private from '../../img/padlock-7-32.jpg';
import Public from '../../img/padlock-5-32.jpg';
import {feedback} from '../../util/APIUtils';
import botm from '../../img/botmasterzzz.png';
import {TextArea, Button, Dropdown, Input, Image, Grid} from 'semantic-ui-react'

class MainSetupForm  extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            name: '',
            description: '',
            type: '',
            secret: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        const friendOptions = [
            {
                key: 'Публичный',
                text: 'Публичный',
                value: 'Публичный',
                image: { avatar: true, src: Public },
            },
            {
                key: 'Приватный',
                text: 'Приватный',
                value: 'Приватный',
                image: { avatar: true, src: Private },
            }
        ];

        return (
            <div className="main-form-container">
                        <form onSubmit={this.handleSubmit}>
                            <fieldset className="fieldsetx">
                                <legend className="legendmain">
                                    Основные настройки
                                </legend>
                                <Grid columns={2} textAlign="left">
                                <Grid.Column>
                                <ol className="olx">
                                    <li className="lix">
                                        <label className="labelx" form="name">Наименование бота</label>
                                        <Input className="inputx" type="text" id="name" name="name"
                                               placeholder="BotMasterzzz project" value={this.state.name} onChange={this.handleInputChange} required/>
                                    </li>
                                    <li className="lix">
                                        <label className="labelx" form="description">Описание</label>
                                        <TextArea className="text-area"
                                                  id="description" name="description" value={this.state.description} onChange={this.handleInputChange}/>
                                    </li>
                                    <li className="lix">
                                        <label className="labelx" form="type">Тип бота</label>
                                        <Dropdown placeholder='Тип бота' fluid selection id="type" name="type" options={friendOptions} defaultValue='Публичный'/>
                                    </li>
                                    <li className="lix">
                                        <label className="labelx" form="secret">Кодовое слово</label>
                                        <Input  className="inputx" id="secret" name="secret"
                                                value={this.state.secret} onChange={this.handleInputChange}/>
                                    </li>
                                    <Button color="vk" id="button" type="submit" className="setup-save">Сохранить</Button>
                                </ol>
                                    </Grid.Column>
                                    <Grid.Column verticalAlign='middle'>
                                        <Image className="field-logo" src={botm} size='medium' floated='right' circular />
                                    </Grid.Column>
                                </Grid>

                            </fieldset>
                        </form>
            </div>
        );
}

    handleSubmit(event) {
        event.preventDefault();

        const setupRequest = Object.assign({}, this.state);

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