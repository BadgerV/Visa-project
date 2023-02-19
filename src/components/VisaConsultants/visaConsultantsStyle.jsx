import styled from "styled-components";

export const VisaContainer = styled.div`
    margin-top:3rem ;
    background-color:#F5F5F5 ;
    display: flex;
    flex-direction: row ;
    padding : 2rem 0 2rem 2rem;
`

export const LeftSide = styled.div`
    flex : 1;
    padding: 6rem;

`

export const LeftSideHeader = styled.span`
    display : block;
    font-size : 2rem; 
    font-weight: 800;
    margin-bottom: 0.9rem;
    
`

export const LeftSideText = styled.span`
    font-size : 1rem;
    font-weight: 400;
`

export const RightSide = styled.div`
    flex : 1;
    position : relative;
    overflow : hidden;
`

export const RightImg = styled.img`
    position : absolute;
    top:0 ;
    left : 10%;
    max-height:100% ;
`
export const BehindImage = styled.img`
    position : relative;
    left : 70%;
    top:50% ;
    transform : translateY(-50%) 

`