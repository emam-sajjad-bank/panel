//node modules
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { useHistory } from 'react-router';
//components
import MainHOC from '../../HOC';
import EditUserSection from './editUserSection';
import UserAccountsSection from './userAccountsSection';
//utils
import { getUserByIdApi} from '../../utils/API/users';

//styles




const SingleUserPage = () =>{
  const [userData, setUserData] = useState(null);

  const history = useHistory();

  const getUserById = async ()=>{
    const res = await getUserByIdApi(history.location.pathname.split("/")[2]);
    setUserData(res.data.data);
  };

  useEffect(() => {
    getUserById();
  }, []);

  return(
    <MainHOC>
      <EditUserSection userData={userData} />
      <UserAccountsSection userData={userData} />
    </MainHOC>
  );
};
 
SingleUserPage.propTypes = {
  data: PropTypes.any
};
 
export default SingleUserPage;