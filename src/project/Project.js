import React, {Component} from 'react';
import './Project.css';
import TestLogo from '../img/github-logo.png';
import TestLogo2 from '../img/google-logo.png';
import TestLogo3 from '../img/fb-logo.png';
import {Button, Grid, Header, Icon, Image, Input, Modal, Segment} from "semantic-ui-react";
import {projectCreateRequestSend, projectListGet} from "../util/APIUtils";
import Alert from "react-s-alert";


class Project extends Component {

    _isMounted = false;

    constructor(props) {
        super(props);
        this.state = {
            newProjectName: '',
            newProjectDescription: '',
            newProjectNote: '',
            loading: false,
            projectCreateModal: false,
            projectCreateModalClose: true,
            projects: []
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.showProjectCreateModal = this.showProjectCreateModal.bind(this);
        this.closeProjectCreateModal = this.closeProjectCreateModal.bind(this);
        this.projectCreate = this.projectCreate.bind(this);
    }

    render() {

        const Projects = ({items}) => (
            <>
                {
                    items.map(item => (
                        <Grid.Column key={item.id}>
                            <Segment>
                                <div className='project-cell-header'>
                                    <Header sub floated='left'>
                                        <Image size='mini' src={TestLogo} circular inline/>
                                        <Header.Content>
                                            {item.name}
                                            <Header.Subheader>{item.description ? item.description :  "____________________________________________________________________________________________________________"}</Header.Subheader>
                                            <Header.Subheader>{item.note ? item.note :  "____________________________________________________________________________________________________________"}</Header.Subheader>
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
                ))}
            </>
        );

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
                    {
                        this.state.projects.length === 0 ? (
                            <label>Проекты отстутствуют</label>
                        ) : (
                            <Grid columns='4' stackable>
                                <Projects items={this.state.projects}/>
                            </Grid>
                        )
                    }

                </div>

                <Modal open={this.state.projectCreateModal} onClose={this.closeProjectCreateModal} dimmer="blurring"
                       size="tiny" className="project-modal-conf">
                    <Modal.Header className="modal-header">Создать новый проект</Modal.Header>
                    <Modal.Content className="modal-content">
                        <div className='project-modal-input-line'>
                            <label className='input-form-label' form='newProjectName'>Наименование проекта:</label>
                            <Input fluid transparent className='profile-form-input' type='text' id='newProjectName'
                                   name="newProjectName"
                                   value={this.state.newProjectName} onChange={this.handleInputChange} required/>
                        </div>

                        <div className='project-modal-input-line'>
                            <label className='input-form-label' form='newProjectDescription'>Описание проекта:</label>
                            <Input fluid transparent className='profile-form-input' type='text'
                                   id='newProjectDescription' name="newProjectDescription"
                                   value={this.state.newProjectDescription} onChange={this.handleInputChange}/>
                        </div>

                        <div className='project-modal-input-line'>
                            <label className='input-form-label' form='newProjectNote'>Примечание:</label>
                            <Input fluid transparent className='profile-form-input' type='text' id='newProjectNote'
                                   name="newProjectNote"
                                   value={this.state.newProjectNote} onChange={this.handleInputChange}/>
                        </div>

                        <div className='project-modal-helper-message'>
                            <label>Для наименования действует ограничение в 255 символов</label>
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
                            onClick={this.projectCreate}
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
        this._isMounted = true;
        if (!this.state.projects) return;
        projectListGet()
            .then(response => {
                if (this._isMounted) {
                    this.setState({
                        projects : response.project
                    })
                }
            }).catch(error => {
            Alert.error('Ошибка получения списка проектов' || (error && error.message));
        });
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    showProjectCreateModal() {
        this.setState({projectCreateModalClose: false, projectCreateModal: true});
    }

    closeProjectCreateModal() {
        this.setState({projectCreateModalClose: true, projectCreateModal: false});
    }


    projectCreate(event) {
        event.preventDefault();

        const projectCreateRequest = Object.assign({}, {
            'name': this.state.newProjectName,
            'description': this.state.newProjectDescription,
            'note': this.state.newProjectNote
        });

        projectCreateRequestSend(projectCreateRequest)
            .then(response => {
                if (response.error) {
                    Alert.warning(response.error + '. Необходимо заново авторизоваться.');
                }else if (response.success === false) {
                    Alert.warning(response.message);
                } else {
                    Alert.success('Проект успешно создан');
                }
            }).catch(error => {
            Alert.error('Что-то пошло не так! Попробуйте заново.' || (error && error.message));
        });
        this.closeProjectCreateModal();
        this.reload();
    }

    reload = ()=>{
        const current = this.props.location.pathname;
        this.props.history.replace(`/reload`);
        setTimeout(() => {
            this.props.history.replace(current);
        });
    }

}

export default Project