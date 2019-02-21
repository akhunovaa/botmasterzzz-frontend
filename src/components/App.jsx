import React, {Component} from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from "react-router-dom";


import '../styles/App.css';

import {fakeAuthService} from '../service'

import Header from './Header.jsx';
import Body from './Body.jsx';
import Login from './Login.jsx';

function App() {
    return (

            <div>
                <Header/>
                <div className="container mt-1">
                <Route path="/public" component={Public} />
                <Route path="/auth/login" component={Login} />
                <PrivateRoute path="/main" component={Protected} />
                </div>
            </div>
    );
}

function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={props =>
                fakeAuthService.isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/auth/login",
                            state: { from: props.location }
                        }}
                    />
                )
            }
        />
    );
}

function Public() {

    if (localStorage.getItem("token") == null) {
        return;
    }
    return (
        <div>
                <Route path="/admin/hello" component={Body} />
                <Route path="/admin/admin" component={Body} />
                <Route path="/admin/client" component={Body} />
                <Route path="/admin/state/new" component={Body} />
                <Route path="/admin/state/verify" component={Body} />
                <Route path="/project/create" component={Body} />
                <Route path="/project/read" component={Body} />
                <Route path="/project/update" component={Body} />
                <Route path="/project/delete" component={Body} />
        </div>
    );
}

function Protected() {
    return <h3>Main Page</h3>;
}


export default App;
