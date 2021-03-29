import React from 'react';
import Login from './views/login/login'
import Index from './views/home/home'
import {HashRouter, Switch, Route} from 'react-router-dom'

function App() {
    return (
        <HashRouter>
            <Switch>
                <Route path='/' exact component={Index}/>
                <Route path='/login' exact component={Login}/>
            </Switch>
        </HashRouter>
    );
}

export default App;
