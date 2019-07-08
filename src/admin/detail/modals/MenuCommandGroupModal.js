import React, {Component} from 'react';
import {Button, Checkbox, Grid, Input, List, Modal} from 'semantic-ui-react'

class MenuCommandGroupModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            id: '',
            command: '',
            menuName: '',
            answer: '',
            commandType: '',
            privacy: false
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.groupingSave = this.groupingSave.bind(this);
        this.handleToggleChange = this.handleToggleChange.bind(this);
    }

    render() {
        if (this.props.selectedRow.id) {
            this.props.selectedRow.children = {};
            this.props.commands.map((e, i) => {
                if (this.props.selectedRow.id === e.id) {
                    if (e.parent) {
                        this.props.selectedRow.children.firstChildCommand = e.parent;
                        if (e.parent.parent){
                            this.props.selectedRow.children.secondChildCommand = e.parent.parent;
                            if (e.parent.parent.parent){
                                this.props.selectedRow.children.thirdChildCommand = e.parent.parent.parent;
                                if (e.parent.parent.parent.parent){
                                    this.props.selectedRow.children.fourthChildCommand = e.parent.parent.parent.parent;
                                    if (e.parent.parent.parent.parent.parent){
                                        this.props.selectedRow.children.fifthChildCommand = e.parent.parent.parent.parent.parent;
                                        this.props.selectedRow.children.parentCommand = e.parent.parent.parent.parent.parent;
                                    }else{
                                        this.props.selectedRow.children.parentCommand = e.parent.parent.parent.parent;
                                    }
                                }else {
                                    this.props.selectedRow.children.parentCommand = e.parent.parent.parent;
                                }
                            }else {
                                this.props.selectedRow.children.parentCommand = e.parent.parent;
                            }
                        }else {
                            this.props.selectedRow.children.parentCommand = e.parent;
                        }
                    }else {
                        this.props.selectedRow.children.parentCommand = e;
                    }
                }
            });

                    return (
                <Modal dimmer="blurring" open={this.props.open} onClose={this.props.onClose} size="tiny"
                       className="modal-conf-group">
                    <Modal.Header className="modal-header">Сгруппировать пункты меню</Modal.Header>
                    <Modal.Content className="modal-content">
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
                                        <label className="labelx" form="menuName">Родительская команда</label>
                                        <Input className="inputx" type="text" id="menuName" name="menuName"
                                               placeholder="/about_us"
                                               defaultValue={this.props.selectedRow.children.parentCommand.command}
                                               onChange={this.handleInputChange} disabled/>
                                    </li>
                                    <li className="li-modal-menu">
                                        <label className="labelx" form="childMenu">Добавить подменю</label>
                                        <Input className="inputx" type="text" id="childMenu" name="childMenu"
                                               placeholder="/contacts" value={this.state.childMenu}
                                               onChange={this.handleInputChange} required/>
                                    </li>
                                    <li className="li-modal-menu">
                                        <List bulleted>
                                                <List.Item>{this.props.selectedRow.children.parentCommand.command + ' ' + this.props.selectedRow.children.parentCommand.commandName}
                                                    <List.List>
                                                        {this.props.selectedRow.children.firstChildCommand ? <List.Item>{this.props.selectedRow.children.firstChildCommand.command + ' | ' + this.props.selectedRow.children.firstChildCommand.commandName}</List.Item> : undefined}
                                                        {this.props.selectedRow.children.secondChildCommand ? <List.Item>{this.props.selectedRow.children.secondChildCommand.command + ' | ' + this.props.selectedRow.children.secondChildCommand.commandName}</List.Item> : undefined}
                                                        {this.props.selectedRow.children.thirdChildCommand ? <List.Item>{this.props.selectedRow.children.thirdChildCommand.command + ' | ' + this.props.selectedRow.children.thirdChildCommand.commandName}</List.Item> : undefined}
                                                        {this.props.selectedRow.children.fourthChildCommand ? <List.Item>{this.props.selectedRow.children.fourthChildCommand.command + ' | ' + this.props.selectedRow.children.fourthChildCommand.commandName}</List.Item> : undefined}
                                                        {this.props.selectedRow.children.fifthChildCommand ? <List.Item>{this.props.selectedRow.children.fifthChildCommand.command + ' | ' + this.props.selectedRow.children.fifthChildCommand.commandName}</List.Item> : undefined}
                                                    </List.List>
                                                </List.Item>
                                        </List>
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
                            className="menu-group"
                            color='vk'
                            content="Сгруппировать"
                            onClick={this.groupingSave}
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


    groupingSave(event) {
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

        // commandUpdateRequestSend(projectUpdateRequest)
        //     .then(response => {
        //         if (response.error) {
        //             Alert.warning(response.error + '. Необходимо заново авторизоваться');
        //         }else if (response.success === false) {
        //             Alert.warning(response.message);
        //         } else {
        //             this.props.onClose();
        //             this.props.refresh();
        //             Alert.success('Команда "' + response.command.command + '" успешно обновлена');
        //         }
        //     }).catch(error => {
        //      Alert.error('Что-то пошло не так! Попробуйте заново.' || (error && error.message));
        // });

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

export default MenuCommandGroupModal