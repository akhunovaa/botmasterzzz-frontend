import React, { Component } from 'react';
import './Tools.css';
import '../styles/min.css';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import 'react-web-tabs/dist/react-web-tabs.css';
import MainSetupForm from "./preference/MainSetupForm";
import PrivacySetupForm from "./preference/PrivacySetupForm";
import MenuSetupForm from "./detail/MenuSetupForm";
import AutoPostSetupForm from "./detail/AutoPostSetupForm";
import TokenSetupForm from "./preference/TokenSetupForm";
import {Icon, Segment, Header, Breadcrumb} from "semantic-ui-react";
import {NavLink} from "react-router-dom";
class Tools extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            projectId: props.projectId,
            project: props.project
        };
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
                        <Breadcrumb.Section as={NavLink} to={'/project'} onClick={() => this.props.handler(false, this.state.projectId)} link>Панель управления проектами</Breadcrumb.Section>
                        <Breadcrumb.Divider icon='right chevron' />
                        <Breadcrumb.Section as={NavLink} to={'/project'} onClick={() => this.props.handler(true, this.state.projectId)}  link>Панель настройки проекта</Breadcrumb.Section>
                        <Breadcrumb.Divider icon='right arrow' />
                        <Breadcrumb.Section active>Настройка бота</Breadcrumb.Section>
                    </Breadcrumb>
                </div>

                <div className="divTable paleBlueRows">
                    <div className="divTableBody">
                        <div className="divTableRow">
                            <div className="divTableCell">Статус: </div>
                            <div className="divTableCell">
                                <input type="checkbox" id="cbx" style={{display: "none"}} />
                                <label htmlFor="cbx" className="toggle"><span/></label>
                            </div>
                        </div>
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
                                <Tab tabFor="vertical-tab-two">Адреса и контакты</Tab>
                                <Tab tabFor="vertical-tab-three">Автопостинг</Tab>
                            </TabList>

                            <TabPanel tabId="vertical-tab-one">
                                <MenuSetupForm {...this.props} />
                            </TabPanel>

                            <TabPanel tabId="vertical-tab-two">
                                {/*<PrivacySetupForm {...this.props} />*/}
                                <p>
                                    - Рассылка благодарности, достижений, записи мероприятия
                                    -️ Оповещение участников о следующем мероприятии (см. пункт 1)
                                </p>
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



}

export default Tools