import React from 'react';
import {Route, Router, Switch} from 'react-router-dom';
import StartReview from "./views/landing";
import {history} from './routing/history';
import NotFound from "./views/NotFound";
import Login from "./views/user/Login";

const App = () => {
    return (
        <Router history={history} basename={'/'}>
            <Switch>
                <Route exact path={'/login'} component={Login}/>
                <Route exact path={'/review'} component={StartReview}/>
                <Route component={NotFound}/>
            </Switch>
        </Router>
    );
};

export default App;
