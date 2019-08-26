import React, { Component } from 'react';
import './Tools.css';
import '../styles/min.css';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import 'react-web-tabs/dist/react-web-tabs.css';
import MainSetupForm from "./preference/MainSetupForm";
import PrivacySetupForm from "./preference/PrivacySetupForm";
import MenuSetupForm from "./detail/MenuSetupForm";
import CustomSetupMenuForm from "./detail/CustomSetupMenuForm";
import AutoPostSetupForm from "./detail/AutoPostSetupForm";
import TokenSetupForm from "./preference/TokenSetupForm";
import {Icon, Segment, Header, Breadcrumb, Button} from "semantic-ui-react";
import {NavLink} from "react-router-dom";
import {projectBotStatusGet, projectBotStart, projectBotStop} from "../util/APIUtils";
import Alert from "react-s-alert";
class Tools extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            loaded: false,
            botStatus: false,
            errorMessage: '',
            updatedTime: '',
            createdTime: '',
            projectId: props.projectId,
            project: props.project
        };
        this.getProjectBotStatus = this.getProjectBotStatus.bind(this);
        this.botProjectStart = this.botProjectStart.bind(this);
        this.botProjectStop = this.botProjectStop.bind(this);
    }

    render() {

        return (
            <div className="tools-container">
                <div className="tools-header">
                    <Segment vertical>
                        <Header floated='left'>
                            <Icon name='cog'/>
                            <Header.Content>
                                {this.state.project.name}
                                <Header.Subheader>Панель настройки проекта</Header.Subheader>
                            </Header.Content>
                        </Header>
                    </Segment>

                    <Breadcrumb>
                        <Breadcrumb.Section as={NavLink} to={'/'} link>Главная страница</Breadcrumb.Section>
                        <Breadcrumb.Divider icon='right chevron' />
                        <Breadcrumb.Section as={NavLink} to={'/projects'} onClick={() => this.props.handler(false, this.state.projectId)} link>Панель управления проектами</Breadcrumb.Section>
                        <Breadcrumb.Divider icon='right chevron' />
                        <Breadcrumb.Section as={NavLink} to={'/projects'} onClick={() => this.props.handler(true, this.state.projectId)}  link>Панель настройки проекта</Breadcrumb.Section>
                        <Breadcrumb.Divider icon='right arrow' />
                        <Breadcrumb.Section active>Настройка бота</Breadcrumb.Section>
                    </Breadcrumb>
                </div>

                <div className="subheader">
                    <Button.Group>
                    <Button icon='play' size={'mini'} color={'vk'} onClick={this.botProjectStart}/>
                    <Button icon='pause' size={'mini'} color={'vk'} onClick={this.botProjectStop}/>
                    </Button.Group>
                    <div className="status-activity">
                        <label style={{marginRight: '12px'}}>Статус бота: {this.state.botStatus ? 'Запущен' : 'Остановлен'}</label>
                    </div>
                    <div className="status-activity">
                        <label style={{marginRight: '12px'}}>Системное сообщение: {this.state.errorMessage ? this.state.errorMessage : 'неизвестно'}</label>
                    </div>
                    <div className="status-activity">
                        <label style={{marginRight: '12px'}}>Первый запуск: {this.state.createdTime ? new Date(this.state.createdTime).toLocaleString() : 'неизвестно'}</label>
                    </div>
                    <div className="status-activity">
                        <label style={{marginRight: '12px'}}>Последний запуск: {this.state.updatedTime ? new Date(this.state.updatedTime).toLocaleString() : 'неизвестно'}</label>
                    </div>
                </div>

                <div className="tabs">
                    <input id="tab1" type="radio" name="tabs" defaultChecked/>
                    <label htmlFor="tab1" title="Настройки">Настройки</label>
                    <input id="tab2" type="radio" name="tabs"/>
                    <label htmlFor="tab2" title="Детализация">Детализация</label>

                    <section id="content-tab1">
                        <Tabs defaultTab="vertical-tab-one" vertical>
                            <TabList>
                                <Tab tabFor="vertical-tab-one">Основные настройки</Tab>
                                <Tab tabFor="vertical-tab-two">Настройки доступа</Tab>
                                <Tab tabFor="vertical-tab-three">Token</Tab>
                            </TabList>

                            <TabPanel tabId="vertical-tab-one">
                                <MainSetupForm project = {this.state.project} />
                            </TabPanel>

                            <TabPanel tabId="vertical-tab-two">
                                <PrivacySetupForm {...this.props} />
                            </TabPanel>

                            <TabPanel tabId="vertical-tab-three">
                                <TokenSetupForm project = {this.state.project} />
                            </TabPanel>
                        </Tabs>

                    </section>


                    <section id="content-tab2">
                        <Tabs defaultTab="vertical-tab-one" vertical>
                            <TabList>
                                <Tab tabFor="vertical-tab-one">Настройка меню</Tab>
                                <Tab tabFor="vertical-tab-two">Дополнительные пункты меню</Tab>
                                <Tab tabFor="vertical-tab-three">Автопостинг</Tab>
                            </TabList>

                            <TabPanel tabId="vertical-tab-one">
                                <MenuSetupForm project = {this.state.project} />
                            </TabPanel>

                            <TabPanel tabId="vertical-tab-two">
                                <CustomSetupMenuForm project = {this.state.project} />
                            </TabPanel>

                            <TabPanel tabId="vertical-tab-three">
                                <AutoPostSetupForm {...this.props} />
                            </TabPanel>
                        </Tabs>
                    </section>
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.getProjectBotStatus()
    }

    getProjectBotStatus(){
        if (this.state.loaded) return;
        let projectId = this.state.project.id;
        let data = {
            "projectId": projectId
        };
        projectBotStatusGet(data)
            .then(response => {
                this.setState({
                    botStatus: response.telegram.status,
                    errorMessage: response.telegram.lastError,
                    createdTime: response.telegram.created,
                    updatedTime: response.telegram.updated,
                    loaded: true
                });
            }).catch(error => {
            Alert.error('У Вас недостаточно прав для просмотра данной страницы');
        });
    }

    botProjectStart (){
        if (this.state.botStatus) {
            Alert.warning('Экземпляр бота уже запущен');
            return;
        }
        if (this.state.project.token === null){
            Alert.warning('Токен для проекта не установлен. Пожалуйста получите токен у @BotFather и установите его для проекта.');
            return;
        }
        let projectId = this.state.project.id;
        let data = {
            "projectId": projectId
        };

            projectBotStart(data)
                .then(response => {
                    this.setState({
                        botStatus: response.telegram.status,
                        errorMessage: response.telegram.lastError,
                        createdTime: response.telegram.created,
                        updatedTime: response.telegram.updated
                    })
                }).catch(error => {
                Alert.error('У Вас недостаточно прав для просмотра данной страницы');
            });

    };

    botProjectStop (){
        if (!this.state.botStatus) {
            Alert.warning('Экземпляр бота остановлен');
            return;
        }
        let projectId = this.state.project.id;
        let data = {
            "projectId": projectId
        };

            projectBotStop(data)
                .then(response => {
                    this.setState({
                        botStatus: response.telegram.status,
                        errorMessage: response.telegram.lastError,
                        createdTime: response.telegram.created,
                        updatedTime: response.telegram.updated
                    })
                }).catch(error => {
                Alert.error('У Вас недостаточно прав для просмотра данной страницы');
            });

    };


}

export default Tools