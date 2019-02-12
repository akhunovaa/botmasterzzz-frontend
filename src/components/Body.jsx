import React from 'react';
import {Route, Switch} from "react-router-dom";


import MainPage from './MainPage.jsx'
import Login from './Login.jsx'
import MainPageTest from './MainPageTest.jsx'


const Test = () => (
    <div>test</div>
);

class Body extends React.Component {
    render() {
        return <main>
            <Switch>
                <Route  exact path='/' component={MainPage}/>
                <Route  path='/login' component={MainPageTest}/>
            </Switch>
        </main>
    }
}

export default MainPage;