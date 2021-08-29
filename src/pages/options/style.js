import Styled from 'styled-components';
import { Form } from 'antd';



const StyledForm = Styled(Form)`
    display:grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    padding: 2% 5%;
    .ant-form-item-label{
        width: 20%;
    }
    & > button{
        width: max-content;
        justify-self: left;

    }
`;



export {StyledForm};