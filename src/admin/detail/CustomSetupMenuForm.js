import React, {Component} from 'react';
import './CustomSetupMenuForm.css';
import {Button, Grid, Table} from "semantic-ui-react";


class CustomSetupMenuForm extends Component {

    _isMounted = false;

    constructor(props) {
        super(props);
        this.state = {
            project: props.project,
        };
        this.handleInputChange = this.handleInputChange.bind(this);

    }


    render() {

        return (
            <div className="custom-menu-form-container">
                <fieldset className="fieldset-menu">
                    <legend className="legend-custom-main">
                        Дополнительные пункты меню
                    </legend>
                    <Grid columns={1} textAlign="left">
                        <Grid.Column>
                            <ol className="ol-menu">
                                <li className="li-menu">
                                    <label form="name">Создание и редактирование специальных пунктов меню:</label>
                                </li>
                                <li className="li-menu">
                                    <Table celled sortable unstackable verticalAlign='middle'>
                                        <Table.Header>
                                            <Table.Row textAlign={'center'}>
                                                <Table.HeaderCell>Команда</Table.HeaderCell>
                                                <Table.HeaderCell>Команда для кнопки</Table.HeaderCell>
                                                <Table.HeaderCell>Ответ</Table.HeaderCell>
                                                <Table.HeaderCell>Тип ответа</Table.HeaderCell>
                                                <Table.HeaderCell>Видимость</Table.HeaderCell>
                                            </Table.Row>
                                        </Table.Header>
                                        <Table.Body>

                                        </Table.Body>
                                    </Table>
                                </li>
                                <li className="li-menu">
                                </li>
                            </ol>
                        </Grid.Column>
                    </Grid>
                </fieldset>
            </div>
        );
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    componentDidMount() {

    }

    handleSubmit(event) {
        event.preventDefault();
    }

    handleInputChange(event) {
        const target = event.target;
        const inputName = target.name;
        const inputValue = target.value;

        this.setState({
            [inputName]: inputValue
        });
    }


}

export default CustomSetupMenuForm