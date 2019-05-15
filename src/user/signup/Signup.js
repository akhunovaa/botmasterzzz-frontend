import React, { Component } from 'react';
import './Signup.css';

import { Link, Redirect } from 'react-router-dom'
import { signup } from '../../util/APIUtils';
import Alert from 'react-s-alert';
import { ReCaptcha } from 'react-recaptcha-google'

class SignUp extends Component {
    render() {
        if(this.props.authenticated) {
            return <Redirect
                to={{
                    pathname: "/",
                    state: { from: this.props.location }
                }}/>;
        }

        return (
            <section className="signup-container">
                <div className="signup-content">
                    <h1 className="signup-title">Регистрация на портале Botmasterzzz</h1>
                    <SignUpForm {...this.props} />
                    <span className="login-link">Уже зарегистрированы? <Link to="/login">Авторизоваться!</Link></span>
                </div>
                </section>
        );
    }
}

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: '',
            patrName: '',
            login: '',
            email: '',
            password: '',
            phone: '',
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

    handleInputChange(event) {
        const target = event.target;
        const inputName = target.name;
        const inputValue = target.value;

        this.setState({
            [inputName] : inputValue
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        const signUpRequest = Object.assign({}, this.state);
        if (signUpRequest.captchaToken != null){
            signup(signUpRequest)
                .then(response => {
                    Alert.success("Вы успешно зарегистрировались! Пожалуйста авторизуйтесь заново.");
                    this.onLoadRecaptcha();
                    this.props.history.push("/");
                }).catch(error => {
                Alert.error((error && error.message) || 'Что-то пошло не так! Попробуйте заново.');
            });
        }

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-item">
                    <input type="text" name="login"
                           className="form-control" placeholder="Логин"
                           value={this.state.login} onChange={this.handleInputChange} required/>
                </div>

                <div className="form-item">
                    <input type="text" name="name"
                           className="form-control" placeholder="Имя"
                           value={this.state.name} onChange={this.handleInputChange}/>
                </div>

                <div className="form-item">
                    <input type="text" name="surname"
                           className="form-control" placeholder="Фамилия"
                           value={this.state.surname} onChange={this.handleInputChange}/>
                </div>

                <div className="form-item">
                    <input type="text" name="patrName"
                           className="form-control" placeholder="Отчество"
                           value={this.state.patrName} onChange={this.handleInputChange}/>
                </div>

                <div className="form-item">
                    <input type="text" name="phone"
                           className="form-control" placeholder="Номер телефона"
                           value={this.state.phone} onChange={this.handleInputChange}/>
                </div>

                <div className="form-item">
                    <input type="email" name="email"
                           className="form-control" placeholder="Email"
                           value={this.state.email} onChange={this.handleInputChange}/>
                </div>

                <div className="form-item">
                    <input type="password" name="password"
                           className="form-control" placeholder="Пароль"
                           value={this.state.password} onChange={this.handleInputChange} required/>
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
                        hl="ru"
                    />
                </div>
                <div className="form-item">
                    <button type="submit" className="btn confirm-button btn-primary" >Зарегистрироваться</button>
                </div>
            </form>

        );
    }
}

export default SignUp