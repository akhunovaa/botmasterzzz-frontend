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
                <div className="header-bottom">
                    <div className="header-bottom child">
                        <h3>BotMasterzzz project</h3>
                    </div>
                    <div className="header-bottom child">
                        <input type="checkbox" id="cbx" style={{display: "none"}} />
                        <label htmlFor="cbx" className="toggle"><span/></label>
                    </div>

                </div>
                <div className="tabs">
                    <input id="tab1" type="radio" name="tabs"/>
                        <label htmlFor="tab1" title="Настройки">Настройки</label>
                        <input id="tab2" type="radio" name="tabs" checked/>
                            <label htmlFor="tab2" title="Детализация">Детализация</label>

                                    <section id="content-tab1">
                                        <p>
                                            Настройки
                                        </p>
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