import React, {Component} from 'react';
import './Project.css';
import {Button, Header, Icon, Segment} from "semantic-ui-react";


class Project extends Component {

    showCreate = () => () => this.setState({createdButtonText: true});
    showDeleted = () => () => this.setState({deletedButtonText: true});

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            createdButtonText: false,
            deletedButtonText: false
        };


        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    render() {

        return (
            <div className="project-container">

                <div className="project-header">
                        <Segment vertical>
                            <Header floated='left'>
                                <Icon name='bity'/>
                                <Header.Content>
                                    Мои боты
                                    <Header.Subheader>Панель управления проектами</Header.Subheader>
                                </Header.Content>
                            </Header>
                            <Header floated='right'>
                                <Button onClick={this.showCreate()} icon="plus" circular basic color="black"
                                        content='Создать нового бота'/>
                                <Button onClick={this.showDeleted()} icon="trash" circular basic color="black"
                                        content='Удаленные'/>
                            </Header>
                        </Segment>
                </div>

                <h2>Создание: {this.state.createdButtonText.toString()}</h2>
                <h2>Удаленные: {this.state.deletedButtonText.toString()}</h2>
            </div>
        );
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(event.action)
    }

    handleInputChange(event) {
        const target = event.target;
        const inputName = target.name;
        const inputValue = target.value;

        this.setState({
            [inputName]: inputValue
        });
    }


    componentDidMount() {

    }

}

export default Project