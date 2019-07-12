import React, {Component} from 'react';
import {Button, Checkbox, Dropdown, Grid, Input, Modal, TextArea} from 'semantic-ui-react'
import Alert from "react-s-alert";
import {commandUpdateRequestSend} from "../../../util/APIUtils";

class MenuCommandEditModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            id: '',
            command: '',
            commandName: '',
            answer: '',
            commandType: '',
            privacy: false
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.commandUpdate = this.commandUpdate.bind(this);
        this.handleToggleChange = this.handleToggleChange.bind(this);
    }

    render() {

        if (this.props.selectedRow.id) {
            return (
                <Modal dimmer="blurring" open={this.props.open} onClose={this.props.onClose} size="tiny"
                       className="modal-conf">
                    <Modal.Header className="modal-header">Изменить пункт меню</Modal.Header>
                    <Modal.Content className="modal-content">
                        <Grid columns={1} textAlign="left">
                            <Grid.Column>
                                <ol className="ol-modal-menu">
                                    <li className="li-modal-menu">
                                        <label className="labelx" form="menuCommand">Команда</label>
                                        <Input className="inputx" type="text" id="command" name="command"
                                               placeholder="/help" defaultValue={this.props.selectedRow.command}
                                               onChange={this.handleInputChange} required/>
                                    </li>
                                    <li className="li-modal-menu">
                                        <label className="labelx" form="name">Команда для кнопки</label>
                                        <Input className="inputx" type="text" id="commandName" name="commandName"
                                               placeholder="Команда для кнопки"
                                               defaultValue={this.props.selectedRow.commandName}
                                               onChange={this.handleInputChange} required/>
                                    </li>
                                    <li className="li-modal-menu">
                                        <label className="labelx" form="answer">Ответ</label>
                                        <TextArea className="text-area text-area-modal" rows={4}
                                                  id="answer" name="answer" defaultValue={this.props.selectedRow.answer}
                                                  onChange={this.handleInputChange} required/>
                                    </li>
                                    <li className="li-modal-menu">
                                        <label className="labelx" form="answer">Тип возвращаемого ответа</label>
                                        <Dropdown onChange={this.handleDropdownChange} placeholder='Тип ответа'
                                                  defaultValue={this.props.selectedCommandType.value} fluid selection
                                                  id="commandType" name="commandType" options={this.props.options}/>
                                    </li>
                                    <li className="li-modal-menu">
                                        <label className="labelx" form="privacy">Видимость</label>
                                        <Checkbox slider id="privacy" name="privacy"
                                                  defaultChecked={this.props.selectedRow.privacy}
                                                  onChange={this.handleToggleChange}/>
                                    </li>
                                </ol>
                            </Grid.Column>
                        </Grid>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button
                            basic
                            content="Отменить"
                            onClick={this.props.onClose}
                        />
                        <Button
                            className="menu-update"
                            color='vk'
                            content="Изменить"
                            onClick={this.commandUpdate}
                        />

                    </Modal.Actions>
                </Modal>
            );
        } else {
            return <div>
            </div>
        }
    }

    handleInputChange(event) {
        const target = event.target;
        const inputName = target.name;
        const inputValue = target.value;
        this.setState({
            [inputName]: inputValue
        });
    }


    commandUpdate(event) {
        event.preventDefault();
        const projectUpdateRequest = Object.assign({}, {
            'command': this.state.command ? this.state.command : this.props.selectedRow.command,
            'commandName': this.state.commandName ? this.state.commandName : this.props.selectedRow.commandName,
            'commandType': this.state.commandType ? this.state.commandType : this.props.selectedRow.commandType,
            'answer': this.state.answer ? this.state.answer : this.props.selectedRow.answer,
            'projectId': this.props.project.id,
            'id': this.props.selectedRow.id,
            'privacy': this.state.privacy !== 'undefined' ? this.state.privacy : this.props.selectedRow.privacy
        });

        commandUpdateRequestSend(projectUpdateRequest)
            .then(response => {
                if (response.error) {
                    Alert.warning(response.error + '. Необходимо заново авторизоваться');
                } else if (response.success === false) {
                    Alert.warning(response.message);
                } else {
                    this.props.onClose();
                    this.forceUpdate();
                    Alert.success('Команда "' + response.command.command + '" успешно обновлена');
                }
            }).catch(error => {
            Alert.error('Что-то пошло не так! Попробуйте заново.' || (error && error.message));
        });

    }

    handleSubmit(event) {
        event.preventDefault();
    }

    handleToggleChange(e, {checked}) {
        this.setState({
            privacy: checked
        });
    };


    handleDropdownChange = (e, {value}) => {
        let id;
        for (let i = 0; i < this.props.options.length; i++) {
            let iterValue = this.props.options[i].value;
            if (iterValue === value) {
                id = this.props.options[i].key;
            }
        }
        this.setState({
            commandType: {
                id: id
            }
        });
    };

}

export default MenuCommandEditModal