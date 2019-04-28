import React, { Component } from 'react';
import './AutoPostSetupForm.css';
import {Button, Modal, Checkbox, Grid, Input, TextArea, Container, List} from 'semantic-ui-react'

class AutoPostSetupForm  extends Component {

    show = () => () => this.setState({ open: true });
    showEdit = () => () => this.setState({ openEdit: true });
    showDelete = () => () => this.setState({ openDelete: true });
    close = () => this.setState({ open: false, openEdit: false, openDelete: false});
    handleConfirm = () => this.setState({ result: 'confirmed', openDelete: false });
    handleCancel = () => this.setState({ result: 'cancelled', openDelete: false });

    constructor(props, context) {
        super(props, context);
        this.state = {
            open: false,
            openEdit: false,
            openDelete: false,
            result: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        const { open, result, openEdit, openDelete } = this.state;
        return (
            <div className="auto-post-container">
                            <fieldset className="fieldset-menu">
                                <legend className="auto-post-form-container-label">
                                    Настройка автопостинга
                                </legend>
                                <Grid columns={1} textAlign="left">
                                <Grid.Column>
                                <ol className="ol-menu">
                                    <li className="li-menu">
                                        <Input
                                            className="menu-update"
                                            icon='vk'
                                            iconPosition='left'
                                            label={{ tag: true, content: 'vk.com' }}
                                            labelPosition='right'
                                            placeholder='https://vk.com/botmasterzzz'
                                            size={'large'}
                                        />
                                    </li>
                                    <li className="li-menu">
                                        <Input
                                            className="menu-update"
                                            icon='twitter'
                                            iconPosition='left'
                                            label={{ tag: true, content: 'twitter.com' }}
                                            labelPosition='right'
                                            placeholder='https://twitter.com/botmasterzzz'
                                            size={'large'}
                                        />
                                    </li>
                                    <li className="li-menu">
                                        <Input
                                            className="menu-update"
                                            icon='facebook'
                                            iconPosition='left'
                                            label={{ tag: true, content: 'facebook.com' }}
                                            labelPosition='right'
                                            placeholder='https://facebook.com/botmasterzzz'
                                            size={'large'}
                                        />
                                    </li>
                                    <li className="li-menu">
                                        <Input
                                            className="menu-update"
                                            icon='youtube'
                                            iconPosition='left'
                                            label={{ tag: true, content: 'youtube.com' }}
                                            labelPosition='right'
                                            placeholder='https://youtube.com/botmasterzzz'
                                            size={'large'}
                                        />
                                    </li>
                                    <Button color="vk" id="button" type="submit" className="menu-save">Сохранить</Button>
                                </ol>
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

export default AutoPostSetupForm