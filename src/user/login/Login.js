import React, { Component } from 'react';
import './Login.css';
import '../../styles/style.css';
import { GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL, ACCESS_TOKEN } from '../../constants';
import { login } from '../../util/APIUtils';
import { Link, Redirect } from 'react-router-dom'
import fbLogo from '../../img/fb-logo.png';
import googleLogo from '../../img/google-logo.png';
import Alert from 'react-s-alert';
import preview from "../../img/preview.png";
import semy from "../../img/b397dfcefc6da0dc70.jpg";
import dc from "../../img/5ba3f7d7fd5c6c28dc.png";
import a9 from "../../img/50d0312845a05e6da9.png";
import a4 from "../../img/17a804837802700ea4.jpg";

class Login extends Component {
    componentDidMount() {
        // If the OAuth2 login encounters an error, the user is redirected to the /login page with an error.
        // Here we display the error and then remove the error query parameter from the location.
        if(this.props.location.state && this.props.location.state.error) {
            setTimeout(() => {
                Alert.error(this.props.location.state.error, {
                    timeout: 5000
                });
                this.props.history.replace({
                    pathname: this.props.location.pathname,
                    state: {}
                });
            }, 100);
        }
    }

    render() {
        if(this.props.authenticated) {
            return <Redirect
                to={{
                    pathname: "/",
                    state: { from: this.props.location }
                }}/>;
        }

        return (
            <section>
            <div className="login-container">
                <div className="login-content">
                    <h1 className="login-title">Авторизация на портале Botmasterzzz</h1>
                    <SocialLogin />
                    <div className="or-separator">
                        <span className="or-text">или</span>
                    </div>
                    <LoginForm {...this.props} />
                    <span className="signup-link">Нет аккаунта? <Link to="/signup">Зарегистрироваться!</Link></span>
                </div>
            </div>
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
                                    <img className="card-img-top" src={dc}/>

                                    <div className="card-block">
                                        <h4 className="card-title">Местоположение и номер телефона</h4>

                                        <p className="card-text">Боты позволяют мгновенно делиться своим номером
                                            телефона и местоположением.</p>
                                    </div>
                                </div>
                                <div className="card text-xs-center">
                                    <img className="card-img-top" src={a9}/>

                                    <div className="card-block">
                                        <h4 className="card-title">Встроенный режим</h4>

                                        <p className="card-text">Позволяет запускать бота прямо в чате. Можно
                                            использовать для
                                            мгновенного уточнения цен на услуги или стоимость товара.</p>
                                    </div>
                                </div>
                                <div className="card text-xs-center">
                                    <img className="card-img-top" src={a4}/>

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
                                <div className="card text-xs-center">
                                    <div className="card-block">
                                        <h4 className="card-title">Вероника</h4>
                                        <ul>
                                            <li>
                                                <a href="https://www.instagram.com/fitoniki/?hl=ru"
                                                   className="card-text">Instagram</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                </section>
                </section>
        );
    }
}

class SocialLogin extends Component {
    render() {
        return (
            <div className="social-login">
                <a className="btn btn-block social-btn google" href={GOOGLE_AUTH_URL}>
                    <img src={googleLogo} alt="Google" /> Авторизоваться с Google</a>
                <a className="btn btn-block social-btn facebook" href={FACEBOOK_AUTH_URL}>
                    <img src={fbLogo} alt="Facebook" /> Авторизоваться с Facebook</a>
            </div>
        );
    }
}


class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

        const loginRequest = Object.assign({}, this.state);

        login(loginRequest)
            .then(response => {
                localStorage.setItem(ACCESS_TOKEN, response.accessToken);
                Alert.success("Вы авторизовались в системе!");
                this.props.history.push("/");
            }).catch(error => {
            Alert.error((error && error.message) || 'Что-то пошло не так! Попробуйте заново.');
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-item">
                    <input type="email" name="email"
                           className="form-control" placeholder="Логин"
                           value={this.state.email} onChange={this.handleInputChange} required/>
                </div>
                <div className="form-item">
                    <input type="password" name="password"
                           className="form-control" placeholder="Пароль"
                           value={this.state.password} onChange={this.handleInputChange} required/>
                </div>
                <div className="form-item">
                    <button type="submit" className="btn btn-block btn-primary">Авторизоваться</button>
                </div>
            </form>
        );
    }
}

export default Login