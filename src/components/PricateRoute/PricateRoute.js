import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import UseAuth from '../../hooks/UseAuth';

const PricateRoute = ({ children, ...rest }) => {
  const {user,loading} = UseAuth();
  if(loading){
    return <Spinner animation="border" variant="danger" />
  }
  return (
    <Route
    {...rest}
    render={({location}) => user.email? children:<Redirect
    to={{
      pathname: "/login",
      state: { from: location }
    }}
    ></Redirect>
    }
    >
    </Route>
  );
};

export default PricateRoute;