import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './AppHeader.css';
import '../styles/style.css';
import mainLogo from '../img/logo.png';

class AppHeader extends Component {
    render() {
        return (
            <nav className="b_nav">
            <section className="header">
                <div className="b_nav_contacts pull-xs-right">
                        <a href="mailto:admin@botmasterzzz.com">admin@botmasterzzz.com</a>
                        <p><a href="https://t.me/balsakas">@balsakas</a></p>
                </div>
                <a href="/" className="b_nav_link_home pull-xs-left">
                    <div className="b_nav_logo pull-xs-left">
                        <img src={mainLogo} alt="Botmasterzzz Logo"/>
                    </div>
                    <div className="b_nav_brand pull-xs-left">
                        Botmasterzzz
                    </div>
                </a>
                    <div className="b_nav_box">
                        <nav className="b_nav_links">
                            { this.props.authenticated ? (
                                <div>
                                <li>
                                        <NavLink className="active" to="/profile">Профиль</NavLink>
                                </li>
                                 <li>
                                        <NavLink className="active" to="/tools">Панель управления</NavLink>
                                </li>
                                <li>
                                        <NavLink className="active" to="/feedback">Обратная связь</NavLink>
                                </li>
                                <li>
                                        <a className="active" onClick={this.props.onLogout}>Выйти</a>
                                </li>
                                </div>
                            ): (
                                <div>
                                    <li>
                                        <NavLink className="active" to="/login">Авторизация</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="active" to="/signup">Регистрация</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="active" to="/feedback">Обратная связь</NavLink>
                                    </li>
                                </div>
                            )}
                        </nav>
                    </div>
            </section>
            </nav>
        )
    }
}

export default AppHeader;
