//node modules
import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'antd';
//components
import MainHOC from '../../HOC';
import { CustomSection } from '../../components/uiKit';
//utils

//styles
 
const SingleUserPage = () =>{
  return(
    <MainHOC>
      <CustomSection 
        title="مشخصات کاربر"
        fullWidth
      >
        <Form
        //   onFinish={onFinish}
        >
          <Form.Item
            label="نام کاربری"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="نام"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="نام خانوادگی"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </CustomSection>
    </MainHOC>
  );
};
 
SingleUserPage.propTypes = {
  data: PropTypes.any
};
 
export default SingleUserPage;