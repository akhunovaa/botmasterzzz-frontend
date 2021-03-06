import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import AppHeader from '../common/AppHeader';
import AppFooter from '../common/AppFooter';
import News from '../news/News'
import Info from '../info/Info'
import Home from '../home/Home'
import MobileHome from '../home/mobile/MobileHome'
import MobileAppFooter from '../common/MobileAppFooter'
import MobileAppHeader from '../common/MobileAppHeader'
import Login from '../user/login/Login';
import Feedback from '../feedback/Feedback';
import Admin from '../admin/Admin'
import Signup from '../user/signup/Signup';
import Profile from '../user/profile/Profile';
import Project from '../project/Project';
import NotFound from '../common/NotFound';
import OAuth2RedirectHandler from '../user/oauth2/OAuth2RedirectHandler';
import LoadingIndicator from '../common/LoadingIndicator';
import {getCurrentUser} from '../util/APIUtils';
import {ACCESS_TOKEN} from '../constants';
import {loadReCaptcha} from 'react-recaptcha-google'
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import './App.css';
import '../styles/style.css';
import PrivateRoute from '../common/PrivateRoute';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            authenticated: false,
            currentUser: null,
            loading: false,
            width: window.innerWidth
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
        Alert.success("???? ???????????? ???????????????? ????????????.");
    }

    componentDidMount() {
        loadReCaptcha();
        this.loadCurrentlyLoggedInUser();
    }

    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    };


    render() {

        const { width } = this.state;
        const isMobile = width <= 500;

        if (this.state.loading) {
            return <LoadingIndicator/>
        }

        if (isMobile) {
            return (
                <div>
                    <MobileAppHeader authenticated={this.state.authenticated} onLogout={this.handleLogout}/>
                    <Switch>
                        <Route exact path="/" component={MobileHome}/>
                        <Route exact path="/feedback"
                               render={(props) => <Feedback {...props} currentUser={this.state.currentUser}/>}/>
                        {/*<Route exact path="/profile" authenticated={this.state.authenticated} currentUser={this.state.currentUser} component={Profile}/>*/}
                        {/*<Route path="/projects" component={Project}/>*/}
                        <PrivateRoute path="/profile" authenticated={this.state.authenticated} currentUser={this.state.currentUser} component={Profile}/>
                        <PrivateRoute path="/projects" authenticated={this.state.authenticated} currentUser={this.state.currentUser} component={Project}/>
                        <Route path="/login"
                               render={(props) => <Login authenticated={this.state.authenticated} {...props} />}/>
                        <Route path="/signup"
                               render={(props) => <Signup authenticated={this.state.authenticated} {...props} />}/>
                        <Route path="/oauth2/redirect" component={OAuth2RedirectHandler}/>
                        <Route path="/news" component={News}/>
                        <Route path="/info" component={Info}/>
                        <Route exact path="/administration" component={Admin}/>
                        <Route component={NotFound}/>
                    </Switch>
                    <MobileAppFooter authenticated={this.state.authenticated} onLogout={this.handleLogout}/>
                    <Alert stack={{limit: 3}}
                           timeout={3000}
                           position='top-right' effect='slide' offset={65}/>
                </div>
            );
        } else {
            return (
                <div>
                    <AppHeader authenticated={this.state.authenticated} onLogout={this.handleLogout}/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/feedback"
                               render={(props) => <Feedback {...props} currentUser={this.state.currentUser}/>}/>
                        {/*<Route exact path="/profile" authenticated={this.state.authenticated} currentUser={this.state.currentUser} component={Profile}/>*/}
                        {/*<Route path="/projects" component={Project}/>*/}

                        <PrivateRoute path="/profile" authenticated={this.state.authenticated} currentUser={this.state.currentUser} component={Profile}/>
                        <PrivateRoute path="/projects" authenticated={this.state.authenticated} currentUser={this.state.currentUser} component={Project}/>
                        <Route path="/login"
                               render={(props) => <Login authenticated={this.state.authenticated} {...props} />}/>
                        <Route path="/signup"
                               render={(props) => <Signup authenticated={this.state.authenticated} {...props} />}/>
                        <Route path="/oauth2/redirect" component={OAuth2RedirectHandler}/>
                        <Route path="/news" component={News}/>
                        <Route path="/info" component={Info}/>
                        <Route path="/administration" component={Admin}/>
                        <Route component={NotFound}/>
                    </Switch>
                    <AppFooter authenticated={this.state.authenticated} onLogout={this.handleLogout}/>
                    <Alert stack={{limit: 3}}
                           timeout={3000}
                           position='top-right' effect='slide' offset={65}/>
                </div>
            );
        }
    }
}

export default App;