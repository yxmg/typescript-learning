import React from 'react';
import Login from './views/login/index'
import Home from './views/home/index'
import {HashRouter, Switch, Route} from 'react-router-dom'

function App() {
    return (
        <HashRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/login' exact component={Login}/>
            </Switch>
        </HashRouter>
    );
}

export default App;
