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
                        <p style={{textAlign: 'center', color: 'blue'}}>
                           Будущее уже наступило с Botmasterzz!
                        </p>
                        <p style={{textAlign: 'center', color: 'blue'}}>
                            Botmasterzz - это уникальный сервис, который поможет вам самим без чьей либо помощи разработать чат-бота.
                            Что может чат бот? Возможности чат бота - по настоящему могут впечатлить. С его помощью можно создать полноценный интернет магазин, личного секретаря, каталог товаров и многое другое. Это только вам решать .
                            За дополнительной информацией обращайтесь. Наши специалисты проинструктируют вас о том как создать собственного чат-бота с нуля!
                        </p>
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