import React, { Component } from 'react';
import '../styles/min.css';
import 'react-web-tabs/dist/react-web-tabs.css';
import {Icon, Segment, Header, Table, Popup} from "semantic-ui-react";
import {systemLogListGet} from "../util/APIUtils";
import Alert from "react-s-alert";

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
                        <Table.Row textAlign={'center'} key={item.audWhenUpdate}>
                            <Popup content={item.user.login} trigger={<Table.Cell selectable>{item.user.login}</Table.Cell>} />
                            <Popup content={item.ipAddress} trigger={<Table.Cell selectable>{item.ipAddress}</Table.Cell>} />
                            <Popup content={item.referer} trigger={<Table.Cell selectable>{item.referer}</Table.Cell>} />
                            <Popup content={item.fullUrl} trigger={<Table.Cell selectable>{item.fullUrl}</Table.Cell>} />
                            <Popup content={item.clientOs} trigger={<Table.Cell selectable>{item.clientOs}</Table.Cell>} />
                            <Popup content={item.userAgent} trigger={<Table.Cell selectable>{item.userAgent}</Table.Cell>} />
                            <Popup content={item.clientBrowser} trigger={<Table.Cell selectable>{item.clientBrowser}</Table.Cell>} />
                            <Popup content={new Date(item.audWhenCreate).toISOString()} trigger={<Table.Cell selectable>{new Date(item.audWhenCreate).toISOString()}</Table.Cell>} />
                            <Popup content={item.token} trigger={<Table.Cell selectable>{item.token}</Table.Cell>} />
                            <Popup content={item.note} trigger={<Table.Cell selectable>{item.note}</Table.Cell>} />
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
                <Table celled fixed selectable padded sortable striped structured unstackable>
                    <Table.Header fullWidth>
                        <Table.Row active textAlign={'center'}>
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
                        log : response
                    })
                }
            }).catch(error => {
            Alert.error('Ошибка получения списка проектов' || (error && error.message));
        });
    }



}

export default Admin