import React, {Component} from 'react';
import './MobileAppHeader.css';
import {NavLink} from "react-router-dom";


class MobileAppHeader extends Component {
    render() {
        return (
            <div id="mobile_header_container">
                <svg className="mobile_header_body" viewBox="0 0 375 95">
                    <path id="mobile_header_body" d="M 0 0 L 375 0 L 375 95 L 0 95 L 0 0 Z">
                    </path>
                </svg>
                <div id="context_menu">
                    <svg className="Line_1">
                        <path id="Line_1" d="M 0 0 L 31.6248779296875 0">
                        </path>
                    </svg>
                    <svg className="Line_2">
                        <path id="Line_2" d="M 0 0 L 31.6248779296875 0">
                        </path>
                    </svg>
                    <svg className="Line_3">
                        <path id="Line_3" d="M 0 0 L 31.6248779296875 0">
                        </path>
                    </svg>
                </div>
                {
                    this.props.authenticated ? (
                <div id="login">
                    <svg className="Rectangle_3">
                        <rect id="Rectangle_3" rx="16" ry="16" x="0" y="0" width="75" height="32">
                        </rect>
                    </svg>
                    <div id="Log_In">
                        <a onClick={this.props.onLogout} style={{color: 'white'}}>
                            <span>Выйти</span>
                        </a>
                    </div>
                </div>

                ) : (
                    <div id="login">
                        <svg className="Rectangle_3">
                            <rect id="Rectangle_3" rx="16" ry="16" x="0" y="0" width="75" height="32">
                            </rect>
                        </svg>
                        <div id="Log_In">
                         <a href="/login" style={{color: 'white'}}>
                         <span>Войти</span>
                         </a>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export default MobileAppHeader;
