import React, {Component} from 'react';
import {Button, Container, Modal} from 'semantic-ui-react'
import Alert from "react-s-alert";
import {commandDeleteRequestSend} from "../../../util/APIUtils";

class MenuCommandDeleteModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            id: '',
            command: '',
            commandName: '',
            answer: '',
            privacy: false
        };
        this.commandDelete = this.commandDelete.bind(this);
    }

    render() {

        if (this.props.selectedRow.id) {
            return (
                <Modal size="tiny" dimmer="blurring" open={this.props.open} onClose={this.props.onClose} className="modal-conf-delete">
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
                            onClick={this.props.onClose}
                        />
                        <Button
                            className="menu-update"
                            negative
                            content="Удалить"
                            onClick={this.commandDelete}
                        />
                    </Modal.Actions>
                </Modal>
            );
        } else {
            return <div>
            </div>
        }
    }

    commandDelete(event) {
        event.preventDefault();
        const projectDeleteRequest = Object.assign({}, {
            'projectId': this.props.project.id,
            'id': this.props.selectedRow.id,
        });

        commandDeleteRequestSend(projectDeleteRequest)
            .then(response => {
                if (response.error) {
                    Alert.warning(response.error + '. Необходимо заново авторизоваться');
                }else if (response.success === false) {
                    Alert.warning(response.message);
                } else {
                    this.props.onClose();
                    this.forceUpdate();
                    Alert.success('Команда "' + response.command.command + '" успешно удалена');
                }
            }).catch(error => {
             Alert.error('Что-то пошло не так! Попробуйте заново.' || (error && error.message));
        });

    }

}

export default MenuCommandDeleteModal