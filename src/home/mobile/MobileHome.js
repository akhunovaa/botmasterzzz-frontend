import React, {Component} from 'react';
import background from '../../img/mobile/back_two.png';
import './MobileHome.css';
import {NavLink} from "react-router-dom";


class MobileHome extends Component {

    state = {};

    render() {
        return (
            <div className="body_container">
                <svg className="body_backgound" viewBox="0 0 375 420.418">
                    <pattern elementid="back_two" id="back_two" x="0" y="0"
                             width="100%" height="100%">
                        <image x="0" y="0" width="100%" height="100%" href={background} xlinkHref={background}/>
                    </pattern>
                    <path className="body_backgound" d="M 0 0 L 375 0 L 375 420.41796875 L 0 420.41796875 L 0 0 Z">
                    </path>
                </svg>
                <div id="main_text">
                    <div id="______________________________">
                        <span>Мы знаем, как производить ботов, которые станут неотъемлемой частью Вашего бизнеса и Вашей жизни<br/></span>
                    </div>
                    <svg className="Line_12">
                        <path id="Line_12" d="M 0 0 L 0 61">
                        </path>
                    </svg>
                </div>
                <div id="body_logo_text">
                    <div id="Botmasterzzz">
                        <a href="/" style={{color: 'black'}}>
                            <span>Botmasterzzz</span>
                        </a>
                    </div>
                </div>
                <div id="project_create_button">
                    <svg className="Path_7" viewBox="0 0 242.047 47">
                        <path id="Path_7" d="M 0 0 L 242.0473327636719 0 L 242.0473327636719 47 L 0 47 L 0 0 Z">
                        </path>
                    </svg>
                    <div id="______________">
                        <NavLink style={{float: 'right', color: 'white'}} to="/projects">Создать проект</NavLink>
                    </div>
                </div>
            </div>
        )
    }
}

export default MobileHome;