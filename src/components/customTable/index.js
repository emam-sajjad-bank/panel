import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Table } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';


import { LoadingStartAction, LoadingEndAction } from '../../redux/app/actions';
import history from '../../router/history';
import { CustomPagination } from './customPagination';
 
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
  const dispatch = useDispatch();
  
  const [ data , setData ] = useState([]);
  const [ page , setPage ] = useState(1);
  const [ total , setTotal ] = useState(1);
  const [ loading , setLoading ] = useState(false);
  const [ firstLoad , setFirstLoad ] = useState(true);

  function fetchData(page){
    setLoading(true);
    if(firstLoad) dispatch(LoadingStartAction());
    setTimeout(async()=>{
      try{
        let res = await fetchDatafunc(page);
        const { data : { data : { total , data }}} = res ;
        setData(data);
        setTotal(total);
        setLoading(false);
        setFirstLoad(false);
        dispatch(LoadingEndAction());
      }catch(){
        setFirstLoad(false);
        setLoading(false);
        dispatch(LoadingEndAction());
      }
    } , 3000);

  }
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
      <Table 
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