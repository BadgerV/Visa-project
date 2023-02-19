import styled from "styled-components";

export const OfferClientsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column ;
    background-color: #F5F5F5 ;
    margin-top:4rem ;
    padding : 1rem 0;
`

export const WhatWeOffer = styled.span`
    font-size: 2rem;
    font-weight: 800;
    margin-bottom: 3rem;
`

export const BigContainer = styled.div`
    width : 80%;
    display: flex;
    gap : 1.5rem;
    justify-content: space-around;
`

export const BoxContainer = styled.div`
    width : 23%;
    position : relative;
    display: flex;
    align-items: center;
    flex-direction:column ;
    background-color:white ;
    padding: 3rem 1.5rem 0.8rem 1.5rem;
    border-radius:20px ;
`

export const BoxHeader = styled.span`
    display: block;
    font-weight: bold;
    font-size: 1.1rem;
    margin-bottom: 1rem;

`

export const BoxText = styled.span`
    display: block;
    text-align: center;
    font-weight: 400;
    font-size:0.9rem ;
`

export const StaticSVG = styled.img`
    position:absolute ;
    left : auto;
    top : -10%;
`