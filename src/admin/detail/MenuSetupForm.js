import React, { Component } from 'react';
import './MenuSetupForm.css';
import {Table, Button, Dropdown, Input, Checkbox, Grid} from 'semantic-ui-react'

class MainSetupForm  extends Component {
    state = { log: [] };
    constructor(props, context) {
        super(props, context);
        this.state = {
            list: '',
            block: '',
            type: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div className="menu-form-container">

                            <fieldset className="fieldset-menu">
                                <legend className="legend-main">
                                    Настройка меню
                                </legend>
                                <Grid columns={1} textAlign="left">
                                <Grid.Column>
                                <ol className="ol-menu">
                                    <li className="li-menu">
                                        <label className="label-menu" form="name">Настройка меню:</label>
                                        <Checkbox className="checkbox-menu" id="list" name="list" label={{ children: 'Список' }} onChange={this.handleInputChange} defaultChecked fitted/>
                                        <Checkbox className="checkbox-menu" id="block" name="block" label={{ children: 'Блок' }} onChange={this.handleInputChange} fitted/>
                                    </li>
                                    <li className="li-menu">
                                        <Button icon="plus" circular basic color="black"/>
                                        <Button icon="pencil" circular basic color="black"/>
                                        <Button icon="trash" circular basic color="black"/>
                                        <Button content='Сгруппировать' icon='object group outline' circular basic color="black" labelPosition='left' className="group-button-menu"/>
                                    </li>
                                    <li className="li-menu">
                                        <Table celled selectable>
                                            <Table.Header>
                                                <Table.Row>
                                                    <Table.HeaderCell>Команда</Table.HeaderCell>
                                                    <Table.HeaderCell>Название</Table.HeaderCell>
                                                    <Table.HeaderCell>Ответ</Table.HeaderCell>
                                                    <Table.HeaderCell>Видимость</Table.HeaderCell>
                                                </Table.Row>
                                            </Table.Header>

                                            <Table.Body>
                                                <Table.Row>
                                                    <Table.Cell>/info</Table.Cell>
                                                    <Table.Cell>Информация</Table.Cell>
                                                    <Table.Cell>Some text</Table.Cell>
                                                    <Table.Cell><Checkbox slider defaultChecked/></Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell>/faq</Table.Cell>
                                                    <Table.Cell>FAQ</Table.Cell>
                                                    <Table.Cell>Some text</Table.Cell>
                                                    <Table.Cell><Checkbox slider defaultChecked/></Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell>/contacts</Table.Cell>
                                                    <Table.Cell>Контакты</Table.Cell>
                                                    <Table.Cell>Some text</Table.Cell>
                                                    <Table.Cell><Checkbox slider /></Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell>/about_us</Table.Cell>
                                                    <Table.Cell>О Нас</Table.Cell>
                                                    <Table.Cell>Some text</Table.Cell>
                                                    <Table.Cell><Checkbox slider defaultChecked/></Table.Cell>
                                                </Table.Row>
                                                <Table.Row>
                                                    <Table.Cell> </Table.Cell>
                                                    <Table.Cell> </Table.Cell>
                                                    <Table.Cell> </Table.Cell>
                                                    <Table.Cell><Checkbox slider /></Table.Cell>
                                                </Table.Row>

                                            </Table.Body>
                                        </Table>
                                    </li>
                                    <Button color="blue" id="button" type="submit" className="menu-save">Сохранить</Button>
                                </ol>
                                    </Grid.Column>
                                    <Grid.Column verticalAlign='middle'>
                                    </Grid.Column>
                                </Grid>
                            </fieldset>
                <form onSubmit={this.handleSubmit}>
                        </form>
            </div>
        );
}

    handleSubmit(event) {
        event.preventDefault();
    }


    handleInputChange(event) {
        const target = event.target;
        const inputName = target.name;
        const inputValue = target.value;

        this.setState({
            [inputName] : inputValue
        });
    }

}

export default MainSetupForm