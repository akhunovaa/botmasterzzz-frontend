import React, { Component } from 'react';
import './Feedback.css';
import Alert from "react-s-alert";
import {feedback} from '../util/APIUtils';


class Feedback extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            message: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    render() {
        return (
            <div className="feedback-container">
                <div className="feedback-content">
                    <h1 className="signup-title">Форма обратной связи</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-item">
                            <input type="text" id="name" name="name"
                                   className="form-control" placeholder="Имя" value={this.state.name} onChange={this.handleInputChange} required/>
                        </div>
                        <div className="form-item">
                            <input type="text" id="email" name="email"
                                   className="form-control" placeholder="Email" value={this.state.email} onChange={this.handleInputChange}/>
                        </div>
                        <div className="form-item">
                            <input type="text" id="phone" name="phone"
                                   className="form-control" placeholder="+7 (800) 000-00-00" value={this.state.phone} onChange={this.handleInputChange} required/>
                        </div>
                        <div className="form-item">
                            <textarea id="message" name="message"
                                   className="form-control" placeholder="Ваше сообщение" value={this.state.message} onChange={this.handleInputChange} required/>
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

        const feedbackRequest = Object.assign({}, this.state);

        feedback(feedbackRequest).then(response => {
                Alert.success("Сообщение успешно отправлено '<br>" + response.message + "'");
                this.props.history.push("/feedback");
            }).catch(error => {
            Alert.error((error && error.message) || 'Что-то пошло не так! Попробуйте заново.');
        });
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

export default Feedback