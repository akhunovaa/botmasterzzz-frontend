import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './AppHeader.css';

class AppHeader extends Component {
    render() {
        return (
            <header className="app-header">
                <div className="container">
                    <div className="app-branding">
                        <Link to="/" className="app-title">Botmasterzzz</Link>
                    </div>
                    <div className="app-options">
                        <nav className="app-nav">
                            { this.props.authenticated ? (
                                <ul>
                                    <li>
                                        <NavLink to="/profile">Профиль</NavLink>
                                    </li>
                                    <li>
                                        <a onClick={this.props.onLogout}>Выйти</a>
                                    </li>
                                </ul>
                            ): (
                                <ul>
                                    <li>
                                        <NavLink to="/login">Авторизация</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/signup">Регистрация</NavLink>
                                    </li>
                                </ul>
                            )}
                        </nav>
                    </div>
                </div>
            </header>
        )
    }
}

export default AppHeader;