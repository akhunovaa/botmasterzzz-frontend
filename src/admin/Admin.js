import React, { Component } from 'react';
import './Admin.css';
import 'react-web-tabs/dist/react-web-tabs.css';
import {Icon, Segment, Header, Table, Popup, Breadcrumb} from "semantic-ui-react";
import {systemLogListGet} from "../util/APIUtils";
import Alert from "react-s-alert";
import {NavLink} from 'react-router-dom'

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
                            <Popup content={new Date(item.audWhenCreate).toISOString()} trigger={<Table.Cell selectable>{new Date(item.audWhenCreate).toLocaleString()}</Table.Cell>} />
                            <Popup content={item.token} trigger={<Table.Cell selectable>{item.token}</Table.Cell>} />
                            <Popup content={item.note} trigger={<Table.Cell selectable>{item.note}</Table.Cell>} />
                        </Table.Row>
                    ))
                }
            </>
        );
        return (
            <div className="admin-container">
                <div className="admin-header">
                    <Segment vertical>
                        <Header floated='left'>
                            <Icon name='cog'/>
                            <Header.Content>
                                Администраторская панель
                                <Header.Subheader>Панель просмотра журнала авторизаций</Header.Subheader>
                            </Header.Content>
                        </Header>
                    </Segment>
                    <Breadcrumb>
                        <Breadcrumb.Section as={NavLink} to={'/'} link>Главная страница</Breadcrumb.Section>
                        <Breadcrumb.Divider icon='right chevron' />
                        <Breadcrumb.Section as={NavLink} to={'/administration'} link>Администраторская панель</Breadcrumb.Section>
                        <Breadcrumb.Divider icon='right arrow' />
                        <Breadcrumb.Section active>Панель просмотра журнала авторизаций</Breadcrumb.Section>
                    </Breadcrumb>

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
            Alert.error('У Вас недостаточно прав для просмотра данной страницы');
        });
    }



}

export default Admin