import Styled from 'styled-components';
 
const StyledNavbar = Styled.nav`
    display:flex;
    justify-content:space-between;
    & > button{
        width:max-content;
        min-width: auto;
    }
`;
 
export {StyledNavbar};