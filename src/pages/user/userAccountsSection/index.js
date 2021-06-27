//node modules
import React, { useState } from 'react';
import PropTypes from 'prop-types';

//components
import { CustomSection } from '../../../components/uiKit';
import Customtable from '../../../components/customTable';
import { getAccountsByUserIdApi } from '../../../utils/API/accounts';
import AddAccount from './addAccount';
//utils
import columns from './columns';
//styles
 
const UserAccountsSection = ({userData}) =>{
  const [refreshFlag, setRefreshFlag] = useState(false);
  return(
    <>
      {userData && 
        <CustomSection 
          title="حساب های کاربر"
          fullWidth
          zeroPadding
          actions={<AddAccount userId={userData._id} setRefreshFlag={setRefreshFlag} />}
        >
          <Customtable 
            withRouter
            size={10}
            refreshFlag={refreshFlag}
            fetchDatafunc={page=> getAccountsByUserIdApi(userData._id , page)}
            columns={columns}
            onRow={()=>{
              return{
                // onClick :()=>history.push("/user/" +user._id)
              };
            }}
          />

    
        </CustomSection>
      }   
    </>
  );
};
 
UserAccountsSection.propTypes = {
  userData: PropTypes.object
};
 
export default UserAccountsSection;