//node modules
import React from 'react';
import PropTypes from 'prop-types';


//components

//utils

//styles
import { StyledCheckBox } from './style';


const CustomCheckBox = (props) =>{
  const {children} = props;
  return(
    <StyledCheckBox {...props} >{children}</StyledCheckBox>    
  );
};
CustomCheckBox.propTypes = {
  children: PropTypes.any
};
 
export default CustomCheckBox;