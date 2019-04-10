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
                <p>
                   Next project
                </p>
                <div className="tabs">
                    <input id="tab1" type="radio" name="tabs"/>
                        <label htmlFor="tab1" title="Настройки">Настройки</label>

                        <input id="tab2" type="radio" name="tabs"/>
                            <label htmlFor="tab2" title="Детализация">Детализация</label>

                            <input id="tab3" type="radio" name="tabs"/>
                                <label htmlFor="tab3" title="Управление">Управление</label>

                                    <section id="content-tab1">
                                        <p>
                                            1Здесь размещаете любое содержание....
                                        </p>
                                    </section>
                                    <section id="content-tab2">
                                        <p>
                                            2Здесь размещаете любое содержание....
                                        </p>
                                    </section>
                                    <section id="content-tab3">
                                        <div className="side-nav">
                                            <ul className="side-nav-menu scrollable ps-container ps-theme-default" data-ps-id="ae692c4c-deaf-e421-4f24-483a61d7381d">
                                                <li className="nav-item">
                                                    <a className="mrg-top-30" href="index.html">
                                <span className="icon-holder">
									     <i className="fas fa-home"></i>
									</span>
                                                        <span className="title">Dashboard</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </section>
                </div>
            </div>
        );
    }
}

export default Tools