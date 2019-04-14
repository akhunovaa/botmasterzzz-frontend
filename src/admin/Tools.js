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
                            <div className="divTableHeaderCell">Опубликовать</div>
                            <div className="divTableHeaderCell">Аналитика</div>
                            <div className="divTableHeaderCell">Предосмотр</div>
                            <div className="divTableHeaderCell">Удалить</div>
                        </div>
                    </div>
                </div>


                    <div className="divTable paleBlueRows">
                    <div className="divTableBody">
                        <div className="divTableRow">
                            <div className="divTableCell">Статус: Вкл./Выкл.</div>
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
                        <input id="tab2" type="radio" name="tabs" checked/>
                            <label htmlFor="tab2" title="Детализация">Детализация</label>

                                    <section id="content-tab1">
                                        <div id="a">
                                            <div className="col1">testing col1</div>
                                            <div className="col2">testing col2</div>
                                        </div>
                                        <div id="b">
                                            Test test test.
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