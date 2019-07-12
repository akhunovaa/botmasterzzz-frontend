import React, {Component} from 'react';
import {Button, Checkbox, Grid, Input, List, Modal, Dropdown} from 'semantic-ui-react'
import {commandGroupSaveRequest} from "../../../util/APIUtils";
import Alert from "react-s-alert";

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
            privacy: false,
            options: []
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.groupingSave = this.groupingSave.bind(this);
        this.handleToggleChange = this.handleToggleChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        if (this.props.selectedRow.id) {
            let opt = [];
            this.props.selectedRow.children = {};
            this.props.commands.map((e, i) => {
                if (this.props.selectedRow.commandType.id === e.commandType.id) {
                    opt.push({key: e.id, text: e.command, value: e.commandName });
                }
                if (this.props.selectedRow.id === e.id) {
                    if (e.parent) {
                        this.props.selectedRow.children.firstChildCommand = e.parent;
                        if (e.parent.parent) {
                            this.props.selectedRow.children.secondChildCommand = e.parent.parent;
                            if (e.parent.parent.parent) {
                                this.props.selectedRow.children.thirdChildCommand = e.parent.parent.parent;
                                if (e.parent.parent.parent.parent) {
                                    this.props.selectedRow.children.fourthChildCommand = e.parent.parent.parent.parent;
                                    if (e.parent.parent.parent.parent.parent) {
                                        this.props.selectedRow.children.fifthChildCommand = e.parent.parent.parent.parent.parent;
                                        this.props.selectedRow.children.parentCommand = e.parent.parent.parent.parent.parent;
                                    } else {
                                        this.props.selectedRow.children.parentCommand = e.parent.parent.parent.parent;
                                        // this.props.commands.map((y, u) => {
                                        //     if (y.parent && e.parent.parent.parent.parent.id === y.parent.id) {
                                        //         this.props.selectedRow.children.fifthChildCommand = y;
                                        //     }
                                        // });
                                    }
                                } else {
                                    this.props.selectedRow.children.parentCommand = e.parent.parent.parent;
                                    // this.props.commands.map((r, t) => {
                                    //     if (r.parent && e.parent.parent.parent.id === r.parent.id) {
                                    //         this.props.selectedRow.children.fourthChildCommand = r;
                                    //         this.props.commands.map((y, u) => {
                                    //             if (y.parent && r.id === y.parent.id) {
                                    //                 this.props.selectedRow.children.fifthChildCommand = y;
                                    //             }
                                    //         });
                                    //     }
                                    // });
                                }
                            } else {
                                this.props.selectedRow.children.parentCommand = e.parent.parent;
                                // this.props.commands.map((z, x) => {
                                //     if (z.parent && e.parent.parent.id === z.parent.id) {
                                //         this.props.selectedRow.children.thirdChildCommand = z;
                                //         this.props.commands.map((r, t) => {
                                //             if (r.parent && z.id === r.parent.id) {
                                //                 this.props.selectedRow.children.fourthChildCommand = r;
                                //                 this.props.commands.map((y, u) => {
                                //                     if (y.parent && r.id === y.parent.id) {
                                //                         this.props.selectedRow.children.fifthChildCommand = y;
                                //                     }
                                //                 });
                                //             }
                                //         });
                                //     }
                                // });
                            }
                        } else {
                            this.props.selectedRow.children.parentCommand = e.parent;
                                this.props.commands.map((a, s) => {
                                    if (a.parent && e.parent.id === a.parent.id) {
                                        this.props.selectedRow.children.secondChildCommand = a;
                                        this.props.commands.map((z, x) => {
                                            if (z.parent && a.id === z.parent.id) {
                                                this.props.selectedRow.children.thirdChildCommand = z;
                                                this.props.commands.map((r, t) => {
                                                    if (r.parent && z.id === r.parent.id) {
                                                        this.props.selectedRow.children.fourthChildCommand = r;
                                                        this.props.commands.map((y, u) => {
                                                            if (y.parent && r.id === y.parent.id) {
                                                                this.props.selectedRow.children.fifthChildCommand = y;
                                                            }
                                                        });
                                                    }
                                                });
                                            }
                                        });
                                    }
                                });
                        }
                    } else {
                        this.props.selectedRow.children.parentCommand = e;
                        this.props.commands.map((q, w) => {
                            if (q.parent && e.id === q.parent.id) {
                                this.props.selectedRow.children.firstChildCommand = q;
                                this.props.commands.map((a, s) => {
                                    if (a.parent && q.id === a.parent.id) {
                                        this.props.selectedRow.children.secondChildCommand = a;
                                        this.props.commands.map((z, x) => {
                                            if (z.parent && a.id === z.parent.id) {
                                                this.props.selectedRow.children.thirdChildCommand = z;
                                                this.props.commands.map((r, t) => {
                                                    if (r.parent && z.id === r.parent.id) {
                                                        this.props.selectedRow.children.fourthChildCommand = r;
                                                        this.props.commands.map((y, u) => {
                                                            if (y.parent && r.id === y.parent.id) {
                                                                this.props.selectedRow.children.fifthChildCommand = y;
                                                            }
                                                        });
                                                    }
                                                });
                                            }
                                        });
                                    }
                                });
                            }
                        });
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
                                        <label className="labelx" id="subMenu" form="childMenu">Добавить подменю</label>
                                        <Dropdown
                                            placeholder='Команда'
                                            fluid
                                            basic
                                            noResultsMessage={'Командные меню не найдены'}
                                            multiple
                                            search
                                            selection
                                            options={opt}
                                            onChange={this.handleChange}
                                        />
                                    </li>
                                    <li className="li-modal-menu">
                                        <List bulleted>
                                            <List.Item>{this.props.selectedRow.children.parentCommand.command + ' ' + this.props.selectedRow.children.parentCommand.commandName}
                                                <List.List>
                                                    {this.props.selectedRow.children.firstChildCommand ?
                                                        <List.Item>{this.props.selectedRow.children.firstChildCommand.command + ' | ' + this.props.selectedRow.children.firstChildCommand.commandName}</List.Item> : undefined}
                                                    {this.props.selectedRow.children.secondChildCommand ?
                                                        <List.Item>{this.props.selectedRow.children.secondChildCommand.command + ' | ' + this.props.selectedRow.children.secondChildCommand.commandName}</List.Item> : undefined}
                                                    {this.props.selectedRow.children.thirdChildCommand ?
                                                        <List.Item>{this.props.selectedRow.children.thirdChildCommand.command + ' | ' + this.props.selectedRow.children.thirdChildCommand.commandName}</List.Item> : undefined}
                                                    {this.props.selectedRow.children.fourthChildCommand ?
                                                        <List.Item>{this.props.selectedRow.children.fourthChildCommand.command + ' | ' + this.props.selectedRow.children.fourthChildCommand.commandName}</List.Item> : undefined}
                                                    {this.props.selectedRow.children.fifthChildCommand ?
                                                        <List.Item>{this.props.selectedRow.children.fifthChildCommand.command + ' | ' + this.props.selectedRow.children.fifthChildCommand.commandName}</List.Item> : undefined}
                                                </List.List>
                                            </List.Item>
                                        </List>
                                    </li>
                                    <div className='project-modal-helper-message'>
                                        <label>Для группировки подменю действует ограничение в 5 шт.</label>
                                    </div>
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
        let element = document.getElementById("subMenu");
        if (this.state.options.value.length > 5){
            if (!element.classList.contains('label-red')) {
                element.classList.add('label-red');
            }
            element.innerText = 'Добавить подменю \n \n Кол-во подменю превышает допустимую норму';
        }else {
            if (element.classList.contains('label-red')) {
                setTimeout(function () {
                    element.classList.remove('label-red');
                    element.innerText = 'Добавить подменю';
                }, 100);
            }
            let commandsGroupSave = [];
            this.props.commands.map((x, i) => {
            this.state.options.value.map((y, z) => {
                if (x.commandName === y){
                    commandsGroupSave.push(Object.assign({}, {
                        'projectId': this.props.project.id,
                        'id': x.id
                    }));
                }
            })});

            commandGroupSaveRequest(commandsGroupSave)
                .then(response => {
                    if (response.error) {
                        Alert.warning(response.error + '. Необходимо заново авторизоваться');
                    }else if (response.success === false) {
                        Alert.warning(response.message);
                    } else {
                        this.props.onClose();
                        this.forceUpdate();
                        Alert.success('Команды успешно сгруппированы');
                    }
                }).catch(error => {
                 Alert.error('Что-то пошло не так! Попробуйте заново.' || (error && error.message));
            });
        }
    }

    handleSubmit(event) {
        event.preventDefault();
    }


    handleChange(e, {value}) {
        this.setState({
            options: {value}
        });
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