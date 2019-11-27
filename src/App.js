import React from "react";
import {Route, Router, Switch} from "react-router-dom";
import StartReview from "./views/landing";
import {history} from "./routing/history";
import NotFound from "./views/NotFound";
import Login from "./views/user/Login";
import PrivateRoute from "./routing/PrivateRoute";
import CardList from "./views/card/list/CardList";
import CategoryIndex from "./views/category/list";

const App = () => {
    return (
        <Router history={history} basename={"/"}>
            <Switch>
                <Route exact path={"/"} component={Login}/>
                <Route exact path={"/login"} component={Login}/>
                {/* all cards */}
                <PrivateRoute exact path={"/cards"} component={CardList}/>
                {/* all cards by category */}
                <PrivateRoute path={"/cards/:categoryId"} component={CardList}/>

                {/* all categories */}
                <PrivateRoute exact path={"/categories"} component={CategoryIndex}/>

                {/* all reviews */}
                <PrivateRoute exact path={"/reviews"} component={StartReview}/>

                <Route component={NotFound}/>
            </Switch>
        </Router>
    );
};

export default App;
