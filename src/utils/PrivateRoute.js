import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// handle the private routes
function PrivateRoute({ component: Component, roles, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        const userDetails = sessionStorage.getItem('currentUserToken')
        if (!userDetails) {
          return <Redirect to={{ pathname: '' }} />;
        }
        if (roles && userDetails.roles && !roles.some((e) => userDetails.roles.includes(e))) {
          return <Redirect to={{ pathname: '/not-perssion' }} />;
        }
        return <Component {...props} />;
      }}
    />
  );
}

export default PrivateRoute;
