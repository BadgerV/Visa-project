import styled from "styled-components";

export const SignInContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;
    gap : 0;
    align-items: center;
    justify-content: center;
`
export const SignInLeft = styled.div`
    flex : 1;
    position: relative;
`
export const LeftImage = styled.img`
    height: 100vh;
    width : 100%;
`

export const LeftImageSmall = styled.img`
    position: absolute;
    left: 0;
    top : 10%;
    max-width: 50%;
`
export const SignInRight = styled.div`
    flex : 2.5;
    
`

export const SignInRightMini = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
`

export const SignInHEader = styled.span`
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: 1px;
`

export const MiniText = styled.span`
    font-size: 0.8rem;
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
    color : #757575;
`

export const SignInForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`

export const SignInput = styled.input`
    width : 100%;
    padding : 0.8rem 2rem;
    border-radius: 10px;
    outline: none;
    border: none;
    background-color: rgba(209, 148, 57, 0.1);
    border: 1.5px solid rgba(209, 148, 57, 0.4);
    color : #757575;
`

export const SignInButton = styled.button`
    border-radius: 15px;
    color : white;
    background-color: #D19439;
    padding : 0.7rem 2rem;
    font-size: 0.9rem;
    max-width: max-content;
    outline: none;
    border: none;
    margin-top: 1.5rem;
`

export const ExtraText = styled.div`
    font-size: 0.8rem;
    width: 100%;
    text-align: center;
    margin-top: 1rem;
`