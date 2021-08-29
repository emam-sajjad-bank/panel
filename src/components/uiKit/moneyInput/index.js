
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {CustomInputNumber ,CustomPopover} from './style';

const InputMoney = (props , {onChange}) =>{
  const [value, setValue] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    !props.disabled ? ( 
      value.replace(/\$\s?|(,*)/g, '') > 0 ?
        setVisible(true) :
        setVisible(false)
    ) : 
      setVisible(false)
    ;
  }, [value]);
  return(
    <>
      <CustomPopover 
        content={value} 
        trigger="click"
        visible={visible}
        title={`${value} تومان `}
        getPopupContainer={trigger => trigger.parentElement}
      >
        <CustomInputNumber 
          {...props}
          onFocus={()=>{
            value >0 &&
            setVisible(true);
          }}
          onBlur={()=>setVisible(false)}
          style={{width:'100%'}}
          formatter={val => {
            setValue(`${Math.floor(val/10)}`.replace(/\B(?=(\d{3})+(?!\d))/g, ','));
            onChange && onChange(val);
            return`${val}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
          }
          }
          parser={val => val.replace(/\$\s?|(,*)/g, '')}
        />
      </CustomPopover>
     
    </>
  );
};

InputMoney.propTypes = {
  disabled: PropTypes.bool
};
 
export default InputMoney;