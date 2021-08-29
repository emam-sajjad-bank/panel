//node modules
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';
//components
import GlobalModal from '../../../../components/globalModal';
import ErrorAndAlert from '../../../../components/errorNAlert';
import { InputMoney } from '../../../../components/uiKit';
//utils
import { editAccountsForUserApi } from '../../../../utils/API/accounts';
//styles
import { StyledForm } from './style';



 
const EditAccountAndLoan = ({account , setRefreshFlag}) =>{
  const [closeFlag, setCloseFlag] = useState(false);
  const [form] = StyledForm.useForm();

  const addAccount = async valuse =>{
    try{
      await editAccountsForUserApi(account._id , valuse);
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
        okText:"ویرایش",
        cancelText:"انصراف",
        title:"ویرایش",
        onOk : ()=>form.submit(),
      }}
      buttonProps={{
        text:"ویرایش"
      }}
    >
      {account && 
              <StyledForm
                form={form}
                onFinish={values=>addAccount(values)}
                initialValues={account}
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
      }

    </GlobalModal>
  );
};
   
 
EditAccountAndLoan.propTypes = {
  account: PropTypes.object,
  setRefreshFlag: PropTypes.func,
};
 
export default EditAccountAndLoan;