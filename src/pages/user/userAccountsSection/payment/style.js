import Styled from 'styled-components';
import { Form } from 'antd';



const StyledForm = Styled(Form)`
    display: flex;
    justify-content: space-between;
    .ant-form-item-label{
        width: 50%;
    }
    .ant-form-item{
        width:100%;
    }
    button{
        margin: 0 1rem;
    }
`;
 
export {StyledForm};