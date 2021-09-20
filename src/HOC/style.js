
import Styled from 'styled-components';
 
const StyledContainer = Styled.div`
    display: flex;
    justify-content: end;
    & > div{
        width: 80vw;
        padding:2rem;
    }
    @media(max-width : 992px){
        & > div{
            width:100%;
        }
    }
`;
 
export {StyledContainer};
