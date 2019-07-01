import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './AppFooter.css';
import footerBtn1 from '../img/global/footer_btn1.png';
import footerBtn2 from '../img/global/footer_btn2.png';
import footerBtn3 from '../img/global/footer_btn3.png';
import footer1 from '../img/global/footer1.png';
import footer2 from '../img/global/footer2.png';
import footer3 from '../img/global/footer3.png';


class AppFooter extends Component {
    render() {
        return (
            <div>
                {this.props.authenticated ? (
                    <div id="footer">
                        <div id="footer-center">
                            <ul>
                                <li><a href="#">О ПРОЕКТЕ</a></li>
                                <li><a href="#">О НАС</a></li>
                                <li><a href="/feedback">ОБРАТНАЯ СВЯЗЬ</a></li>
                                <li><a href="#">КОНТАКТЫ</a></li>
                                <a style={{float: 'right'}} onClick={this.props.onLogout}>ВЫЙТИ</a>

                            </ul>
                        </div>
                    </div>
                ) : (
                    <div id="footer">
                        <div id="footer-center">
                            <div id="footer-block">
                                <div>
                                    <b>Botmasterzzz</b>
                                    <a href="/feedback"><img className="footer_col_btn1" src={footerBtn3}/></a>
                                    <a href="#"><img className="footer_col_btn2" src={footerBtn1}/></a>
                                    <a href="#"><img className="footer_col_btn3" src={footerBtn2}/></a>
                                </div>
                                <div>
                                    <img src={footer1}/>
                                    <span>
   	 	   	  	 Все операции и диалоги с ботами синхронизируются на всех устройствах.
   	 	   	  </span>
                                </div>
                                <div>
                                    <img src={footer2}/>
                                    <span>
   	 	   	  	 Вы будете иметь полную информацию о текущем использовании Вашего бота.
   	 	   	  </span>
                                </div>
                                <div>
                                    <img src={footer3}/>
                                    <span>
   	 	   	  	 Управление всеми ботами на одной площадке
   	 	   	  </span>
                                </div>
                            </div>
                            <ul>
                                <li><a href="#">О ПРОЕКТЕ</a></li>
                                <li><a href="#">О НАС</a></li>
                                <li><a href="/feedback">ОБРАТНАЯ СВЯЗЬ</a></li>
                                <li><a href="#">КОНТАКТЫ</a></li>
                                <NavLink style={{float: 'right'}} to="/login">ВХОД</NavLink>
                            </ul>
                        </div>
                    </div>
                )}

            </div>
        )
    }
}

export default AppFooter;
