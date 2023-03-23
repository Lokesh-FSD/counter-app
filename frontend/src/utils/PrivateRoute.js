import React from "react";
import { Route, Redirect } from "react-router-dom";


const PrivateRoute = ({ Component: Component, ...rest }) => {
    const isLoggedIn = localStorage.getItem("");


    return (
        <Route
            {...rest}
            render={(props) =>
                isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />
            }
        />
    );
};


export default PrivateRoute