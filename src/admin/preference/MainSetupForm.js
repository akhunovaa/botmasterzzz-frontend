import React, { Component } from 'react';
import '../../feedback/Feedback.css';
import './MainSetupForm.css';
import Private from '../../img/padlock-7-32.jpg';
import Public from '../../img/padlock-5-32.jpg';
import botm from '../../img/botmasterzzz.png';
import {TextArea, Button, Dropdown, Input, Image, Grid} from 'semantic-ui-react'
import {projectUpdate} from "../../util/APIUtils";
import Alert from "react-s-alert";

class MainSetupForm  extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            name: '',
            description: '',
            type: '',
            secret: '',
            project: props.project
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

        const Project = ({item}) => (
            <>
                {
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
                                                       placeholder="BotMasterzzz project" defaultValue={item.name} required/>
                                            </li>
                                            <li className="lix">
                                                <label className="labelx" form="description">Описание</label>
                                                <TextArea className="text-area"
                                                          id="description" name="description" defaultValue={item.description} />
                                            </li>
                                            <li className="lix">
                                                <label className="labelx" form="type">Тип бота</label>
                                                <Dropdown placeholder='Тип бота' fluid selection id="type" name="type" options={friendOptions} defaultValue='Публичный'/>
                                            </li>
                                            <li className="lix">
                                                <label className="labelx" form="secret">Кодовое слово</label>
                                                <Input  className="inputx" id="secret" name="secret" defaultValue={item.note}/>
                                            </li>
                                            <Button color="vk" id="button" type="submit" className="setup-save">Сохранить</Button>
                                        </ol>
                                    </Grid.Column>
                                    <Grid.Column verticalAlign='middle'>
                                        <Image className="field-logo" src={item.imageUrl ? item.imageUrl : botm} size='medium' floated='right' circular />
                                    </Grid.Column>
                                </Grid>

                            </fieldset>
                        </form>
                    </div>
                }
            </>
        );

        return (
            <Project item={this.state.project}/>
        );
}

    handleSubmit(event) {
        event.preventDefault();
        event.preventDefault();
        const data = new FormData(event.target);
        const name = data.get('name');
        const description = data.get('description');
        const note = data.get('secret');
        const propjectDataRequest = Object.assign({}, {id: this.state.project.id, name, 'description': description, 'note': note });

        projectUpdate(propjectDataRequest)
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
        return this.props.handler(false, this.state.project.id);
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