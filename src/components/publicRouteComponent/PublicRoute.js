import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../utils';

const PublicRoute = ({component, restricted, ...rest}) => {
  console.log(...rest)
  console.log(restricted)
    return (
        <Route {...rest} render={props => (
            isLogin() && restricted ?
                <Redirect to="/dashboard" />
            : <LoginForm {...props} />
        )} />
    );
};

export default PublicRoute;