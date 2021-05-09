import Styled from 'styled-components';
import { Checkbox } from 'antd';
const StyledCheckBox = Styled(Checkbox)`
    display: flex;
    align-items: center;
    padding:1rem;
    .ant-checkbox{
        display: flex;
        margin:1rem;

        input{
            width:15px;
            height:15px;
        }
    }
`;
 
export {StyledCheckBox};