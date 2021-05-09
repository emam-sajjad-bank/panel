import React, { useState }  from 'react';
import {Helmet} from "react-helmet";


import {Style , LoginBox } from './style';

import {CustomButton , CustomInput , CustomCheckBox} from '../../components/uiKit';
import MainHOC from '../../HOC';

import {loginAPI} from '../../utils/API/auth';


const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(true);



  const login = async () =>{
    await loginAPI({
      username,
      password,
      isAdmin
    });
  };

  return(
    <MainHOC>
      <Style>
        <Helmet>
          <title>گاجینو | صفحه ورود</title>
        </Helmet>
        <LoginBox>
          <div >

          </div>
          <CustomInput 
            name="username" 
            placeholder="نام کاربری"
            value={username}
            onChange={e=>setUserName(e.target.value)}
          />                            

          <CustomInput 
            name="password" 
            type="password" 
            placeholder="کلمه عبور"
            value={password}
            onChange={e=>setPassword(e.target.value)}
          />       
          <CustomCheckBox 
            checked={isAdmin}
            onChange={e=>setIsAdmin(e.target.checked)}
          >
           ورود به عنوان ادمین
           
          </CustomCheckBox>
          <CustomButton 
            shape="round"
            type="primary"
            onClick={login}
          >
        ورود   
          </CustomButton>
        </LoginBox>
      </Style>
    </MainHOC>

  );
};

export default Login;
