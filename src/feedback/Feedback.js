import React, { Component } from 'react';
import './Feedback.css';
// import '../../styles/style.css';


class Profile extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section>
                <div className="feedback-container">
                    <h2>Форма обратной связи</h2>
                    <form id="contactForm" action="/admin/feedback" method="post">
                        <div className="field-block">
                            <label htmlFor="name">Ваше имя:</label>
                            <input id="name" className="field" name="name" required type="text"
                                   placeholder="Иванов Иван Иванович"/>
                        </div>
                        <div className="field-block">
                            <label htmlFor="email">Ваш E-mail:</label>
                            <input id="email" className="field" name="email"
                                   placeholder="ivanov@email.com"/>
                        </div>
                        <div className="field-block">
                            <label htmlFor="phone">Ваш телефон:</label>
                            <input id="phone" className="field" name="phone" required type="text"
                                   placeholder="+7 (800) 000-00-00"/>
                        </div>
                        <div className="field-block">
                            <label htmlFor="message">Текст сообщения:</label>
                            <textarea id="message" className="field" required name="message" rows="4"></textarea>
                        </div>
                        <div className="field-block">
                            <input id="check" name="check" checked type="checkbox"/>
                                <span className="check-text"> Я добровольно отправляю свои данные</span>
                        </div>
                        <button id="button" className="button" type="submit">Отправить</button>
                        <div className="result">
                            <span id="answer"></span>
                            <span id="loader"><img src="images/loader.gif" alt=""/></span>
                        </div>
                    </form>
                </div>
            </section>
        );
    }
}

export default Profile