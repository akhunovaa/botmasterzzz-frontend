import React, { Component } from 'react';
import './NotFound.css';
import '../styles/style.css';
import { Link } from 'react-router-dom';

class NotFound extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
                <nav className="b_nav clearfix">
                    <div className="page-not-found">
                        <h1 className="title">
                            404
                        </h1>
                        <div className="desc">
                            Страница, которую вы искали не найдена.
                        </div>
                        <Link to="/"><button className="go-back-btn btn btn-primary" type="button">Вернуться...</button></Link>
                    </div>
                </nav>
        );
    }
}
export default NotFound;