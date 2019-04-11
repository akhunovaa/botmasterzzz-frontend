import React, { Component } from 'react';
import {
    Route,
    Switch
} from 'react-router-dom';
import { loadReCaptcha } from 'react-recaptcha-google'
import AppHeader from '../common/AppHeader';
import Home from '../home/Home'
import Tools from '../admin/Tools'
import Login from '../user/login/Login';
import Feedback from '../feedback/Feedback';
import Signup from '../user/signup/Signup';
import Profile from '../user/profile/Profile';
import NotFound from '../common/NotFound';
import OAuth2RedirectHandler from '../user/oauth2/OAuth2RedirectHandler';
import LoadingIndicator from '../common/LoadingIndicator';
import { getCurrentUser } from '../util/APIUtils';
import { ACCESS_TOKEN } from '../constants';
import PrivateRoute from '../common/PrivateRoute';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import './App.css';
import '../styles/style.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authenticated: false,
            currentUser: null,
            loading: false
        };

        this.loadCurrentlyLoggedInUser = this.loadCurrentlyLoggedInUser.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    loadCurrentlyLoggedInUser() {
        this.setState({
            loading: true
        });

        getCurrentUser()
            .then(response => {
                this.setState({
                    currentUser: response,
                    authenticated: true,
                    loading: false
                });
            }).catch(error => {
            this.setState({
                loading: false
            });
        });
    }

    handleLogout() {
        localStorage.removeItem(ACCESS_TOKEN);
        this.setState({
            authenticated: false,
            currentUser: null
        });
        Alert.success("Вы удачно покинули сессию.");
    }

    componentDidMount() {
        loadReCaptcha();
        this.loadCurrentlyLoggedInUser();
    }

    render() {
        if(this.state.loading) {
            return <LoadingIndicator />
        }

        return (
            <div>
                    <AppHeader authenticated={this.state.authenticated} onLogout={this.handleLogout} />
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/feedback" component={Feedback}/>
                        <PrivateRoute path="/profile" authenticated={this.state.authenticated} currentUser={this.state.currentUser} component={Profile}/>
                        <Route path="/tools" authenticated={this.state.authenticated} currentUser={this.state.currentUser} component={Tools}/>
                        <Route path="/login" render={(props) => <Login authenticated={this.state.authenticated} {...props} />}/>
                        <Route path="/signup" render={(props) => <Signup authenticated={this.state.authenticated} {...props} />}/>
                        <Route path="/oauth2/redirect" component={OAuth2RedirectHandler}/>
                        <Route component={NotFound}/>
                    </Switch>
                <Alert stack={{limit: 3}}
                       timeout = {3000}
                       position='top-right' effect='slide' offset={65} />
            </div>
        );
    }
}

export default App;