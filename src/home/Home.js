import React, { Component } from 'react';
import './Home.css';
import mainLogo from '../img/main.gif';
import fbLogo from "../img/fb-logo.png";

class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <div className="container">
                    <div className="graf-bg-container">
                        <div className="overlay.currently-loading">
                            <div id="overlay"><img src={mainLogo}  alt="Tssss..." /></div>
                        </div>
                    </div>
                    <h1 className="home-title">Botmasterzzz - сервис по управлению и разработке искусственного интелекта</h1>
                </div>
            </div>
        )
    }
}

export default Home;