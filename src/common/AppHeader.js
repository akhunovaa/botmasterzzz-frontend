import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './AppHeader.css';
import '../styles/style.css';
import mainLogo from '../img/logo.png';

class AppHeader extends Component {
    render() {
        return (
            <nav className="b_nav clearfix">
            <section className="header">
                <div className="b_nav_contacts pull-xs-right">
                    <div className="b_nav_contacts_phone"><a
                        href="mailto:admin@botmasterzzz.com">admin@botmasterzzz.com</a></div>
                    <div className="b_nav_contacts_phone"><a href="https://t.me/balsakas">@balsakas</a></div>
                </div>
                    <div>
                        <Link to="/">Botmasterzzz</Link>
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
                                <ul>
                                    <li>
                                        <NavLink className="active" to="/profile">Профиль</NavLink>
                                    </li>
                                    <li>
                                        <a className="active" onClick={this.props.onLogout}>Выйти</a>
                                    </li>
                                </ul>
                            ): (
                                <ul>
                                    <li>
                                        <NavLink className="active" to="/login">Авторизация</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="active" to="/signup">Регистрация</NavLink>
                                    </li>
                                </ul>
                            )}
                        </nav>
                    </div>
            </section>
            </nav>
        )
    }
}

export default AppHeader;
