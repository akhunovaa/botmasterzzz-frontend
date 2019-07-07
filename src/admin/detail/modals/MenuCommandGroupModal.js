import React, {Component} from 'react';
import {Button, Checkbox, Grid, Input, Modal, List} from 'semantic-ui-react'
import Alert from "react-s-alert";
import {commandUpdateRequestSend} from "../../../util/APIUtils";

class MenuCommandGroupModal extends Component {

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
                <Modal dimmer="blurring" open={this.props.open} onClose={this.props.onClose} size="tiny" className="modal-conf-group">
                    <Modal.Header className="modal-header">Сгруппировать пункты меню</Modal.Header>
                    <Modal.Content className="modal-content">
                        <fieldset className="fieldset-modal-menu">
                            <Grid columns={1} textAlign="left">
                                <Grid.Column>
                                    <ol className="ol-modal-menu">
                                        <li className="li-modal-menu-checkbox">
                                            <Checkbox className="checkbox-modal-menu" id="list-modal" name="list-modal"
                                                      label={{children: 'Список'}} onChange={this.checkList} fitted/>
                                            <Checkbox className="checkbox-modal-menu" id="block-modal"
                                                      name="block-modal" label={{children: 'Блок'}}
                                                      onChange={this.checkBlock} fitted/>
                                        </li>
                                        <li className="li-modal-menu">
                                            <label className="labelx" form="menuName">Главное меню</label>
                                            <Input className="inputx" type="text" id="menuName" name="menuName"
                                                   placeholder="/about_us" value={this.state.menuName}
                                                   onChange={this.handleInputChange} required/>
                                        </li>
                                        <li className="li-modal-menu">
                                            <label className="labelx" form="childMenu">Добавить подменю</label>
                                            <Input className="inputx" type="text" id="childMenu" name="childMenu"
                                                   placeholder="/contacts" value={this.state.childMenu}
                                                   onChange={this.handleInputChange} required/>
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
                            basic
                            content="Отменить"
                            onClick={this.props.onClose}
                        />
                        <Button
                            className="menu-group"
                            color='vk'
                            content="Сгруппировать"
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
                }else if (response.success === false) {
                    Alert.warning(response.message);
                } else {
                    this.props.onClose();
                    this.props.refresh();
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


    handleDropdownChange = (e, { value }) => {
        let id;
        for (let i = 0; i < this.props.options.length; i++) {
            let iterValue = this.props.options[i].value;
            if (iterValue === value){
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

export default MenuCommandGroupModal