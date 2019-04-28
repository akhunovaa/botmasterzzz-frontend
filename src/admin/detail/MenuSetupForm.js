import React, { Component } from 'react';
import './MenuSetupForm.css';
import {Table, Button, Modal, Checkbox, Grid, Input, TextArea, Container, List} from 'semantic-ui-react'

class MainSetupForm  extends Component {

    show = () => () => this.setState({ open: true });
    showEdit = () => () => this.setState({ openEdit: true });
    showDelete = () => () => this.setState({ openDelete: true });
    showGroup = () => () => this.setState({ openGroup: true });
    checkList = () => this.setState({ list: true});
    checkBlock = () => this.setState({ block: true});
    close = () => this.setState({ open: false, openEdit: false, openDelete: false, openGroup: false});
    handleConfirm = () => this.setState({ result: 'confirmed', openDelete: false });
    handleCancel = () => this.setState({ result: 'cancelled', openDelete: false });

    constructor(props, context) {
        super(props, context);
        this.state = {
            list: false,
            block: false,
            type: '',
            open: false,
            openEdit: false,
            openDelete: false,
            openGroup: false,
            info: '',
            answer: '',
            privacy: '',
            menuCommand: '',
            result: '',
            menuName:'',
            newChild:'',
            childMenu:''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        const { open, openEdit, openDelete, result, openGroup } = this.state;
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
                                        <Checkbox className="checkbox-menu" id="list" name="list" label={{ children: 'Список' }} onChange={this.checkList} value={this.state.list} fitted/>
                                        <Checkbox className="checkbox-menu" id="block" name="block" label={{ children: 'Блок' }} onChange={this.checkBlock} value={this.state.block} fitted/>
                                    </li>
                                    <li className="li-menu">
                                        <Button onClick={this.show()} icon="plus" circular basic color="black" />
                                        <Button onClick={this.showEdit()} icon="pencil" circular basic color="black"/>
                                        <Button onClick={this.showDelete()} icon="trash" circular basic color="black"/>
                                        <Button onClick={this.showGroup()}  content='Сгруппировать' icon='object group outline' circular basic color="black" labelPosition='left' className="group-button-menu"/>
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
                                        <p>
                                            Result: <em>{result}</em>
                                        </p>
                                    </li>
                                    <Button color="vk" id="button" type="submit" className="menu-save">Сохранить</Button>
                                </ol>
                                    </Grid.Column>
                                    <Grid.Column verticalAlign='middle'>
                                    </Grid.Column>
                                </Grid>
                            </fieldset>
                <form onSubmit={this.handleSubmit}>

                        </form>
                <Modal centered={false} dimmer="blurring" open={open} onClose={this.close} size="tiny" className="modal-conf">
                            <Modal.Header className="modal-header">Добавить пункт меню</Modal.Header>
                        <Modal.Content className="modal-content">
                            <fieldset className="fieldset-modal-menu">
                            <Grid columns={1} textAlign="left">
                                <Grid.Column>
                                    <ol className="ol-modal-menu">
                                        <li className="li-modal-menu">
                                            <label className="labelx" form="name">Название пункта меню</label>
                                            <Input className="inputx" type="text" id="info" name="info"
                                                   placeholder="Информация" value={this.state.info} onChange={this.handleInputChange} required/>
                                        </li>
                                        <li className="li-modal-menu">
                                            <label className="labelx" form="menuCommand">Команда</label>
                                            <Input className="inputx" type="text" id="menuCommand" name="menuCommand"
                                                   placeholder="/info" value={this.state.menuCommand} onChange={this.handleInputChange} required/>
                                        </li>
                                        <li className="li-modal-menu">
                                            <label className="labelx" form="answer">Ответ</label>
                                            <TextArea className="text-area text-area-modal" rows={2}
                                                      id="answer" name="answer" value={this.state.answer} onChange={this.handleInputChange}/>
                                        </li>
                                        <li className="li-modal-menu">
                                            <label className="labelx" form="privacy">Видимость</label>
                                            <Checkbox slider
                                                      id="privacy" name="privacy" value={this.state.privacy} onChange={this.handleInputChange}/>
                                        </li>
                                    </ol>
                                </Grid.Column>
                            </Grid>

                        </fieldset>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button
                            className="menu-update"
                            color='vk'
                            content="Добавить"
                            onClick={this.close}
                        />
                    </Modal.Actions>
                </Modal>

                <Modal centered={false} dimmer="blurring" open={openEdit} onClose={this.close} size="tiny" className="modal-conf">
                            <Modal.Header className="modal-header">Изменить пункт меню</Modal.Header>
                        <Modal.Content className="modal-content">
                            <fieldset className="fieldset-modal-menu">
                            <Grid columns={1} textAlign="left">
                                <Grid.Column>
                                    <ol className="ol-modal-menu">
                                        <li className="li-modal-menu">
                                            <label className="labelx" form="name">Название пункта меню</label>
                                            <Input className="inputx" type="text" id="info" name="info"
                                                   placeholder="Информация" value={this.state.info} onChange={this.handleInputChange} required/>
                                        </li>
                                        <li className="li-modal-menu">
                                            <label className="labelx" form="menuCommand">Команда</label>
                                            <Input className="inputx" type="text" id="menuCommand" name="menuCommand"
                                                   placeholder="/info" value={this.state.menuCommand} onChange={this.handleInputChange} required/>
                                        </li>
                                        <li className="li-modal-menu">
                                            <label className="labelx" form="answer">Ответ</label>
                                            <TextArea className="text-area text-area-modal" rows={2}
                                                      id="answer" name="answer" value={this.state.answer} onChange={this.handleInputChange}/>
                                        </li>
                                        <li className="li-modal-menu">
                                            <label className="labelx" form="privacy">Видимость</label>
                                            <Checkbox slider
                                                      id="privacy" name="privacy" value={this.state.privacy} onChange={this.handleInputChange}/>
                                        </li>
                                    </ol>
                                </Grid.Column>
                            </Grid>

                        </fieldset>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button
                            className="menu-update"
                            color='vk'
                            content="Изменить"
                            onClick={this.close}
                        />
                    </Modal.Actions>
                </Modal>

                <Modal centered={false} size="mini" dimmer="blurring" open={openDelete} onClose={this.close} closeOnDimmerClick={false} className="modal-conf-delete">
                    <Modal.Header className="modal-header">Удалить пункт меню</Modal.Header>
                    <Modal.Content>
                        <Container className="modal-container">
                            <p>
                               Вы уверены что хотите удалить данный пункт меню?
                            </p>
                        </Container>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button
                            color='vk'
                            content="Отменить"
                            onClick={this.handleCancel}
                        />
                        <Button
                            className="menu-update"
                            negative
                            content="Удалить"
                            onClick={this.handleConfirm}
                        />
                    </Modal.Actions>
                </Modal>

                <Modal centered={false} dimmer="blurring" open={openGroup} onClose={this.close} closeOnDimmerClick={true} size="tiny" className="modal-conf-group">
                    <Modal.Header className="modal-header">Сгруппировать пункты меню</Modal.Header>
                    <Modal.Content className="modal-content">
                        <fieldset className="fieldset-modal-menu">
                            <Grid columns={1} textAlign="left">
                                <Grid.Column>
                                    <ol className="ol-modal-menu">
                                        <li className="li-modal-menu-checkbox">
                                            <Checkbox className="checkbox-modal-menu" id="list-modal" name="list-modal" label={{ children: 'Список' }} onChange={this.checkList} value={this.state.list} fitted/>
                                            <Checkbox className="checkbox-modal-menu" id="block-modal" name="block-modal" label={{ children: 'Блок' }} onChange={this.checkBlock} value={this.state.block} fitted/>
                                        </li>
                                        <li className="li-modal-menu">
                                            <label className="labelx" form="menuName">Главное меню</label>
                                            <Input className="inputx" type="text" id="menuName" name="menuName"
                                                   placeholder="/about_us" value={this.state.menuName} onChange={this.handleInputChange} required/>
                                        </li>
                                        <li className="li-modal-menu">
                                            <label className="labelx" form="childMenu">Добавить подменю</label>
                                            <Input className="inputx" type="text" id="childMenu" name="childMenu"
                                                   placeholder="/contacts" value={this.state.childMenu} onChange={this.handleInputChange} required/>
                                        </li>
                                        <li className="li-modal-menu">
                                            <List bulleted>
                                                <List.Item>/info<List.List>
                                                        <List.Item>/faq</List.Item>
                                                        <List.Item>/news</List.Item>
                                                </List.List>
                                                </List.Item>
                                            </List>
                                        </li>
                                    </ol>
                                </Grid.Column>
                            </Grid>

                        </fieldset>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button
                            className="menu-group"
                            color='vk'
                            content="Сгруппировать"
                            onClick={this.close}
                        />
                    </Modal.Actions>
                </Modal>
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