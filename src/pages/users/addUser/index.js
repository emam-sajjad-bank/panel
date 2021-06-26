//node modules
import React, { useState } from 'react';
import PropTypes from 'prop-types';

//components
import GlobalModal from '../../../components/globalModal';
import {  Input } from 'antd';

//utils

//styles
import { StyledForm } from './style';
import { addUserApi } from '../../../utils/API/users';


const AddUser = ({setRefreshFlag}) =>{
  const [closeFlag, setCloseFlag] = useState(false);
  const Adduser = async valuse =>{
    await addUserApi(valuse);
    setRefreshFlag();
    form.resetFields();
    setCloseFlag(!closeFlag);
  };

  const [form] = StyledForm.useForm();
  return(
    <>
      <GlobalModal
        modalIsOpen={closeFlag}
        modalProps={{
          okText:"افزودن",
          cancelText:"انصراف",
          title:"افزودن کاربر",
          onOk : ()=>form.submit(),
        }}
        buttonProps={{
          text:"افزودن کاربر"
        }}
      >
        <StyledForm
          form={form}
          onFinish={values=>Adduser(values)}
        >
          <StyledForm.Item
            name="username"
            label="نام کاربری"
            rules={[{ required: true, message: 'وارد کردن این فیلد الزامی است' }]}
          >
            <Input />
          </StyledForm.Item>
          <StyledForm.Item
            label="پسورد"
            name="password"
            rules={[{ required: true, message: 'وارد کردن این فیلد الزامی است' }]}
          >
            <Input.Password />
          </StyledForm.Item>
          <StyledForm.Item
            label="نام"
            name="first_name"
          >
            <Input />
          </StyledForm.Item>
          <StyledForm.Item
            label="نام خانوادگی"
            name="last_name"
          >
            <Input />
          </StyledForm.Item>
          <StyledForm.Item
            label="شماره تماس"
            name="phone"
          >
            <Input />
          </StyledForm.Item>
          <StyledForm.Item
            label="شماره شناسنامه"
            name="identity_code"
          >
            <Input />
          </StyledForm.Item>
          <StyledForm.Item
            label="کد ملی"
            name="national_code"
          >
            <Input />
          </StyledForm.Item>
        </StyledForm>
      </GlobalModal>
    </>
  );
};
 
AddUser.propTypes = {
  setRefreshFlag: PropTypes.func
};
 
export default AddUser;