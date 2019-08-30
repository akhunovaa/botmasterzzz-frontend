import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import './AppHeader.css';
import logo from '../img/global/logo.png';
import {List} from "semantic-ui-react/dist/commonjs/elements/List";

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
                                    <a style={{float: 'right'}} onClick={this.props.onLogout}>ВЫЙТИ</a>
                                    <NavLink style={{float: 'right'}} to="/feedback">ОБРАТНАЯ СВЯЗЬ</NavLink>
                                    <NavLink style={{float: 'right'}} to="/projects">МОИ БОТЫ</NavLink>
                                    <NavLink style={{float: 'right'}} to="/profile">ПРОФИЛЬ</NavLink>
                                </div>
                            ) : (
                                <div>
                                    <NavLink style={{float: 'right'}} to="/signup">РЕГИСТРАЦИЯ</NavLink>
                                    <NavLink style={{float: 'right'}} to="/login">ВХОД</NavLink>
                                    <NavLink to="/news" style={{float: 'right', color: 'black'}}>НОВОСТИ</NavLink>
                                </div>
                            )}
                        </ul>
                    </div>
                </div>
        )
    }
}

export default AppHeader;
