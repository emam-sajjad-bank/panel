import React, { useState } from "react";
import { useHistory } from "react-router";
import Customtable from "../../components/customTable";
import { CustomSection } from "../../components/uiKit";
import MainHOC from "../../HOC";
import {getUsersApi} from '../../utils/API/users';
import AddUser from "./addUser";
import columns from './columns';

const Users = () => {
  const history = useHistory();
  const [refreshFlag, setRefreshFlag] = useState(false);
  return (
    <MainHOC>
      <CustomSection 
        title="لیست کاربران"
        fullWidth
        zeroPadding
        actions={<AddUser setRefreshFlag={()=>setRefreshFlag(!refreshFlag)}  />}
      >
        <Customtable 
          withRouter
          size={10}
          refreshFlag={refreshFlag}
          fetchDatafunc={getUsersApi}
          columns={columns}
          onRow={(user)=>{
            return{
              onClick :()=>history.push("/user/" +user._id)
            };
          }}
        />
      </CustomSection>
    </MainHOC>
  );
};

export default Users;
