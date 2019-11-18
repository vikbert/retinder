import React from 'react';
import {Route, Router, Switch} from 'react-router-dom';
import StartReview from "./views/landing";
import {history} from './routing/history';
import NotFound from "./views/NotFound";
import Login from "./views/user/Login";
import PrivateRoute from "./routing/PrivateRoute";
import CategoryIndex from "./views/category";
import CardIndex from "./views/card";

const App = () => {
    return (
        <Router history={history} basename={'/'}>
            <Switch>
                <Route exact path={'/login'} component={Login}/>
                <PrivateRoute exact path={'/review'} component={StartReview}/>
                <PrivateRoute exact path={'/category'} component={CategoryIndex}/>
                <PrivateRoute exact path={'/card'} component={CardIndex}/>
                <Route component={NotFound}/>
            </Switch>
        </Router>
    );
};

export default App;
