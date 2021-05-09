//node modules
import React from 'react';
import PropTypes from 'prop-types';
//components

//utils

//styles
 
const MainHOC = ({children}) =>{
  return(
    <>
      {children}
    </>
  );
};

MainHOC.propTypes = {
  children: PropTypes.any
};
 
export default MainHOC;