import React , {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import {StyledButton , StyledModal} from './style';
import { Helmet } from 'react-helmet';

const GlobalModal = ({modalProps ={} , buttonProps={} , children , modalIsOpen }) => {
  const [isOpen , setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [modalIsOpen]);
  return(
    <>
      { isOpen &&
        <Helmet>
          <title>
          شناسه | {' '}
            {
              modalProps.title ?
                typeof modalProps.title === 'string' ?
                  modalProps.title : 
                  modalProps.title.props.children[0]
                :""
            }
          </title>
        </Helmet>}
      <StyledButton 
        {...buttonProps}  
        onClick={()=> {
          setIsOpen(true);
          if(buttonProps.onClick){
            buttonProps.onClick();
          }
        }
        }
      >
        {buttonProps.text? buttonProps.text : "کلیک کنید"}
      </StyledButton>
      <StyledModal
        zIndex={modalProps.zIndex ?modalProps.zIndex : 1050}
        {...modalProps}
        visible={isOpen}
        onCancel={()=>{
          if(modalProps.onCancel){
            modalProps.onCancel();
          }
          if(!modalProps.manualClose) setIsOpen(false);
        }}
      >
        <div className='modal-container'>
          {modalProps.header ? modalProps.header : ""}
          <div className='modal-content'>
            {children}
          </div>
        </div>
      </StyledModal>
    </>
  );

};
GlobalModal.propTypes = {
  modalProps: PropTypes.object,
  buttonProps: PropTypes.object,
  modalIsOpen: PropTypes.bool,
  children: PropTypes.any
};
export default GlobalModal;