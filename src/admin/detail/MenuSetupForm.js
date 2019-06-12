import React, {Component} from 'react';
import './MenuSetupForm.css';
import {Button, Checkbox, Grid, Input, List, Modal, Popup, Table, TextArea} from 'semantic-ui-react'
import {commandCreateRequestSend, commandListGet} from "../../util/APIUtils";
import Alert from "react-s-alert";
import MenuCommandEditModal from "./modals/MenuCommandEditModal";
import MenuCommandDeleteModal from "./modals/MenuCommandDeleteModal";

class MainSetupForm  extends Component {

    _isMounted = false;

    show = () => () => this.setState({ open: true });
    showEdit = () => () => this.setState({ openEdit: true });
    showDelete = () => () => this.setState({ openDelete: true });
    showGroup = () => () => this.setState({ openGroup: true });
    checkList = () => this.setState({ list: true});
    checkBlock = () => this.setState({ block: true});


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
            commandName: '',
            answer: '',
            privacy: false,
            command: '',
            note: '',
            menuName:'',
            newChild:'',
            childMenu:'',
            commands: [],
            selectedRow: {
                id: '',
                command: '',
                commandName: '',
                answer: '',
                privacy: ''
            }
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.commandCreate = this.commandCreate.bind(this);
        this.close = this.close.bind(this);
        this.refresh = this.refresh.bind(this);
    }

    render() {
        const { open, openEdit, openDelete, openGroup } = this.state;

        let Commands = ({items}) => (
            <>
                {
                    items.map(item => (
                        <Table.Row onClick={(e) => this.handleRowClicked(item.id, e)} textAlign='center' id={item.id} key={item.id}>
                            <Popup content={item.command} trigger={<Table.Cell>{item.command}</Table.Cell>} />
                            <Popup content={item.commandName} trigger={<Table.Cell>{item.commandName}</Table.Cell>} />
                            <Popup content={item.answer} trigger={<Table.Cell>{item.answer}</Table.Cell>} />
                            <Table.Cell> <Checkbox fitted slider defaultChecked = {item.privacy}/></Table.Cell>
                            <Table.Cell style={{display: 'none'}}>{item.id}</Table.Cell>
                        </Table.Row>
                    ))}
            </>
        );

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
                                        <Checkbox className="checkbox-menu" id="list" name="list" label={{ children: 'Список' }} onChange={this.checkList} fitted/>
                                        <Checkbox className="checkbox-menu" id="block" name="block" label={{ children: 'Блок' }} onChange={this.checkBlock} fitted/>
                                    </li>
                                    <li className="li-menu">
                                        <Button onClick={this.show()} icon="plus" circular basic color="black" />
                                        <Button onClick={this.showEdit()} icon="pencil" circular basic color="black"/>
                                        <Button onClick={this.showDelete()} icon="trash" circular basic color="black"/>
                                        <Button onClick={this.showGroup()}  content='Сгруппировать' icon='object group outline' circular basic color="black" labelPosition='left' className="group-button-menu"/>
                                    </li>
                                    <li className="li-menu">
                                        <Table celled sortable unstackable verticalAlign='middle'>
                                            <Table.Header>
                                                <Table.Row textAlign={'center'}>
                                                    <Table.HeaderCell>Команда</Table.HeaderCell>
                                                    <Table.HeaderCell>Название</Table.HeaderCell>
                                                    <Table.HeaderCell>Ответ</Table.HeaderCell>
                                                    <Table.HeaderCell>Видимость</Table.HeaderCell>
                                                </Table.Row>
                                            </Table.Header>

                                            <Table.Body>
                                               <Commands items={this.state.commands}/>
                                            </Table.Body>
                                        </Table>
                                    </li>
                                    <Button color="vk" id="button" type="submit" className="menu-save">Сохранить</Button>
                                </ol>
                                    </Grid.Column>
                                    <Grid.Column verticalAlign='middle'>
                                    </Grid.Column>
                                </Grid>
                            </fieldset>

                <Modal dimmer="blurring" open={open} onClose={this.close} size="tiny" className="modal-conf">
                        <Modal.Header className="modal-header">Добавить пункт меню</Modal.Header>
                    <Modal.Content className="modal-content">
                            <fieldset className="fieldset-modal-menu"/>

                            <Grid columns={1} textAlign="left">
                                <Grid.Column>
                                    <ol className="ol-modal-menu">
                                        <li className="li-modal-menu">
                                            <label className="labelx" form="name">Наименование пункта меню</label>
                                            <Input className="inputx" type="text" id="commandName" name="commandName"
                                                   placeholder="Наименование пункта меню" value={this.state.commandName} onChange={this.handleInputChange} required/>
                                        </li>
                                        <li className="li-modal-menu">
                                            <label className="labelx" form="menuCommand">Команда</label>
                                            <Input className="inputx" type="text" id="command" name="command"
                                                   placeholder="/help" value={this.state.command} onChange={this.handleInputChange} required/>
                                        </li>
                                        <li className="li-modal-menu">
                                            <label className="labelx" form="answer">Ответ</label>
                                            <TextArea className="text-area text-area-modal" rows={2}
                                                      id="answer" name="answer" value={this.state.answer} onChange={this.handleInputChange} required/>
                                        </li>
                                        <li className="li-modal-menu">
                                            <label className="labelx" form="privacy">Видимость</label>
                                            <Checkbox slider id="privacy" name="privacy" defaultChecked={this.state.privacy} onChange={this.handleToggleChange}/>
                                        </li>
                                    </ol>
                                </Grid.Column>
                            </Grid>

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

                <MenuCommandEditModal selectedRow={this.state.selectedRow} project={this.state.project} open={openEdit} onClose={this.close} refresh={this.refresh}/>
                <MenuCommandDeleteModal selectedRow={this.state.selectedRow} project={this.state.project} open={openDelete} onClose={this.close} refresh={this.refresh}/>


                <Modal centered={false} dimmer="blurring" open={openGroup} onClose={this.close} closeOnDimmerClick={true} size="tiny" className="modal-conf-group">
                    <Modal.Header className="modal-header">Сгруппировать пункты меню</Modal.Header>
                    <Modal.Content className="modal-content">
                        <fieldset className="fieldset-modal-menu">
                            <Grid columns={1} textAlign="left">
                                <Grid.Column>
                                    <ol className="ol-modal-menu">
                                        <li className="li-modal-menu-checkbox">
                                            <Checkbox className="checkbox-modal-menu" id="list-modal" name="list-modal" label={{ children: 'Список' }} onChange={this.checkList} fitted/>
                                            <Checkbox className="checkbox-modal-menu" id="block-modal" name="block-modal" label={{ children: 'Блок' }} onChange={this.checkBlock} fitted/>
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

    componentWillUnmount() {
        this._isMounted = false;
    }

    componentDidMount() {
        this._isMounted = true;
        if (!this.state.commands) return;
        let projectId = this.state.project.id;
        let data = {
            "projectId": projectId
        };
        commandListGet(data)
            .then(response => {
                if (this._isMounted) {
                    this.setState({
                        commands : response.commands
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
            [inputName] : inputValue
        });
    }


    commandCreate(event) {
        event.preventDefault();
        if (!this.state.command) {
            this.close();
            Alert.warning('Необходимо ввести команду для пункта меню');
            return
        }else if (!this.state.commandName){
            this.close();
            Alert.warning('Необходимо ввести наименование команды для пункта меню');
            return
        }else if (!this.state.answer){
            this.close();
            Alert.warning('Необходимо ввести ответ для пункта меню');
            return
        }
        const projectCreateRequest = Object.assign({}, {
            'command': this.state.command,
            'commandName': this.state.commandName,
            'answer': this.state.answer,
            'projectId': this.state.project.id,
            'privacy': this.state.privacy
        });

        commandCreateRequestSend(projectCreateRequest)
            .then(response => {
                if (response.error) {
                    Alert.warning(response.error + '. Необходимо заново авторизоваться');
                }else if (response.success === false) {
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

    handleToggleChange = (e, { checked }) => {
        this.setState({
            privacy: checked
        });
    };

    handleRowClicked = (key, event) => {
        if ('THEAD' === event.target.parentNode.parentNode.tagName) {
            return;
        }
        let element = document.getElementById(key);
        let childNodes = element.parentNode.childNodes;
        for (let item of childNodes) {
            let classes = item.classList;
            if (classes.contains('clicked')) {
                setTimeout(function () {
                    item.classList.remove('clicked');
                }, 100);
            }
        }
        if (element.classList.contains('clicked')){
            setTimeout(function () {
                element.classList.remove('clicked');
            }, 100);
        }else {
            element.classList.add('clicked');
        }

        let selectedElementChildNodes = element.childNodes;
        var command = selectedElementChildNodes[0].innerHTML;
        var commandName = selectedElementChildNodes[1].innerHTML;
        var answer = selectedElementChildNodes[2].innerHTML;
        var privacy = selectedElementChildNodes[3].childNodes[1].classList.contains('checked');

        this.state.selectedRow = {
            id: key,
            command: command,
            commandName: commandName,
            answer: answer,
            privacy: privacy
        };
    };

    refresh (){
        this.componentDidMount()
    };

    close (){
        this.setState({ open: false, openEdit: false, openDelete: false, openGroup: false});
    };

}

export default MainSetupForm