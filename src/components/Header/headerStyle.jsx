import styled from "styled-components";

export const  HeaderContainer = styled.div`
    background-color: #F5F5F5;
    width : 100%;
    height : 4.5rem;
    display: flex;
    padding:0 3rem ;
    overflow:hidden ;
    justify-content: space-between;
`

export const LogoImageAndLinkCont = styled.div`
    display: flex;
    flex-direction:row ;
    gap : 3rem;
`

export const LogoImage = styled.img`
`

export const LinkContainer = styled.div`
    display: flex;
    flex-direction:row ;
    gap : 3rem;
    align-items: center;


`   

export const LinkItems = styled.span`
    font-size:0.9rem ;
`

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    flex : 2;
    justify-content:space-around ;
    padding:0 4rem ;

`

export const SignInButton = styled.button`
    outline : none;
    border : none;
    padding : 0.5rem 1.3rem;
    border-radius:15px ;
        border : 1.5px solid #D19439;
        color : #222222;
        background:transparent ;
        font-size : 0.9rem;
`

export const SignUpButton = styled.button`
    outline : none;
    border : none;
    padding : 0.5rem 1.3rem;
    border-radius:15px ;
        background-color:#D19439 ;
        color : white;
        font-size : 0.9rem;

`