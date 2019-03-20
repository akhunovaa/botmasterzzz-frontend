import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './AppHeader.css';
import '../styles/style.css';

class AppHeader extends Component {
    render() {
        return (
            <header className="header">
                    <div className="active">
                        <Link to="/">Botmasterzzz</Link>
                    </div>
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
            </header>
        )
    }
}

export default AppHeader;
