import styled from "styled-components";


export const TestimonyContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction:column ;
    margin-top:4rem ;
    padding: 2rem;
`

export const TestimonyHeader = styled.span`
    font-size: 2rem;
    font-weight: 800;
    margin-bottom: 4rem;

`
export const Testimonies = styled.div`
    display: flex;
    flex-direction:row ;
    gap: 2rem;
    justify-content: space-between;
    padding: 0 5rem;
`
export const OneTestimony = styled.div`
    display: flex;
    flex-direction:column ;
    align-items: center;
    justify-content: center;
    padding : 3rem 2rem 1rem 2rem;
    background-color:white ;
    position: relative;
    border-radius: 20px;
    flex: 1;
`

export const MiniImage = styled.img`
    position : absolute;
    left : 50%;
    top: 0;
    border-radius: 50%;
    transform: translate(-50%, -50%);
`

export const Name = styled.span`
    text-align:center ;
    margin-bottom: 0.2rem;
    font-size : 0.7rem;
    font-weight: bold;
`

export const TestimonyTextContainer = styled.div`
    position:relative ;
    left:50% ;
    transform:translateX(-50%) ;
    padding: 0.5rem 1rem 1rem 1rem;
    padding: 0.5rem 2.5rem 1rem 2.5rem;
`

export const Apostrophe1 = styled.img`
    position: absolute;
    height: 15px;
    top : 7%;
    left : 5%;
`
export const Apostrophe2 = styled.img`
    position: absolute;
    height: 20px;
    bottom : 13%;
    right : 5%;
`


export const TestimonyText = styled.span`
    font-size:0.8rem ;
    display: block;
    text-align: center;
    font-size : 0.8rem;
    font-weight: 400;
`

export const Rating = styled.span`
`



