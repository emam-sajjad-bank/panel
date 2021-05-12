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

  if(authenticator()) return history.location.pathname === "/login" ?
    <Redirect to={{ pathname: "/" }} /> :
    children;
  else return <Redirect to={{ pathname: "/login" }} />;

};
 
PrivetRoute.propTypes = {
  data: PropTypes.any
};
 
export default PrivetRoute;