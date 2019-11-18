import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {useSelector} from "react-redux";
import Layout from "../views/Layout";

const PrivateRoute = ({component: Component, ...routeProps}) => {
    const user = useSelector((state) => state.userWidget);
    
    return (
        <Route {...routeProps} render={(props) => (
            user.token
                ? <Layout><Component {...props} /></Layout>
                : <Redirect to={{pathname: '/login', state: {from: props.location}}}/>
        )}/>
    );
};

export default PrivateRoute;
