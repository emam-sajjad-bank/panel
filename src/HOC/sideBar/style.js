import Styled from 'styled-components';
 
const StyledSideBar = Styled.div`
    position:fixed;
    width:20vw;
    height:100%;
    background:var(--white1);
    top:0;
    right: 0;
    display: flex;
    flex-direction: column;
    z-index:20;
    transition:0.2s all;
    & > a {
        padding:2rem 1rem;
        text-decoration: none;
        color: var(--Blue);
        padding-right: 2rem;
        transition:0.2s all;
        display: flex;
        align-items: center;
        position: relative;
        &:before{
                content: " ";
                display: block;
                position: absolute;
                top: 0;
                right: 0;
                height: 100%;
                width: 0;
                background:rgb(76 2 204 / 5%);
                transition:0.2s all;
            }
        &:after{
                content: " ";
                display: block;
                position: absolute;
                top: 0;
                right: 0;
                height: 100%;
                width: 0;
                background:rgb(76 2 204 / 10%);
                transition:0.2s all;
            }
        &:hover{
            font-weight:bold;
            padding-right: 4rem;
            &:before{
                width: 100%;
            }
        }
        &.active{
            font-weight:bold;
            &:hover{
                padding-right: 2rem;
            }
            &:after{
                width: 100%;
            }
            /* &:before{
                content: " ";
                display: block;
                width: 10px;
                height: 10px;
                background: var(--Blue);
                border-radius: 100%;
                margin-left: 1rem;
            } */
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
    @media(max-width:992px){
        min-width:250px;
        right: ${({menuIsActive})=> menuIsActive ? "0" : "-100%"};
        
    }
`;
 
export {StyledSideBar};