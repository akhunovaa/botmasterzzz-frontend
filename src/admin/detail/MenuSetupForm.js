import React, {Component} from 'react';
import './MenuSetupForm.css';
import {Button, Checkbox, Container, Dropdown, Grid, Input, Modal, Popup, Table, TextArea} from 'semantic-ui-react'
import {
    commandCreateRequestSend,
    commandDeleteRequestSend,
    commandListGet,
    commandUpdateRequestSend
} from "../../util/APIUtils";
import Alert from "react-s-alert";
import MenuCommandGroupModal from "./modals/MenuCommandGroupModal";
import MenuCommandUnGroupModal from "./modals/MenuCommandUnGroupModal";

class MainSetupForm extends Component {

    _isMounted = false;

    constructor(props) {
        super(props);
        this.state = {
            project: props.project,
            list: false,
            block: false,
            type: '',
            open: false,
            openEdit: false,
            openDelete: false,
            openGroup: false,
            openUnGroup: false,
            commandName: '',
            commandType: '',
            answer: '',
            privacy: false,
            command: '',
            note: '',
            menuName: '',
            newChild: '',
            childMenu: '',
            commands: [],
            selectedRow: {
                id: '',
                command: '',
                commandName: '',
                commandType: '',
                answer: '',
                privacy: false,
                children: {
                    parentCommand: '',
                    firstChildCommand: '',
                    secondChildCommand: '',
                    thirdChildCommand: '',
                    fourthChildCommand: '',
                    fifthChildCommand: ''
                }
            },
            commandAnswerType: [
                {
                    key: 1,
                    text: 'Текст',
                    value: 'Текст',
                },
                {
                    key: 2,
                    text: 'Внутренняя кнопка чата',
                    value: 'Внутренняя кнопка чата',
                },
                {
                    key: 3,
                    text: 'Внешняя кнопка чата',
                    value: 'Внешняя кнопка чата',
                },
                {
                    key: 4,
                    text: 'Отправка изображения',
                    value: 'Отправка изображения',
                },
                {
                    key: 5,
                    text: 'Отправка случайного сообщения',
                    value: 'Отправка случайного сообщения из списка',
                }
            ],
            buttonStates: {
                saveButton: true,
                updateButton: true,
                deleteButton: true
            }
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.commandCreate = this.commandCreate.bind(this);
        this.close = this.close.bind(this);
        this.refresh = this.refresh.bind(this);
        this.handleSaveButton = this.handleSaveButton.bind(this);
        this.handleUpdateButton = this.handleUpdateButton.bind(this);
        this.handleDeleteButton = this.handleDeleteButton.bind(this);
        this.commandUpdate = this.commandUpdate.bind(this);
        this.commandDelete = this.commandDelete.bind(this);
    }

    show = () => () => this.setState({open: true});

    showEdit = () => () => this.setState({openEdit: true});

    showDelete = () => () => this.setState({openDelete: true});

    showGroup = () => () => this.setState({openGroup: true});

    showUnGroup = () => () => this.setState({openUnGroup: true});

    checkList = () => this.setState({list: true});

    checkBlock = () => this.setState({block: true});

    render() {
        const {open, openEdit, openDelete, openGroup, openUnGroup} = this.state;

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
                                    <Checkbox className="checkbox-menu" id="list" name="list"
                                              label={{children: 'Список'}} onChange={this.checkList} fitted/>
                                    <Checkbox className="checkbox-menu" id="block" name="block"
                                              label={{children: 'Блок'}} onChange={this.checkBlock} fitted/>
                                </li>
                                <li className="li-menu">
                                    <Button onClick={this.show()} icon="plus" circular basic color="black"/>
                                    <Button onClick={this.showEdit()} icon="pencil"
                                            disabled={this.state.buttonStates.updateButton} circular basic
                                            color="black"/>
                                    <Button onClick={this.showDelete()} icon="trash"
                                            disabled={this.state.buttonStates.deleteButton} circular basic
                                            color="black"/>
                                    <Button onClick={this.commandUpdate} icon="save"
                                            disabled={this.state.buttonStates.saveButton} circular basic color="black"/>
                                    <Button onClick={this.showGroup()} content='Сгруппировать'
                                            disabled={this.state.buttonStates.updateButton}
                                            icon='object group outline' circular basic color="black"
                                            labelPosition='left' className="group-button-menu"/>
                                    <Button onClick={this.showUnGroup()} content='Разгруппировать'
                                            disabled={this.state.buttonStates.updateButton}
                                            icon='object group outline' circular basic color="black"
                                            labelPosition='left' className="group-button-menu"/>
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
                                            {
                                                this.state.commands.map(item => (
                                                <Table.Row
                                                    onClick={(e) => this.handleRowClicked(item.id, item.commandType, e)}
                                                    textAlign='center' key={item.id} id={item.id}>

                                                    <Popup content={item.command}
                                                           trigger={<Table.Cell>{item.command}</Table.Cell>}/>
                                                    <Popup content={item.commandName}
                                                           trigger={<Table.Cell>{item.commandName}</Table.Cell>}/>
                                                    <Popup content={item.answer}
                                                           trigger={<Table.Cell>{item.answer}</Table.Cell>}/>
                                                    {/*<Table.Cell><Dropdown placeholder='Тип ответа' fluid selection*/}
                                                                          {/*id={item.commandType.id}*/}
                                                                          {/*name="type" options={this.state.commandAnswerType}*/}
                                                                          {/*defaultValue={item.commandType.name} disabled/></Table.Cell>*/}
                                                    <Popup content={item.answer}
                                                           trigger={<Table.Cell>{item.commandType.name}</Table.Cell>}/>
                                                    <Table.Cell><Checkbox fitted slider
                                                                          defaultChecked={item.privacy} disabled/></Table.Cell>
                                                    <Table.Cell style={{display: 'none'}}>{item.id}</Table.Cell>

                                                </Table.Row>

                                            ))
                                            }
                                        </Table.Body>
                                    </Table>
                                </li>
                                <li className="li-menu">
                                    <Button onClick={this.show()} icon="plus" circular basic color="black"/>
                                    <Button onClick={this.showEdit()} icon="pencil"
                                            disabled={this.state.buttonStates.updateButton} circular basic
                                            color="black"/>
                                    <Button onClick={this.showDelete()} icon="trash"
                                            disabled={this.state.buttonStates.deleteButton} circular basic
                                            color="black"/>
                                    <Button onClick={this.commandUpdate} icon="save"
                                            disabled={this.state.buttonStates.saveButton} circular basic color="black"/>
                                    <Button onClick={this.showGroup()} content='Сгруппировать'
                                            disabled={this.state.buttonStates.updateButton}
                                            icon='object group outline' circular basic color="black"
                                            labelPosition='left' className="group-button-menu"/>
                                    <Button onClick={this.showUnGroup()} content='Разгруппировать'
                                            disabled={this.state.buttonStates.updateButton}
                                            icon='object group outline' circular basic color="black"
                                            labelPosition='left' className="group-button-menu"/>
                                </li>
                            </ol>
                        </Grid.Column>
                        <Grid.Column verticalAlign='middle'>
                        </Grid.Column>
                    </Grid>
                </fieldset>

                <Modal dimmer="blurring" open={open} onClose={this.close} size="tiny" className="modal-conf">
                    <Modal.Header className="modal-header">Добавить пункт меню</Modal.Header>
                    <Modal.Content className="modal-content">
                        <Grid columns={1} textAlign="left">
                            <Grid.Column>
                                <ol className="ol-modal-menu">
                                    <li className="li-modal-menu">
                                        <label className="labelx" form="menuCommand">Команда</label>
                                        <Input className="inputx" type="text" id="command" name="command"
                                               placeholder="/help" onChange={this.handleInputChange} required/>
                                    </li>
                                    <li className="li-modal-menu">
                                        <label className="labelx" form="name">Команда для кнопки</label>
                                        <Input className="inputx" type="text" id="commandName" name="commandName"
                                               placeholder="Команда для кнопки" onChange={this.handleInputChange}
                                               required/>
                                    </li>
                                    <li className="li-modal-menu">
                                        <label className="labelx" form="answer">Ответ</label>
                                        <TextArea className="text-area text-area-modal" rows={2}
                                                  id="answer" name="answer" onChange={this.handleInputChange} required/>
                                    </li>
                                    <li className="li-modal-menu">
                                        <label className="labelx" form="answer">Тип возвращаемого ответа</label>
                                        <Dropdown onChange={this.handleDropdownChange} placeholder='Тип ответа' fluid
                                                  selection id="commandType" name="commandType"
                                                  options={this.state.commandAnswerType}/>
                                    </li>
                                    <li className="li-modal-menu">
                                        <label className="labelx" form="privacy">Видимость</label>
                                        <Checkbox slider id="privacy" name="privacy"
                                                  onChange={this.handleToggleChange}/>
                                    </li>
                                </ol>
                            </Grid.Column>
                        </Grid>

                        <div className='project-modal-input-line helper-message'>
                            <label className="labelx"/>
                        </div>

                        <div className='project-modal-input-line'>
                            <label className='input-form-label' form='newProjectNote'>Примечание:</label>
                            <Input fluid transparent className='profile-form-input' type='text' id='note'
                                   name="note"
                                   value={this.state.note} onChange={this.handleInputChange}/>
                        </div>

                        <div className='project-modal-helper-message'>
                            <label>Для наименования действует ограничение в 255 символов</label>
                        </div>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button
                            basic
                            content="Отменить"
                            onClick={this.close}
                        />
                        <Button
                            className="menu-update"
                            color='vk'
                            content="Добавить"
                            onClick={this.commandCreate}
                        />
                    </Modal.Actions>
                </Modal>


                <Modal dimmer="blurring" open={openEdit} onClose={this.close} size="tiny"
                       className="modal-conf">
                    <Modal.Header className="modal-header">Изменить пункт меню</Modal.Header>
                    <Modal.Content className="modal-content">
                        <Grid columns={1} textAlign="left">
                            <Grid.Column>
                                <ol className="ol-modal-menu">
                                    <li className="li-modal-menu">
                                        <label className="labelx" form="menuCommand">Команда</label>
                                        <Input className="inputx" type="text" id="command" name="command"
                                               placeholder="/help" defaultValue={this.state.selectedRow.command}
                                               onChange={this.handleInputChange} required/>
                                    </li>
                                    <li className="li-modal-menu">
                                        <label className="labelx" form="name">Команда для кнопки</label>
                                        <Input className="inputx" type="text" id="commandName" name="commandName"
                                               placeholder="Команда для кнопки"
                                               defaultValue={this.state.selectedRow.commandName}
                                               onChange={this.handleInputChange} required/>
                                    </li>
                                    <li className="li-modal-menu">
                                        <label className="labelx" form="answer">Ответ</label>
                                        <TextArea className="text-area text-area-modal" rows={4}
                                                  id="answer" name="answer" defaultValue={this.state.selectedRow.answer}
                                                  onChange={this.handleInputChange} required/>
                                    </li>
                                    <li className="li-modal-menu">
                                        <label className="labelx" form="answer">Тип возвращаемого ответа</label>
                                        <Dropdown onChange={this.handleDropdownUpdChange} placeholder='Тип ответа'
                                                  defaultValue={this.state.commandType.value} fluid selection
                                                  id="commandType" name="commandType"
                                                  options={this.state.commandAnswerType}/>
                                    </li>
                                    <li className="li-modal-menu">
                                        <label className="labelx" form="privacy">Видимость</label>
                                        <Checkbox slider id="privacy" name="privacy"
                                                  defaultChecked={this.state.selectedRow.privacy}
                                                  onChange={this.handleToggleChange}/>
                                    </li>
                                </ol>
                            </Grid.Column>
                        </Grid>
                        <div className='project-modal-input-line helper-message'>
                            <label className="labelx"/>
                        </div>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button
                            basic
                            content="Отменить"
                            onClick={this.close}
                        />
                        <Button
                            className="menu-update"
                            color='vk'
                            content="Изменить"
                            onClick={this.commandUpdate}
                        />

                    </Modal.Actions>
                </Modal>

                <Modal size="tiny" dimmer="blurring" open={openDelete} onClose={this.close}
                       className="modal-conf-delete">
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
                            onClick={this.close}
                        />
                        <Button
                            className="menu-update"
                            negative
                            content="Удалить"
                            onClick={this.commandDelete}
                        />
                    </Modal.Actions>
                </Modal>

                <MenuCommandUnGroupModal selectedRow={this.state.selectedRow} project={this.state.project}
                                         commands={this.state.commands}
                                         open={openUnGroup} onClose={this.close} refresh={this.refresh}/>

                <MenuCommandGroupModal selectedRow={this.state.selectedRow} project={this.state.project}
                                       commands={this.state.commands}
                                       open={openGroup} onClose={this.close} refresh={this.refresh}/>


            </div>
        );
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    componentDidMount() {
        if (!this.state.commands && this.state.commands.length === 0) return;
        let projectId = this.state.project.id;
        let data = {
            "projectId": projectId
        };
        this._isMounted = true;
        commandListGet(data)
            .then(response => {
                if (this._isMounted) {
                    this.setState({
                        commands: response.commands
                    })
                }
            }).catch(error => {
            Alert.error('У Вас недостаточно прав для просмотра данной страницы');
        });
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


    handleSaveButton(value) {
        this.setState({
            buttonStates: {
                saveButton: value
            }
        });
    }

    handleUpdateButton(value) {
        this.setState({
            buttonStates: {
                updateButton: value
            }
        });
    }

    handleDeleteButton(value) {
        this.setState({
            buttonStates: {
                deleteButton: value
            }
        });
    }

    handleDropdownChange = (e, {value}) => {
        let id;
        let iValue;
        let text;
        for (let i = 0; i < this.state.commandAnswerType.length; i++) {
            let iterValue = this.state.commandAnswerType[i].value;
            if (iterValue === value) {
                id = this.state.commandAnswerType[i].key;
                iValue = this.state.commandAnswerType[i].value;
                text = this.state.commandAnswerType[i].text;
            }
        }
        let element = document.getElementsByClassName('helper-message');
        if (id === 5) {
            if(element){
                for (let item of element) {
                    if (item) {
                            item.innerText = 'Необходимо разделить все сообщения в поле \'Ответ\' знаком %. ' +
                                'Пример: Первое случайное сообщение%Второе случайное сообщение%Третье случайное сообщение';
                    }
                }
            }
        }else if (id === 4) {
            if(element){
                for (let item of element) {
                    if (item) {
                        item.innerText = 'Необходимо указать ссылку на изображение в поле \'Ответ\'';
                    }
                }
            }
        }else {
            if(element){
                for (let item of element) {
                    if (item) {
                        item.innerText = '';
                    }
                }
            }
        }
        this.setState({
            commandType: {
                id: id,
                value: iValue,
                text: text
            }
        });
    };

    commandCreate(event) {
        event.preventDefault();
        if (!this.state.command) {
            this.close();
            Alert.warning('Необходимо ввести команду для пункта меню');
            return
        } else if (!this.state.commandName) {
            this.close();
            Alert.warning('Необходимо ввести наименование команды для пункта меню');
            return
        } else if (!this.state.answer) {
            this.close();
            Alert.warning('Необходимо ввести ответ для пункта меню');
            return
        }


        const projectCreateRequest = Object.assign({}, {
            'command': this.state.command,
            'commandName': this.state.commandName,
            'commandType': this.state.commandType,
            'answer': this.state.answer,
            'projectId': this.state.project.id,
            'privacy': this.state.privacy
        });

        commandCreateRequestSend(projectCreateRequest)
            .then(response => {
                if (response.error) {
                    Alert.warning(response.error + '. Необходимо заново авторизоваться');
                } else if (response.success === false) {
                    Alert.warning(response.message);
                } else {
                    this.close();
                    this.refresh();
                    Alert.success('Команда "' + response.command.command + '" успешно создана');
                }
            }).catch(error => {
            Alert.error('Что-то пошло не так! Попробуйте заново.' || (error && error.message));
        });


    }

    handleToggleChange = (e, {checked}) => {
        this.setState({
            privacy: checked
        });
    };

    handleDropdownUpdChange = (e, {value}) => {
        let id;
        for (let i = 0; i < this.state.commandAnswerType.length; i++) {
            let iterValue = this.state.commandAnswerType[i].value;
            if (iterValue === value) {
                id = this.state.commandAnswerType[i].key;
            }
        }

        let element = document.getElementsByClassName('helper-message');
        if (id === 5) {
            if(element){
                for (let item of element) {
                    if (item) {
                        item.innerText = 'Необходимо разделить все сообщения в поле \'Ответ\' знаком %. ' +
                            'Пример: Первое случайное сообщение%Второе случайное сообщение%Третье случайное сообщение';
                    }
                }
            }
        }else if (id === 4) {
            if(element){
                for (let item of element) {
                    if (item) {
                        item.innerText = 'Необходимо указать ссылку на изображение в поле \'Ответ\'';
                    }
                }
            }
        }else {
            if(element){
                for (let item of element) {
                    if (item) {
                        item.innerText = '';
                    }
                }
            }
        }

        this.setState({
            commandType: {
                id: id
            }
        });
    };


    handleRowClicked = (key, commandType, event) => {
        if ('THEAD' === event.target.parentNode.parentNode.tagName) {
            return;
        }
        this.handleUpdateButton(false);
        this.handleDeleteButton(false);

        let element = document.getElementById(key);
        let childNodes = element.parentNode.childNodes;
        for (let item of childNodes) {
            let classes = item.classList;
            if (classes.contains('clicked')) {
                // setTimeout(function () {
                //     item.classList.remove('clicked');
                // }, 100);
                item.classList.remove('clicked');
            }
        }
        if (element.classList.contains('clicked')) {
            setTimeout(function () {
                element.classList.remove('clicked');
            }, 100);
        } else {
            element.classList.add('clicked');
        }

        let selectedElementChildNodes = element.childNodes;
        let command = selectedElementChildNodes[0].innerHTML;
        let commandName = selectedElementChildNodes[1].innerHTML;
        let answer = selectedElementChildNodes[2].innerHTML;
        let selectedValue = selectedElementChildNodes[3].innerHTML;
        //let selectedValue = selectedElementChildNodes[3].lastChild ? selectedElementChildNodes[3].lastChild.childNodes[0].innerHTML : 1;

        let id;
        let iValue;
        let text;
        for (let i = 0; i < this.state.commandAnswerType.length; i++) {
            let iterValue = this.state.commandAnswerType[i].value;
            if (iterValue === selectedValue) {
                id = this.state.commandAnswerType[i].key;
                iValue = this.state.commandAnswerType[i].value;
                text = this.state.commandAnswerType[i].text;
            }
        }
        let commandiType = {id: id, value: iValue, text: text};

        let privacy = selectedElementChildNodes[4].childNodes[0].classList.contains('checked');
        this.state.commandType = commandiType;

        this.setState({
            selectedRow:
                {
                    id: key,
                    command: command,
                    commandName: commandName,
                    commandType: commandiType,
                    answer: answer,
                    privacy: privacy
                }
        });
        if (this.state.selectedRow.id === key) {
            return
        }
        this.handleSaveButton(true);
    };

    refresh() {
        this.componentDidMount();
    };

    close() {
        this.setState({open: false, openEdit: false, openDelete: false, openGroup: false, openUnGroup: false});
    };

    commandUpdate(event) {
        event.preventDefault();
        const projectUpdateRequest = Object.assign({}, {
            'command': this.state.command ? this.state.command : this.state.selectedRow.command,
            'commandName': this.state.commandName ? this.state.commandName : this.state.selectedRow.commandName,
            'commandType': this.state.commandType ? this.state.commandType : this.state.selectedRow.commandType,
            'answer': this.state.answer ? this.state.answer : this.state.selectedRow.answer,
            'projectId': this.state.project.id,
            'id': this.state.selectedRow.id,
            'privacy': this.state.privacy !== 'undefined' ? this.state.privacy : this.state.selectedRow.privacy
        });

        commandUpdateRequestSend(projectUpdateRequest)
            .then(response => {
                if (response.error) {
                    Alert.warning(response.error + '. Необходимо заново авторизоваться');
                } else if (response.success === false) {
                    Alert.warning(response.message);
                } else {
                    this.close();
                    this.refresh();
                    Alert.success('Команда "' + response.command.command + '" успешно обновлена');
                }
            }).catch(error => {
            Alert.error('Что-то пошло не так! Попробуйте заново.' || (error && error.message));
        });

    }

    commandDelete(event) {
        event.preventDefault();
        const projectDeleteRequest = Object.assign({}, {
            'projectId': this.state.project.id,
            'id': this.state.selectedRow.id,
        });
        commandDeleteRequestSend(projectDeleteRequest)
            .then(response => {
                if (response.error) {
                    Alert.warning(response.error + '. Необходимо заново авторизоваться');
                } else if (response.success === false) {
                    Alert.warning(response.message);
                } else {
                    this.close();
                    this.refresh();
                    Alert.success('Команда "' + response.command.command + '" успешно удалена');
                }
            }).catch(error => {
            Alert.error('Что-то пошло не так! Попробуйте заново.' || (error && error.message));
        });

    }

}

export default MainSetupForm