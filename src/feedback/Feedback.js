import React, { Component } from 'react';
import './Feedback.css';
import Alert from "react-s-alert";
import { feedback } from '../util/APIUtils';


class Profile extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="feedback-container">
                <div className="feedback-content">
                    <h1 className="signup-title">Форма обратной связи</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-item">
                            <input type="text" id="name"
                                   className="form-control" placeholder="Иванов Иван Иванович" required/>
                        </div>
                        <div className="form-item">
                            <input type="text" id="email"
                                   className="form-control" placeholder="ivanov@email.com"/>
                        </div>
                        <div className="form-item">
                            <input type="text" id="phone"
                                   className="form-control" placeholder="+7 (800) 000-00-00" required/>
                        </div>
                        <div className="form-item">
                            <textarea id="message"
                                   className="form-control" placeholder="Ваше сообщение" required/>
                        </div>
                        <div className="form-item">
                            <button id="button" type="submit" className="btn btn-block btn-primary">Отправить</button>
                        </div>
                    </form>
                    </div>
            </div>
        );
    }


    handleSubmit(event) {
        event.preventDefault();

        feedback()
            .then(response => {
                Alert.success("Сообщение успешно отправлено");
                this.props.history.push("/");
            }).catch(error => {
            Alert.error((error && error.message) || 'Что-то пошло не так! Попробуйте заново.');
        });
    }
}

export default Profile