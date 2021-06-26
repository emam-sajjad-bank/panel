import Styled from 'styled-components';
import { Table } from 'antd';

const StyledTable = Styled(Table)`
    direction:rtl;
    .ant-table-thead > tr > th{
        text-align:right;
    }
    .ant-empty-normal{
        display:flex;
        flex-diraction:column;
        align-items:center;
        justify-content:center;
    }
`;
 
export {StyledTable};