import React, { Component } from 'react';
import './Tools.css';
import '../styles/min.css';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import 'react-web-tabs/dist/react-web-tabs.css';
import MainSetupForm from "./preference/MainSetupForm";
import PrivacySetupForm from "./preference/PrivacySetupForm";
import MenuSetupForm from "./detail/MenuSetupForm";

class Tools extends Component {

    constructor(props) {
        super(props);
        this.state = {
            authenticated: false,
            currentUser: null,
            loading: false
        };
    }

    render() {
        return (
            <div className="tools-container">

                <div className="divTable-header header-bottom">
                    <div className="divTableHeaderBody">
                        <div className="divTableHeaderRow">
                            <div className="divTableHeaderCellX"><h3>BotMasterzzz project</h3></div>
                            <div className="divTableHeaderCell"><i className="fa fa-share-alt"/> Опубликовать</div>
                            <div className="divTableHeaderCell"><i className="fa fa-bookmark-o"/> Аналитика</div>
                            <div className="divTableHeaderCell"><i className="fa fa-search"/> Предосмотр</div>
                            <div className="divTableHeaderCell"><i className="fa fa-trash-o"/> Удалить</div>
                        </div>
                    </div>
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
                                                <Tab tabFor="vertical-tab-three">ID</Tab>
                                            </TabList>

                                            <TabPanel tabId="vertical-tab-one">
                                                <MainSetupForm {...this.props} />
                                            </TabPanel>

                                            <TabPanel tabId="vertical-tab-two">
                                                <PrivacySetupForm {...this.props} />
                                            </TabPanel>

                                            <TabPanel tabId="vertical-tab-three">
                                                <p>
                                                    - Рассылка благодарности, достижений, записи мероприятия
                                                    -️ Оповещение участников о следующем мероприятии (см. пункт 1)
                                                </p>
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
                                                <p>
                                                    - Рассылка благодарности, достижений, записи мероприятия
                                                    -️ Оповещение участников о следующем мероприятии (см. пункт 1)
                                                </p>
                                            </TabPanel>
                                        </Tabs>
                                    </section>
                </div>
            </div>
        );
    }


}

export default Tools