import React, {Component} from 'react';
import './MobileAppFooter.css';
import {NavLink} from "react-router-dom";
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";

class MobileAppFooter extends Component {
    render() {
        return (
            <div id="footer_container">
                <div id="telegram">
                    <svg className="footer_background">
                        <rect id="footer_background" rx="0" ry="0" x="0" y="0" width="375" height="297">
                        </rect>
                    </svg>
                    <svg className="Path_9" viewBox="0 0 48.994 47">
                        <path id="Path_9" d="M 0 0 L 48.99404907226562 0 L 48.99404907226562 47 L 0 47 L 0 0 Z">
                        </path>
                    </svg>
                    <svg className="Path_8" viewBox="0 0 103.44 47">
                        <path id="Path_8" d="M 0 0 L 103.4402770996094 0 L 103.4402770996094 47 L 0 47 L 0 0 Z">
                        </path>
                    </svg>
                    <div id="Telegram">
                        <a href="tg://resolve?domain=botmasterzzzrobot" style={{color: 'rgba(132,148,161,1)'}}>
                            <span>Telegram</span>
                        </a>
                    </div>
                    <svg className="telegram_A0_Path_7" viewBox="0 8 29.04 29.04">
                        <path id="telegram_A0_Path_7"
                              d="M 14.52001953125 8 C 6.498879909515381 8 0 14.49888134002686 0 22.52002143859863 C 0 30.54115676879883 6.498879909515381 37.0400390625 14.52001953125 37.0400390625 C 22.54115867614746 37.0400390625 29.0400390625 30.54115676879883 29.0400390625 22.52002143859863 C 29.0400390625 14.49888134002686 22.54115867614746 8 14.52001953125 8 Z M 21.65122222900391 17.94738388061523 L 19.26829719543457 29.17697906494141 C 19.0926513671875 29.97324371337891 18.61841011047363 30.16645050048828 17.95681381225586 29.79174041748047 L 14.32680892944336 27.11607360839844 L 12.57620906829834 28.80226898193359 C 12.38299942016602 28.99547576904297 12.21906471252441 29.15941619873047 11.84435367584229 29.15941619873047 L 12.10196685791016 25.46500396728516 L 18.82918357849121 19.38767623901367 C 19.12192726135254 19.13006401062012 18.7647819519043 18.98369216918945 18.37836074829102 19.24130439758301 L 10.06447887420654 24.47553825378418 L 6.481313228607178 23.35726356506348 C 5.702618598937988 23.11135673522949 5.685054302215576 22.57857131958008 6.645249366760254 22.20386123657227 L 20.64418792724609 16.80568885803223 C 21.29407691955566 16.57149505615234 21.86199569702148 16.96376991271973 21.65122222900391 17.94738388061523 Z">
                        </path>
                    </svg>
                </div>
                <div id="facebook">
                    <svg className="Path_7_A0_Path_8" viewBox="0 0 103.44 47">
                        <path id="Path_7_A0_Path_8"
                              d="M 0 0 L 103.4402770996094 0 L 103.4402770996094 47 L 0 47 L 0 0 Z">
                        </path>
                    </svg>
                    <svg className="Path_10" viewBox="0 0 48.994 47">
                        <path id="Path_10" d="M 0 0 L 48.99404907226562 0 L 48.99404907226562 47 L 0 47 L 0 0 Z">
                        </path>
                    </svg>
                    <div id="Facebook">
                        <a href="/" style={{color: 'rgba(132,148,161,1)'}}>
                            <span>Facebook</span>
                        </a>
                    </div>
                    <svg className="facebook_square" viewBox="0 32 25 25">
                        <path id="facebook_square"
                              d="M 25 34.67857360839844 L 25 54.32142639160156 C 25 55.80022430419922 23.80022239685059 57 22.32143020629883 57 L 17.5613842010498 57 L 17.5613842010498 47.11160659790039 L 20.94308090209961 47.11160659790039 L 21.4285717010498 43.33928680419922 L 17.5613842010498 43.33928680419922 L 17.5613842010498 40.92857360839844 C 17.5613842010498 39.83482360839844 17.86272430419922 39.09263610839844 19.4308032989502 39.09263610839844 L 21.4285717010498 39.09263610839844 L 21.4285717010498 35.72209930419922 C 21.08258819580078 35.67745590209961 19.89955520629883 35.57143020629883 18.51562690734863 35.57143020629883 C 15.63615989685059 35.57143020629883 13.6607141494751 37.32924270629883 13.6607141494751 40.56026840209961 L 13.6607141494751 43.34486389160156 L 10.26785659790039 43.34486389160156 L 10.26785659790039 47.1171875 L 13.66629505157471 47.1171875 L 13.66629505157471 57 L 2.678571462631226 57 C 1.199776887893677 57 0 55.80022430419922 0 54.32142639160156 L 0 34.67857360839844 C 0 33.19977569580078 1.199776887893677 32 2.678571462631226 32 L 22.32143020629883 32 C 23.80022239685059 32 25 33.19977569580078 25 34.67857360839844 Z">
                        </path>
                    </svg>
                </div>
                <div id="Botmasterzzz_A0_Text_7">
                    <a href="/" style={{color: 'white'}}>
                        <span>Botmasterzzz</span>
                    </a>
                </div>
                <div id="write_button">
                    <svg className="Path_7_A0_Path_11" viewBox="0 0 242.047 47">
                        <path id="Path_7_A0_Path_11"
                              d="M 0 0 L 242.0473327636719 0 L 242.0473327636719 47 L 0 47 L 0 0 Z">
                        </path>
                    </svg>
                    <div id="____________">
                        <NavLink to="/feedback" style={{color: 'rgba(80, 77, 77, 0.8)'}}>
                            <span>Написать нам</span>
                        </NavLink>
                    </div>
                </div>
                <div id="cat">
                    <div className="cat-paws"/>
                    <div className="cat-itself-wrap">
                        <div className="cat-itself">
                            <div id="cat-eye-left" className="cat-eye" style={{display: 'block'}}>
                                <div className="cat-eyeball"
                                     style={{marginTop: '1.10618px', marginLeft: '-5.99906px'}}/>
                            </div>
                            <div id="cat-eye-right" className="cat-eye" style={{display: 'block'}}>
                                <div className="cat-eyeball"
                                     style={{marginTop: '-0.893822px', marginLeft: '-5.99906px'}}/>
                            </div>
                        </div>
                    </div>
                </div>
                <ScrollUpButton EasingType="easeOutCubic"/>
            </div>
        )
    }
}

export default MobileAppFooter;
