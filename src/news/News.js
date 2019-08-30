import React, { Component } from 'react';
import './News.css';
import {Divider, Container, Header, Image, Message} from "semantic-ui-react";
import cake from '../img/news/cake.jpg';
import gears from '../img/news/gears.jpg';
import botFather from '../img/news/botFather.png';

class News extends Component {

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
            <div className="news-container">
                <div className="news-content">
                    <Container textAlign='justified'>
                        <b>01.04.2019</b>
                        <Divider />
                        <p>
                            <Image centered src={botFather} size='medium' circular />
                        </p>
                        <p>
                            Разработали презентационного бота, который бы мог вкратце описать возможности нашего сервиса.
                            Познакомиться с ним можно по ссылке: <a target href='https://t.me/botmasterzzzrobot'>BotMasterzzz</a>
                        </p>
                        <p>
                            <Message style={{textAlign: 'center'}} color='red'>Разработка нашего первого бота в сети Телеграмм</Message>
                        </p>
                        <b>24.03.2019</b>
                        <Divider />
                        <p>
                            <Image centered src={gears} size='medium' circular />
                        </p>
                        <p>
                            Запущен сырой вариант серверной части приложения, без внешней оболочки - веб сайта.
                        </p>
                        <p>
                            <Message style={{textAlign: 'center'}} color='red'>Стадия тестирования и обткатки приложения</Message>
                        </p>
                        <b>12.02.2019</b>
                        <Divider />
                        <p>
                            <Image centered src={cake} size='medium' circular />
                        </p>
                        <p>
                            В этот день зародилась идея разработать приложение, котрое бы помогло многим людям в разработке своего собственного бота
                            в социальных сетях и для того чтобы создать и развивать бота - знаний программирования знать было не нужно.
                            C Днем Рождения BotMasterZzz!
                        </p>
                        <p>
                            <Message style={{textAlign: 'center'}} color='red'>C Днем Рождения BotMasterZzz!</Message>
                        </p>

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

export default News