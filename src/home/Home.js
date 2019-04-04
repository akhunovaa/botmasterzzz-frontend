import React, { Component } from 'react';
import '../styles/style.css';
import preview from '../img/preview.png';
import botm from '../img/botmasterzzz.png';
import dc from '../img/5ba3f7d7fd5c6c28dc.png';
import a4 from '../img/17a804837802700ea4.jpg';
import a9 from '../img/50d0312845a05e6da9.png';
import semy from '../img/b397dfcefc6da0dc70.jpg';

class Home extends Component {
    render() {
        return (
            <section>
                <section className="call_to_action">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <img src={botm} className="cta_logo" alt="BOTMASTERZZZ Logo"/>
                            </div>
                            <div className="col-md-8">
                                <h1>Разрабатываем удобных ботов для Telegram</h1>

                                <p>Бот — это аккаунт в мессенджере Telegram, выполняющий запрограммированные действия
                                    при получении
                                    определенных команд.</p>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="what_they_can_do">
                    <div className="container">
                        <h1 className="text-xs-center">Зачем боты пришли в этот мир</h1>

                        <div className="row">
                            <div className="col-md-5">
                                <img src={preview} width="95%" alt="Telegram Bot Preview in Botmasterzzz"/>
                            </div>
                            <div className="col-md-7 text">
                                <p><b>Гуманность</b> — Я был создан для того, чтобы Люди имели возможность избавиться от
                                    рутинных дел, отвлечься и проводить как можно больше времени с семьей/друзьями/за
                                    любимыми делами.
                                    Я люблю Людей, ценю Их время и готов всячески им помогать.</p>

                                <p><b>Экологичность</b> Экологи́чность — качество бота, отражающее его способность не
                                    наносить вреда окружающей природе.</p>

                                <p><b>Что мы можем</b><br></br>
                                    <b> - </b> Регистрация людей на мероприятия<br></br>
                                    <b> - </b> Отвечать на вопросы клиентов, оформлятиь заказы<br></br>
                                    <b> - </b> Выставлять счета на оплату, принимать платежи<br></br>
                                    <b> - </b> Быть полноценным интернет-магазином<br></br>
                                    <b> - </b> Аггрегировать информацию из различных источников<br></br>
                                    <b> - </b> Вести учет деятельности Вашего бизнеса<br></br>
                                    <b> - </b> Предоставлять скрипты для Ваших сотрудников<br></br>
                                </p>

                                <p>Боты будут выполнять <b>любые поручения</b>, которые вы им дадите.</p>
                            </div>
                        </div>
                        <h3 className="text-xs-center">Мы знаем, как производить ботов, которые станут неотъемлемой
                            частью Вашего бизнеса и Вашей жизни</h3>
                    </div>
                </section>

                <section className="features">
                    <div className="container">
                        <h1 className="text-xs-center">Восхитительные возможности ботов</h1>

                        <div className="card-columns">
                            <div className="card text-xs-center">
                                <img alt="card" className="card-img-top" src={semy}/>

                                    <div className="card-block">
                                        <h4 className="card-title">Удобная клавиатура</h4>

                                        <p className="card-text">Все, что нужно для управления ботом - простые команды
                                            или
                                            универсальная клавиатура, которая создается ботом.</p>
                                    </div>
                            </div>
                            <div className="card text-xs-center">
                                <div className="card-block">
                                    <h4 className="card-title">Доступ с любого устройства</h4>

                                    <p className="card-text">Все операции и диалоги с ботами синхронизируются на всех
                                        устройствах. А это
                                        значит, что обязательный доступ к конкретному устройству не нужен.</p>
                                </div>
                            </div>
                            <div className="card card-block text-xs-center">
                                <h4 className="card-title">Мгновенные ответы</h4>

                                <p className="card-text">Клиенты получают мгновенные ответы от бота.</p>
                            </div>
                            <div className="card text-xs-center">
                                <img alt="dc" className="card-img-top" src={dc}/>

                                    <div className="card-block">
                                        <h4 className="card-title">Местоположение и номер телефона</h4>

                                        <p className="card-text">Боты позволяют мгновенно делиться своим номером
                                            телефона и местоположением.</p>
                                    </div>
                            </div>
                            <div className="card text-xs-center">
                                <img  alt="a9" className="card-img-top" src={a9}/>

                                    <div className="card-block">
                                        <h4 className="card-title">Встроенный режим</h4>

                                        <p className="card-text">Позволяет запускать бота прямо в чате. Можно
                                            использовать для
                                            мгновенного уточнения цен на услуги или стоимость товара.</p>
                                    </div>
                            </div>
                            <div className="card text-xs-center">
                                <img  alt="a4" className="card-img-top" src={a4}/>

                                    <div className="card-block">
                                        <h4 className="card-title">Встроенная клавиатура</h4>

                                        <p className="card-text">Позволяет мгновенно обновлять информацию изменяя лишь
                                            сообщение.
                                            Отлично подойдет для просмотра списка товаров или услуг.</p>
                                    </div>
                            </div>
                            <div className="card text-xs-center">
                                <div className="card-block">
                                    <h4 className="card-title">Каналы и чаты</h4>

                                    <p className="card-text">Боты могут работать в каналах и чатах, что дает потрясающие
                                        возможности для упрощения работы.</p>
                                </div>
                            </div>
                            <div className="card text-xs-center">
                                <div className="card-block">
                                    <h4 className="card-title">Статистика</h4>

                                    <p className="card-text">Вы будете иметь полную информацию о текущем использовании
                                        Вашего бота.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
    </section>
        )
    }
}

export default Home;