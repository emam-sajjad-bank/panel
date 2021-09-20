//node modules
import React, { useState } from 'react';
import PropTypes from 'prop-types';

//components
import { CustomInput } from '..';
//utils

//styles

const EdiableInput = ({value}) =>{
  const [editable, setEditable] = useState(false);
  return(
    <>
      {editable ? 
        <CustomInput onBlur={()=>setEditable(false)} value={value} /> : 

        <p onClick={()=>setEditable(true)}>
          {value}
        </p>

      }

    </>
  );
};


EdiableInput.propTypes = {
  value: PropTypes.string
};

export default EdiableInput;