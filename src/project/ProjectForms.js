import React, { Component } from 'react';
import {Button, Container, Grid, Header, Icon, Image, Input, Modal, Segment, Breadcrumb} from "semantic-ui-react";
import TestLogo from "../img/github-logo.png";
import {projectCreateRequestSend, projectDeleteRequestSend, projectListGet} from "../util/APIUtils";
import Alert from "react-s-alert";
import {NavLink} from "react-router-dom";

class ProjectForms extends Component {

    _isMounted = false;
    currentProjectId = React.createRef();

    constructor(props) {
        super(props);
        this.state = {
            newProjectName: '',
            newProjectDescription: '',
            newProjectNote: '',
            loading: false,
            projectCreateModal: false,
            projectDeleteModal: false,
            projectCreateModalClose: true,
            projectDeleteModalClose: true,
            targetProjectId:'',
            projects: []
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.showProjectCreateModal = this.showProjectCreateModal.bind(this);
        this.closeProjectCreateModal = this.closeProjectCreateModal.bind(this);
        this.showProjectDeleteModal = this.showProjectDeleteModal.bind(this);
        this.closeProjectDeleteModal = this.closeProjectDeleteModal.bind(this);
        this.projectCreate = this.projectCreate.bind(this);
        this.projectDelete = this.projectDelete.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.redirectToToolsPage = this.redirectToToolsPage.bind(this);
        this.reload = this.reload.bind(this);
    }

    render() {

        const Projects = ({items}) => (
            <>
                {
                    items.map(item => (
                        <Grid.Column key={item.id}>
                            <Segment>
                                <div className='project-cell-container'>
                                <div className='project-cell-header'>
                                    <Header sub floated='left'>
                                        <Header.Content>
                                            {item.name}
                                            <Header.Subheader>{item.description ? item.description : <span>&emsp;</span>}</Header.Subheader>
                                            <Header.Subheader>{item.note ? item.note : <span>&emsp;</span>}</Header.Subheader>
                                        </Header.Content>
                                    </Header>
                                </div>
                                    {/*<Icon size='big' color='blue' name='telegram' floated='left' />*/}
                                <div className='project-cell-ico-body'>
                                    <Image src={item.imageUrl} size='small' floated='right' circular verticalAlign='top' />
                                </div>
                                <div className='project-cell-update-body'>
                                    <form onSubmit={this.redirectToToolsPage}>
                                        <input ref={this.currentProjectId} id="projectId" name="projectId" type="hidden" value={item.id}/>
                                        <Button basic icon="pencil"
                                                content='Настроить'/>
                                    </form>
                                    <Button basic icon="group"
                                            content={item.userCount}/>
                                    <form onSubmit={this.showProjectDeleteModal}>
                                        <input ref={this.currentProjectId} id="projectId" name="projectId" type="hidden" value={item.id}/>
                                        <Button basic icon="trash" content='Удалить'/>
                                    </form>
                                </div>
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
                            {/*<Button icon="trash" circular basic color="black"*/}
                            {/*content='Удаленные'/>*/}
                        </Header>
                    </Segment>
                    <Breadcrumb>
                        <Breadcrumb.Section as={NavLink} to={'/'} link>Главная страница</Breadcrumb.Section>
                        <Breadcrumb.Divider icon='right chevron' />
                        <Breadcrumb.Section as={NavLink} to={'/projects'} link>Панель управления проектами</Breadcrumb.Section>
                        <Breadcrumb.Divider icon='right arrow' />
                        <Breadcrumb.Section active>Мои боты</Breadcrumb.Section>
                    </Breadcrumb>
                </div>
                <div className='project-layer'>
                    {
                        this.state.projects.length === 0 ? (
                            <label>Проекты отстутствуют</label>
                        ) : (
                            <Grid columns='3' stackable>
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

                <Modal  open={this.state.projectDeleteModal} onClose={this.closeProjectDeleteModal} dimmer="blurring"
                        size="tiny" className="project-modal-conf">
                    <Modal.Header className="modal-header">Удалить проект</Modal.Header>
                    <Modal.Content>
                        <Container className="modal-container">
                            <p>
                                Вы уверены что хотите удалить данный проект?
                            </p>
                        </Container>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button
                            color='vk'
                            content="Отменить"
                            onClick={this.closeProjectDeleteModal}
                        />
                        <Button
                            className="menu-update"
                            negative
                            content="Удалить"
                            onClick={this.projectDelete}
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

    handleClick() {
        console.log(this.currentProjectId.current.value);
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

    showProjectDeleteModal(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        const projectId = data.get('projectId');
        this.setState({projectDeleteModalClose: false, projectDeleteModal: true, targetProjectId: projectId});
    }

    closeProjectCreateModal() {
        this.setState({projectCreateModalClose: true, projectCreateModal: false});
    }


    closeProjectDeleteModal() {
        this.setState({projectDeleteModalClose: true, projectDeleteModal: false});
    }


    projectCreate(event) {
        event.preventDefault();
        if (!this.state.newProjectName) {
            return
        }
        const projectCreateRequest = Object.assign({}, {
            'name': this.state.newProjectName,
            'description': this.state.newProjectDescription,
            'note': this.state.newProjectNote
        });
        this.closeProjectCreateModal();
        projectCreateRequestSend(projectCreateRequest)
            .then(response => {
                if (response.error) {
                    Alert.warning(response.error + '. Необходимо заново авторизоваться');
                }else if (response.success === false) {
                    Alert.warning(response.message);
                } else {
                    this.reload();
                    Alert.success('Проект "' + response.project.name + '" успешно создан');
                }
            }).catch(error => {
            Alert.error('Что-то пошло не так! Попробуйте заново.' || (error && error.message));
        });


    }

    projectDelete(event) {
        event.preventDefault();
        if (!this.state.targetProjectId) {
            return
        }
        const projectDeleteRequest = Object.assign({}, {
            'id': this.state.targetProjectId
        });
        this.closeProjectDeleteModal();
        projectDeleteRequestSend(projectDeleteRequest)
            .then(response => {
                if (response.error) {
                    Alert.warning(response.error + '. Необходимо заново авторизоваться.');
                }else if (response.success === false) {
                    Alert.warning(response.message);
                } else {
                    this.reload();
                    Alert.success('Проект  "' + response.project.name + '" успешно удален');
                }
            }).catch(error => {
            console.log(error)
        });
    }


    redirectToToolsPage (event){
        event.preventDefault();
        const data = new FormData(event.target);
        const projectId = data.get('projectId');
        this.setState({targetProjectId: projectId});
        return this.props.handler(true, projectId);
    }


    reload (){
        this.componentDidMount()
    };

}
export default ProjectForms;