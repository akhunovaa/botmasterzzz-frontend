import React, { Component } from 'react';
import '../styles/min.css';
import 'react-web-tabs/dist/react-web-tabs.css';
import {Icon, Segment, Header, Table, Image, Button} from "semantic-ui-react";
import {systemLogListGet} from "../util/APIUtils";
import Alert from "react-s-alert";
import {Grid} from "semantic-ui-react/dist/commonjs/collections/Grid";

class Admin extends Component {

    _isMounted = false;

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            log: []
        };
    }

    render() {

        const Adm = ({items}) => (

            <>
                {
                    items.map(item => (
                        <Table.Row>
                            <Table.Cell>{item.user.login}</Table.Cell>
                            <Table.Cell>{item.ipAddress}</Table.Cell>
                            <Table.Cell>{item.referer}</Table.Cell>
                            <Table.Cell>{item.fullUrl}</Table.Cell>
                            <Table.Cell>{item.clientOs}</Table.Cell>
                            <Table.Cell>{item.userAgent}</Table.Cell>
                            <Table.Cell>{item.clientBrowser}</Table.Cell>
                            <Table.Cell>{new Date(item.audWhenCreate).getDate() + "-" + new Date(item.audWhenCreate).getMonth() + "-" + new Date(item.audWhenCreate).getFullYear()}</Table.Cell>
                            <Table.Cell>{item.token}</Table.Cell>
                            <Table.Cell>{item.note}</Table.Cell>
                        </Table.Row>
                    ))
                }
            </>
        );
        return (
            <div className="tools-container">
                <div className="tools-header">
                    <Segment vertical>
                        <Header floated='left'>
                            <Icon name='cog'/>
                            <Header.Content>
                                Администраторская панель
                                <Header.Subheader>Панель просмотра журнала авторизаций</Header.Subheader>
                            </Header.Content>
                        </Header>
                    </Segment>
                </div>
                <Table celled fixed>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Пользователь</Table.HeaderCell>
                            <Table.HeaderCell>IP адрес</Table.HeaderCell>
                            <Table.HeaderCell>Referrer</Table.HeaderCell>
                            <Table.HeaderCell>Full URL</Table.HeaderCell>
                            <Table.HeaderCell>Операционная система</Table.HeaderCell>
                            <Table.HeaderCell>User Agent</Table.HeaderCell>
                            <Table.HeaderCell>Браузер клиента</Table.HeaderCell>
                            <Table.HeaderCell>Время</Table.HeaderCell>
                            <Table.HeaderCell>Токен</Table.HeaderCell>
                            <Table.HeaderCell>Тип входа</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        <Adm items={this.state.log}/>
                    </Table.Body>
                </Table>
            </div>

        );
    }


    componentWillUnmount() {
        this._isMounted = false;
    }

    componentDidMount() {
        this._isMounted = true;
        if (!this.state.log) return;
        systemLogListGet()
            .then(response => {
                if (this._isMounted) {
                    this.setState({
                        projects : response.project
                    })
                }
            }).catch(error => {
            Alert.error('Ошибка получения списка проектов' || (error && error.message));
        });
    }



}

export default Admin