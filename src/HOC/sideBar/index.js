//node modules
import React from 'react';
import PropTypes from 'prop-types';

//components

//utils

//styles
import { StyledSideBar } from './style';


const SideBar = ({data}) =>{
  return(
    <StyledSideBar>      
      {data}
    </StyledSideBar>
  );
};
 
SideBar.propTypes = {
  data: PropTypes.any
};
 
export default SideBar;