import React, {Component} from 'react';
import './Project.css';
import TestLogo from '../img/github-logo.png';
import TestLogo2 from '../img/google-logo.png';
import TestLogo3 from '../img/fb-logo.png';
import {Button, Header, Icon, Segment, Grid, Placeholder, Image, Item} from "semantic-ui-react";


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

                <div className='project-layer'>
                    <Grid columns={3} stackable>
                        <Grid.Column>
                            <Segment>
                                <div className='project-cell-header'>
                                    <Header floated='left'>
                                        <Image size='mini' src={TestLogo} circular/>
                                        <Header.Content>
                                            Noname project
                                            <Header.Subheader>Noname_bot</Header.Subheader>
                                        </Header.Content>
                                    </Header>
                                </div>
                                <div className='project-cell-ico-body'>
                                    <Icon size='big' color='blue' name='telegram'/>
                                    <Icon size='big' color='green' name='whatsapp'/>
                                    <Icon size='big' color='blue' name='vk'/>
                                </div>
                                <div className='project-cell-update-body'>
                                    <Button size='big' basic onClick={this.showCreate()} icon="pencil"
                                            content='Настроить'/>
                                    <Button size='big' basic onClick={this.showCreate()} icon="group"
                                            content='15к'/>
                                </div>
                            </Segment>

                        </Grid.Column>

                        <Grid.Column>
                            <Segment>
                                <div className='project-cell-header'>
                                    <Header floated='left'>
                                        <Image size='small' src={TestLogo2} circular/>
                                        <Header.Content>
                                            Second project
                                            <Header.Subheader>Second_bot</Header.Subheader>
                                        </Header.Content>
                                    </Header>
                                </div>
                                <div className='project-cell-ico-body'>
                                    <Icon size='big' color='blue' name='telegram'/>
                                    <Icon size='big' color='green' name='whatsapp'/>
                                </div>
                                <div className='project-cell-update-body'>
                                    <Button size='big' basic onClick={this.showCreate()} icon="pencil"
                                            content='Настроить'/>
                                    <Button size='big' basic onClick={this.showCreate()} icon="group"
                                             content='134'/>
                                </div>
                            </Segment>
                        </Grid.Column>

                        <Grid.Column>
                            <Segment>
                                <div className='project-cell-header'>
                                    <Header floated='left'>
                                        <Image size='small' src={TestLogo3} circular/>
                                        <Header.Content>
                                            Test project
                                            <Header.Subheader>Test_bot</Header.Subheader>
                                        </Header.Content>
                                    </Header>
                                </div>
                                <div className='project-cell-ico-body'>
                                    <Icon size='big' color='blue' name='telegram'/>
                                </div>
                                <div className='project-cell-update-body'>
                                    <Button size='big' basic onClick={this.showCreate()} icon="pencil"
                                            content='Настроить'/>
                                    <Button size='big' basic onClick={this.showCreate()} icon="group"
                                            content='567'/>
                                </div>
                            </Segment>
                        </Grid.Column>
                    </Grid>
                </div>
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