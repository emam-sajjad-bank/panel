//node modules
import React from 'react';
import PropTypes from 'prop-types';

//components

//utils

//styles
import { StyledInput } from './style';



const CustomInput = props =>{
  const {inputType} = props;

  const RtlGnarator = () =>{
    switch(inputType){
    case 'mobile' : return "ltr";
    default : return "rtl";
    }
  };
  return(
    <>
      <StyledInput
        align={RtlGnarator()}
        {...props}
      />
    </>
  );
};
 
CustomInput.propTypes = {
  inputType: PropTypes.string
};
 
export default CustomInput;