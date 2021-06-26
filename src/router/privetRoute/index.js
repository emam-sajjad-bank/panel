//node modules
import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, useHistory } from 'react-router-dom';
//components

//utils
import authenticator from './authenticator';

//styles
 
const PrivetRoute = ({children}) =>{
  const history = useHistory();
  if(authenticator()){ 
    if (history.location.pathname === "/login") {
      return <Redirect to={{ pathname: "/" }} />;
    }
    else { 
      return <> {children} </>;
    }
  }
  else {
    return <Redirect to={{ pathname: "/login" }} />;
  }
};
 
PrivetRoute.propTypes = {
  data: PropTypes.any
};
 
export default PrivetRoute;