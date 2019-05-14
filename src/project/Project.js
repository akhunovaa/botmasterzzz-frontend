import React, {Component} from 'react';
import './Project.css';
import TestLogo from '../img/github-logo.png';
import TestLogo2 from '../img/google-logo.png';
import TestLogo3 from '../img/fb-logo.png';
import {Button, Header, Icon, Segment, Grid, Image, Modal, Input} from "semantic-ui-react";


class Project extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newProjectName: 'Test project',
            newBotName: 'Test_project_bot',
            loading: false,
            projectCreateModal: false,
            projectCreateModalClose: true
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.showProjectCreateModal = this.showProjectCreateModal.bind(this);
        this.closeProjectCreateModal = this.closeProjectCreateModal.bind(this);
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
                                <Button onClick={this.showProjectCreateModal} icon="plus" circular basic color="black"
                                        content='Создать нового бота'/>
                                <Button icon="trash" circular basic color="black"
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
                                    <Button size='big' basic icon="pencil"
                                            content='Настроить'/>
                                    <Button size='big' basic icon="group"
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
                                    <Button size='big' basic icon="pencil"
                                            content='Настроить'/>
                                    <Button size='big' basic icon="group"
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
                                    <Button size='big' basic icon="pencil"
                                            content='Настроить'/>
                                    <Button size='big' basic icon="group"
                                            content='567'/>
                                </div>
                            </Segment>
                        </Grid.Column>
                    </Grid>
                </div>

                <Modal open={this.state.projectCreateModal} onClose={this.closeProjectCreateModal} dimmer="blurring" size="tiny" className="project-modal-conf">
                    <Modal.Header className="modal-header">Создать новый проект</Modal.Header>
                    <Modal.Content className="modal-content">
                            <div className='project-modal-input-line'>
                                <label className='input-form-label' form='newProjectName'>Наименование проекта:</label>
                                <Input fluid transparent className='profile-form-input' type='text' id='newProjectName' name="newProjectName"
                                       value={this.state.newProjectName} onChange={this.handleInputChange} required/>
                            </div>

                            <div className='project-modal-input-line'>
                                <label className='input-form-label' form='newBotName'>Наименование бота:</label>
                                <Input fluid transparent className='profile-form-input' type='text' id='newBotName' name="newBotName"
                                       value={this.state.newBotName} onChange={this.handleInputChange} required/>
                            </div>

                            <div className='project-modal-helper-message'>
                                <label>название бота должно заканчиваться на "bot", например testbot или test_bot</label>
                            </div>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button
                            basic
                            content="Отменить"
                            onClick={this.closeProjectCreateModal}
                        />
                        <Button
                            className="menu-update"
                            color='vk'
                            content="Добавить"
                            onClick={this.closeProjectCreateModal}
                        />
                    </Modal.Actions>
                </Modal>
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

    showProjectCreateModal() {
        this.setState({ projectCreateModalClose: false, projectCreateModal: true });
    }

    closeProjectCreateModal() {
        this.setState({ projectCreateModalClose: true, projectCreateModal: false });
    }

}

export default Project