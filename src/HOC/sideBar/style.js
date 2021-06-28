import Styled from 'styled-components';
 
const StyledSideBar = Styled.div`
    position:fixed;
    width:30vw;
    min-width:250px;
    max-width:350px;
    height:100%;
    background:var(--white1);
    top:0;
    display: flex;
    flex-direction: column;
    & > a {
        padding:1rem;
        text-decoration: none;
        color: var(--Blue);
        padding-right: 2rem;
        transition:0.2s all;
        display: flex;
        align-items: center;
        &:hover{
            font-weight:bold;
            padding-right: 4rem;

        }
        &.active{
            font-weight:bold;
            &:hover{
                padding-right: 2rem;
            }
            &:before{
                content: " ";
                display: block;
                width: 10px;
                height: 10px;
                background: var(--Blue);
                border-radius: 100%;
                margin-left: 1rem;
            }
        }
    }
    & > div.welcome{
        width: 100%;
        display:flex;
        align-items:center;
        justify-content:center;
        font-weight:bold;
        padding:3rem;
        background:var(--Gray1);
    }
`;
 
export {StyledSideBar};