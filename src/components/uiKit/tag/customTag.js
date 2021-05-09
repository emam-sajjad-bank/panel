import Styled from 'styled-components';
import { Tag } from 'antd';

const CustomTag = Styled(Tag)`
    display:inlin-flex;
    align-items:center;
    &.ant-tag-success{
        border-color:transparent !important;
        color:#07d3b3;
        background: #ddfff3 !important;
    }
    &.ant-tag-warning{
        border-color:transparent !important;
        color#f2b74a;
        background: #fff6cf !important;
    }
    &.ant-tag-error{
        border-color:transparent !important;
        color: #ff4e85;
        background: #ffeef1 !important;
        span{
            color:#ff4e85 !important;
            cursor: default !important;
        }
    }
`;
export default CustomTag;