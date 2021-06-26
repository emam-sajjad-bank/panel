import Styled from 'styled-components';
import { Pagination } from 'antd';
 
const CustomPagination = Styled(Pagination)`
    direction: ltr;
    padding: 15px;
    justify-content: center;
    display: flex;
    .ant-pagination-item{
        display: flex;
        align-items:center;
        justify-content:center;
    }
`;
 
export {CustomPagination};