import styled from "styled-components";

export const DestinationContainer = styled.div`
    display : flex;
    flex-direction:column ;
    border-radius:20px ;
`   

export const TopDestination = styled.div`
    padding: 1rem;
    text-align: center;
    background-color:white ;
    font-size : 0.9rem;
    font-weight: 500;
    border-top-left-radius: 20px; 
    border-top-right-radius: 20px;
`

export const MiddleDestination = styled.img`
`

export const LowerDestination = styled.div`
    background-color:#D19439 ;
    display: flex;

    flex-direction:column ;
    padding : 0.5rem 1rem;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
`

export const ProcessingTime = styled.span`
    color : white;
    font-weight: 300;
    font-size : 0.7rem

`

export const Days = styled.span`
    color : #222222;
    font-size : 0.8rem;
    margin-bottom : 0.5rem;

`

export const Amount = styled.span`
    color : white;
    font-weight: 400;
    font-size : 0.8rem

`
