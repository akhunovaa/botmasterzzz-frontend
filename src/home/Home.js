import React, {Component} from 'react';
import './Home.css';
import createAllLeft from '../img/global/creat-all-left.png';
import createAllRight from '../img/global/creat-all-right.png';
import createButton from '../img/global/creat_btn.png';
import firstAdv from '../img/first_advantage.png';
import secondAdv from '../img/second_advantage.png';
import thirdAdv from '../img/third_advantage.png';
import createAdvantageOne from '../img/global/advantage1.png';
import createAdvantageTwo from '../img/global/advantage2.png';
import createAdvantageThree from '../img/global/advantage3.png';

class Home extends Component {

    state = {};

    render() {
        return (
            <div>
                <div id="main">
                    <div id="main-center">
                        <div id="main-left">
                            <b>Разрабатываем удобных<br/><br/>ботов для Telegram</b>
                            <span>
   	 			Мы знаем, как производить ботов, которые станут неотъемлемой частью Вашего бизнеса и Вашей жизни
   	 			            <hr/>
   	 		                </span>
                        </div>
                        <div id="main-right">
                            <span>Создайте своего уникального бота, научите его командам и позвольте ему решать рутинные задачи за Вас</span>
                            <b>КАКОГО БОТА ВЫ ХОТИТЕ СОЗДАТЬ?</b>
                        </div>
                        <div id="main-label-center">
                            <div id="adv-labels">
                                <b>Бот-консультант</b>
                                <b>Интернет магазин</b>
                                <b>Новостной бот</b>
                                {/*<span>*/}
                                {/*Мы знаем, как производить ботов, которые станут неотъемлемой частью Вашего бизнеса и Вашей жизни*/}
                                {/*</span>*/}
                            </div>
                            <div id="adv-pictures">
                                <img src={firstAdv} alt='Телеграм бот'/>
                                <img src={secondAdv} alt='Телеграм бот'/>
                                <img src={thirdAdv} alt='Телеграм бот'/>
                            </div>
                        </div>

                    </div>

                </div>
                <div id="work">
                    <div id="work-center">
                        <h2>КАК ЭТО РАБОТАЕТ?</h2>
                        <div id="work-block">
                            <div>
                                <b>Регистрация</b>
                                <span>
   	 		   	  Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
   	 		   </span>
                            </div>
                            <div>
                                <b>Создайте проект</b>
                                <span>
   	 		   	  Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
   	 		   </span>
                            </div>
                            <div>
                                <b>Настройте бота</b>
                                <span>
   	 		   	  Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
   	 		   </span>
                            </div>
                            <div>
                                <b>Делитесь доступом</b>
                                <span>
   	 		   	  Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
   	 		   </span>
                            </div>
                            <div>
                                <b>Наблюдайте за результатом </b>
                                <span>
   	 		   	  Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
   	 		   </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="creat-all">
                    <div id="creat-all-center">
                        <h2>СОЗДАЙТЕ БОТА ПО СВОИМ ПОТРЕБНОСТЯМ</h2>
                        <div id="creat-all-controler">
                            <img src={createAllLeft} alt='create all left'/>
                            <img src={createAllRight} alt='create all right'/>
                        </div>
                        <div id="creat-all-block">
                            <div>
                                <b>Обучение</b>
                            </div>
                            <div>
                                <b>Работа с заказами</b>
                            </div>
                            <div>
                                <b>Учет и анализ</b>
                            </div>
                            <div>
                                <b>Рассылка новостей</b>
                            </div>
                            <div>
                                <b>Помощник для клиентов</b>
                            </div>
                            <div>
                                <b>Поисковик</b>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="creat">
                    <div id="creat-center">
   	  	 <span>
   	  	 	ПРИДУМАЙ, СПРОЕКТИРУЙ И ОЖИВИ СВОЕГО ИНДИВИДУАЛЬНОГО БОТА БЕЗ<br/>
   	  	 	СПЕЦИАЛЬНЫХ ЗНАНИЙ И НАВЫКОВ В ПРОГРАММИРОВАНИИ
   	  	 </span>
                        <a href="/project">
                            <img src={createButton} class="creat_btn" alt="Create button"/>
                        </a>
                    </div>
                </div>

                <div id="advantage">
                    <div id="advantage-center">
                        <h2>НАШИ ПРЕИМУЩЕСТВА</h2>
                        <div id="advantage-block">
                            <div>
                                <img src={createAdvantageOne} alt='Advantage create'/>
                                <b>ГРАФИК РАБОТЫ</b>
                                <span>
   	 		   	 Бот с радостью готов работать с полной отдачей 168 часов в неделю без сна, отдыха и внезапных больничных
   	 		   </span>
                            </div>
                            <div>
                                <img src={createAdvantageTwo} alt='Advantage two'/>
                                <b>СТАБИЛЬНОСТЬ</b>
                                <span>
   	 		   	 Бот не допустит опечатку, не сообщит клиенту ошибочную информацию и не даст недостоверной отчетности
   	 		   </span>
                            </div>
                            <div>
                                <img src={createAdvantageThree} alt='Advantage three'/>
                                <b>СТРЕССОУСТОЙЧИВОСТЬ </b>
                                <span>
   	 		   	 Бот обладает иммунитетом к человеческим эмоциям. Он всегда дружелюбен, вежлив и счастлив заниматься тем, что ему поручат.
   	 		   </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;