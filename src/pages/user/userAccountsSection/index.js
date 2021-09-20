//node modules
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

//components
import { CustomSection } from '../../../components/uiKit';
import Customtable from '../../../components/customTable';

import AddAccount from './addAccount';
//utils
import columns from './columns';
import { getOptionsApi } from '../../../utils/API/options';
import { getAccountsByUserIdApi } from '../../../utils/API/accounts';
//styles
 
const UserAccountsSection = ({userData}) =>{
  const [refreshFlag, setRefreshFlag] = useState(false);
  const [options, setOptions] = useState({});

  const getOptions = async () =>{
      
    const res = await getOptionsApi();
    setOptions({
      LOAN_AMOUNT:res.data.data.find(option=>option.key === "LOAN_AMOUNT"),
      BUDGE_MONTHLY_INCREASE:res.data.data.find(option=>option.key === "BUDGE_MONTHLY_INCREASE"),
      ACCOUNT_MINIMUM_BUDGE:res.data.data.find(option=>option.key === "ACCOUNT_MINIMUM_BUDGE"),
    });
  };
  useEffect(() => {
    getOptions();
  }, []);

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
            columns={columns(()=>setRefreshFlag(!refreshFlag) , options)}
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