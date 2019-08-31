import React, { Component } from 'react';
import './Info.css';
import {Divider, Container, Image, Message} from "semantic-ui-react";
import back from "../img/info/back.png";


class Info extends Component {

    constructor(props) {

        super(props);

        this.state = {
            name: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {

    }


    render() {
        return (
            <div className="info-container">
                <div className="info-content">
                    <Container textAlign='justified'>
                        <p>
                            <Message style={{textAlign: 'center'}} color='blue'>Информация о портале BotMasterZzz!</Message>
                        </p>
                        <Divider />

                        <div className="image-container">
                             <Image centered src={back} fluid />
                        </div>
                    </Container>
                </div>
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

export default Info