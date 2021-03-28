import React from 'react';
import Login from './views/login'
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom'

function App() {
    return (
        <HashRouter>
            <Switch>
                <Route path='/login' exact component={Login}/>
                {/* redirect 需要放下面=-= */}
                <Redirect from="/" to="/login"/>
            </Switch>
        </HashRouter>
    );
}

export default App;
