//node modules
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';

//components
import GlobalModal from '../../../../components/globalModal';
import { InputMoney } from '../../../../components/uiKit';
//utils
import {createAccountsForUserApi} from '../../../../utils/API/accounts';
import ErrorAndAlert from '../../../../components/errorNAlert';
//styles
import { StyledForm } from './style';





const AddAccount = ({userId , setRefreshFlag}) =>{
  const [closeFlag, setCloseFlag] = useState(false);
  const [form] = StyledForm.useForm();


  const addAccount = async valuse =>{
    try{
      await createAccountsForUserApi(userId , valuse);
      setRefreshFlag();
      ErrorAndAlert({message: "تغییرات با موفقیت ذخیره شد"});
      form.resetFields();
      setCloseFlag(!closeFlag);
    }catch(err){
      ErrorAndAlert({message:err.response.data.message ,type: "error"});
    }

  };


  return(
    <GlobalModal
      modalIsOpen={closeFlag}
      modalProps={{
        okText:"افزودن",
        cancelText:"انصراف",
        title:"افزودن حساب",
        onOk : ()=>form.submit(),
      }}
      buttonProps={{
        text:"افزودن حساب"
      }}
    >
      <StyledForm
        form={form}
        onFinish={values=>addAccount(values)}
      >
        <StyledForm.Item
          name="card"
          label="شماره حساب"
          rules={[{ required: true, message: 'وارد کردن این فیلد الزامی است' }]}
        >
          <Input />
        </StyledForm.Item>
        <StyledForm.Item
          label="موجودی حساب"
          name="budge"
          rules={[{ required: true, message: 'وارد کردن این فیلد الزامی است' }]}
        >
          <InputMoney />
        </StyledForm.Item>
      </StyledForm>
    </GlobalModal>
  );
};
 
AddAccount.propTypes = {
  userId: PropTypes.string,
  setRefreshFlag: PropTypes.func,
};
 
export default AddAccount;