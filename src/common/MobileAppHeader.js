import React, {Component} from 'react';
import './MobileAppHeader.css';
import {Button, Divider, List, Portal, Segment} from "semantic-ui-react";
import {NavLink} from "react-router-dom";

class MobileAppHeader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }


    handleOpen = () => {
        this.setState({open: true})
    };

    handleClose = () => {
        this.setState({open: false})
    };


    render() {
        const { open } = this.state;
        return (
            <div id="mobile_header_container">
                <svg className="mobile_header_body" viewBox="0 0 375 95">
                    <path id="mobile_header_body" d="M 0 0 L 375 0 L 375 95 L 0 95 L 0 0 Z">
                    </path>
                </svg>

                {
                    this.props.authenticated ? (
                        <div>
                            <Portal
                                closeOnPortalMouseLeave
                                trigger={
                                    <Button className={"context_menu"} basic icon={'bars'} size={"massive"}/>
                                }
                                open={open}
                                onOpen={this.handleOpen}
                                onClose={this.handleClose}>
                                <div id='mobile-portal' onClick={this.handleClose}>
                                    <Segment className="mobile-segment"
                                             style={{position: 'fixed', top: '76px', zIndex: 1000}}>
                                        <List size={"big"}>
                                            <List.Item>
                                                <List.Icon name='mail'/>
                                                <List.Content>
                                                    <NavLink to="/feedback" style={{color: 'black'}}>Обратная
                                                        связь</NavLink>
                                                </List.Content>
                                            </List.Item>
                                            <List.Item>
                                                <Divider/>
                                            </List.Item>
                                            <List.Item>
                                                <List.Content>
                                                    <a href="/" style={{color: 'black'}}>Новости</a>
                                                </List.Content>
                                            </List.Item>
                                            <List.Item>
                                                <List.Content>
                                                    <a href="/" style={{color: 'black'}}>О платформе</a>
                                                </List.Content>
                                            </List.Item>
                                            <List.Item>
                                                <List.Content>
                                                    <NavLink to="/profile" style={{color: 'black'}}>Профиль</NavLink>
                                                </List.Content>
                                            </List.Item>
                                            <List.Item>
                                                <List.Content>
                                                    <NavLink to="/projects" style={{color: 'black'}}>Мои боты</NavLink>
                                                </List.Content>
                                            </List.Item>
                                            <List.Item>
                                                <Divider/>
                                            </List.Item>
                                            <List.Item>
                                                <List.Content>
                                                    <a href="/" style={{color: 'black', fontWeight: 'bold'}}>RU</a>
                                                </List.Content>
                                            </List.Item>
                                            <List.Item>
                                                <List.Content>
                                                    <a href="/" style={{color: 'black', fontWeight: 'bold'}}>EN</a>
                                                </List.Content>
                                            </List.Item>
                                        </List>
                                    </Segment>
                                </div>
                            </Portal>


                            <div id="login">
                                <svg className="Rectangle_3">
                                    <rect id="Rectangle_3" rx="16" ry="16" x="0" y="0" width="75" height="32">
                                    </rect>
                                </svg>
                                <div id="Log_In">
                                    <a onClick={this.props.onLogout} style={{color: 'white'}}>
                                        <span>Выйти</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <Portal
                                closeOnPortalMouseLeave
                                closeOnTriggerClick
                                openOnTriggerClick
                                trigger={
                                    <Button className={"context_menu"} basic icon={'bars'} size={"massive"}/>
                                }
                                open={open}
                                onOpen={this.handleOpen}
                                onClose={this.handleClose}>
                                <div id='mobile-portal' onClick={this.handleClose}>
                                    <Segment className="mobile-segment"
                                             style={{position: 'fixed', top: '76px', zIndex: 1000}}>
                                        <List size={"big"}>
                                            <List.Item>
                                                <List.Icon name='mail'/>
                                                <List.Content>
                                                    <NavLink to="/feedback" style={{color: 'black'}}>Обратная
                                                        связь</NavLink>
                                                </List.Content>
                                            </List.Item>
                                            <List.Item>
                                                <Divider/>
                                            </List.Item>
                                            <List.Item>
                                                <List.Content>
                                                    <a href="/" style={{color: 'black'}}>Новости</a>
                                                </List.Content>
                                            </List.Item>
                                            <List.Item>
                                                <List.Content>
                                                    <a href="/" style={{color: 'black'}}>О платформе</a>
                                                </List.Content>
                                            </List.Item>
                                            <List.Item>
                                                <List.Content>
                                                    <a href="/signup" style={{color: 'black'}}>Регистрация</a>
                                                </List.Content>
                                            </List.Item>
                                            <List.Item>
                                                <Divider/>
                                            </List.Item>
                                            <List.Item>
                                                <List.Content>
                                                    <a href="/" style={{color: 'black', fontWeight: 'bold'}}>RU</a>
                                                </List.Content>
                                            </List.Item>
                                            <List.Item>
                                                <List.Content>
                                                    <a href="/" style={{color: 'black', fontWeight: 'bold'}}>EN</a>
                                                </List.Content>
                                            </List.Item>
                                        </List>
                                    </Segment>
                                </div>
                            </Portal>
                            <div id="login">
                                <svg className="Rectangle_3">
                                    <rect id="Rectangle_3" rx="16" ry="16" x="0" y="0" width="75" height="32">
                                    </rect>
                                </svg>
                                <div id="Log_In">
                                    <a href="/login" style={{color: 'white'}}>
                                        <span>Войти</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    )}
            </div>
        )
    }
}

export default MobileAppHeader;
