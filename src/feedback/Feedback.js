import React, { Component } from 'react';
import './Feedback.css';
import Alert from "react-s-alert";
import {feedback} from '../util/APIUtils';
import { ReCaptcha } from 'react-recaptcha-google'

class Feedback extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            name: '',
            email: '',
            phone: '',
            message: '',
            captchaToken: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
        this.verifyCallback = this.verifyCallback.bind(this);
    }

    componentDidMount() {
        if (this.captcha) {
            this.captcha.reset();
        }
    }
    onLoadRecaptcha() {
        if (this.captcha) {
            this.captcha.reset();
        }
    }

    verifyCallback(recaptchaToken) {
        this.setState({
            captchaToken : recaptchaToken
        })
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
                        <div className="form-item text-area">
                            <textarea id="message" name="message"
                                   className="form-control text-area" placeholder="Ваше сообщение" value={this.state.message} onChange={this.handleInputChange} required/>
                        </div>
                        <div className="form-item">
                            <ReCaptcha
                                ref={(el) => {this.captcha = el;}}
                                size="normal"
                                data-theme="light"
                                render="explicit"
                                sitekey="6LeulZwUAAAAAA07OHdhKen90gZauyUDCBe8GDEn"
                                onloadCallback={this.onLoadRecaptcha}
                                verifyCallback={this.verifyCallback}
                            />
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
        if (feedbackRequest.message.length >= 3000){
            Alert.warning('Слишком длинное сообщение! Попробуйте заново.');
        }

        if (feedbackRequest.name.length >= 300){
            Alert.warning('Слишком длинное сообщение! Попробуйте заново.');
        }

        if (feedbackRequest.phone.length >= 300){
            Alert.warning('Слишком длинное сообщение! Попробуйте заново.');
        }

        if (feedbackRequest.email.length >= 300){
            Alert.warning('Слишком длинное сообщение! Попробуйте заново.');
        }
        if (feedbackRequest.captchaToken !== "" && feedbackRequest.captchaToken.length <= 1){
            feedback(feedbackRequest).then(response => {
                Alert.success("Сообщение успешно отправлено '" + response.message + "'");
                this.props.history.push("/feedback");
            }).catch(error => {
            Alert.error((error && error.message) || 'Что-то пошло не так! Попробуйте заново.');
            });
        }
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