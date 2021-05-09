//node modules
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//components

//utils

//styles
import { StyledButton } from './style';

 
const CustomButton = props =>{

  const {href , children} = props;
  return(
    href ? 
    // with Link wrapper
      <Link to={href} >
        <StyledButton
          {...props}
        >
          {children}
        </StyledButton>
      </Link> :
    // without Link wrapper
      <StyledButton
        {...props}
      >
        {children}
      </StyledButton>);

};
 
CustomButton.propTypes = {
  href: PropTypes.string,
  children: PropTypes.any,
};
 
export default CustomButton;