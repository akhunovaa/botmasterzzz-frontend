import React, { Component } from 'react';
import './Tools.css';
import '../styles/min.css';

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
                            <div className="divTableHeaderCell"><i className="far fa-share-alt"></i> Опубликовать</div>
                            <div className="divTableHeaderCell"><i className="far fa-bookmark-o"></i> Аналитика</div>
                            <div className="divTableHeaderCell"><i className="far fa-search"></i> Предосмотр</div>
                            <div className="divTableHeaderCell"><i className="far fa-trash-o"></i> Удалить</div>
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
                    <input id="tab1" type="radio" name="tabs"/>
                        <label htmlFor="tab1" title="Настройки">Настройки</label>
                        <input id="tab2" type="radio" name="tabs" defaultChecked/>
                            <label htmlFor="tab2" title="Детализация">Детализация</label>

                                    <section id="content-tab1">

                                        <div className="tabs-preference">

                                            <input id="tab1-preference" type="radio" name="tabs-preference" defaultChecked/>
                                            <label htmlFor="tab1-preference" title="Главное">Главное</label>

                                            <input id="tab2-preference" type="radio" name="tabs-preference"/>
                                            <label htmlFor="tab2-preference" title="Настройки доступа">Настройки доступа</label>

                                            <input id="tab3-preference" type="radio" name="tabs-preference"/>
                                            <label htmlFor="tab3-preference" title="ID"> ID</label>

                                            <section id="content-tab1-preference">
                                                <p>
                                                    tab1-preference
                                                </p>
                                            </section>

                                            <section id="content-tab2-preference">
                                                <p>
                                                    tab2-preference
                                                </p>
                                            </section>

                                            <section id="content-tab3-preference">
                                                <p>
                                                    tab3-preference
                                                </p>
                                            </section>

                                        </div>

                                    </section>


                                    <section id="content-tab2">
                                        <p>
                                            Регистрация людей на мероприятия
                                            При необходимости регистрации людей на массовые (и не очень) мероприятия гораздо удобнее, если заниматься оповещением Участников буду я, а не Вы. Что я могу в рамках данной задачи:
                                            -️ Сбор заявок на регистрацию
                                            -️ Рассылка уведомлений о начале/завершении регистрации
                                            - Предоставление «Карты мероприятия» - тема, место, время, участники, спикеры и многое другое
                                            - Рассылка уведомлений во время мероприятия (презентация/раздаточные материалы)
                                            - Рассылка благодарности, достижений, записи мероприятия
                                            -️ Оповещение участников о следующем мероприятии (см. пункт 1)
                                        </p>
                                    </section>
                </div>
            </div>
        );
    }
}

export default Tools