import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { LoadingOutlined } from '@ant-design/icons';


import history from '../../router/history';
import { CustomPagination } from './customPagination';

import { StyledTable } from './style';
 
const Customtable = ({
  withRouter,
  rowKey,
  size,
  columns,
  onRow,
  fetchDatafunc,
  refreshFlag,
  style,
  containerStyle
}) =>{

  
  const [ data , setData ] = useState([]);
  const [ page , setPage ] = useState(1);
  const [ total , setTotal ] = useState(1);
  const [ loading , setLoading ] = useState(false);
  const [ firstLoad , setFirstLoad ] = useState(true);

  const  fetchData = async(page) =>{
    setLoading(true);

    try{
      let res = await fetchDatafunc(page);
      const { data : { data , item_count}} = res ;
      setData(data);
      setTotal(item_count);
      setLoading(false);
      setFirstLoad(false);

    }catch(err){
      setFirstLoad(false);
      setLoading(false);
    }

  };
  useEffect(() => {
    if(!firstLoad){
      fetchData(page);
    }
  },[refreshFlag]);

  useEffect(() => {
    const SplitedLocation = history.location.search.split("=");
    const number = SplitedLocation[SplitedLocation.length -1]*1;
    if(withRouter) setPage(number > 0 ? number :1);
  },[ history.location.search]);

  useEffect(() => {
    fetchData(page);
  },[page]);

  useEffect(() => {
    if(!withRouter) setPage(1);
  },[]);

  const handleChange = (page) => {
    setPage(page);
    if(withRouter) history.push(`?page=${page}`);
  };

  return(
    <div style={containerStyle}>
      <StyledTable 
        style={style}
        rowKey={rowKey}
        size={size}
        columns={columns}
        onRow={onRow}
        dataSource={data}
        pagination={false}
        loading={
          {
            spinning :loading,
            size:"large",
            indicator:<LoadingOutlined spin />
          }
        }
      />
      <CustomPagination
        onChange={handleChange}
        total={total}
        current={page}
        defaultCurrent={page}
        pageSize={size}
      />
    </div>
  );
};
 
Customtable.propTypes = {
  rowKey: PropTypes.string,
  size: PropTypes.number,
  columns: PropTypes.object,
  onRow: PropTypes.func,
  fetchDatafunc: PropTypes.func,
  refreshFlag: PropTypes.bool,
  withRouter: PropTypes.bool,
  style: PropTypes.object,
  containerStyle: PropTypes.object,
  
};
 
export default Customtable;