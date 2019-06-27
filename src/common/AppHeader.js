import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import './AppHeader.css';
import logo from '../img/global/logo.png';

class AppHeader extends Component {
    render() {
        return (
                <div id="header">
                    <div id="header-center">
                        <a href="/">
                            <img src={logo} className="logo" alt='Botmasterzzz.com logo picture'/>
                        </a>
                        <ul>
                            <li><a href="#">RU</a></li>
                            <li><a href="#">О ПРОЕКТЕ</a></li>
                            {this.props.authenticated ? (
                                <div>
                                    <NavLink style={{float: 'right'}} to="/profile">Профиль</NavLink>
                                    <NavLink style={{float: 'right'}} to="/project">Мои боты</NavLink>
                                    <NavLink style={{float: 'right'}} to="/feedback">Обратная связь</NavLink>
                                    <a style={{float: 'right'}} onClick={this.props.onLogout}>Выйти</a>
                                </div>
                            ) : (
                                <div>
                                    <NavLink style={{float: 'right'}} to="/signup">РЕГИСТРАЦИЯ</NavLink>
                                    <NavLink style={{float: 'right'}} to="/login">ВХОД</NavLink>
                                </div>
                            )}
                        </ul>
                    </div>
                </div>
        )
    }
}

export default AppHeader;
