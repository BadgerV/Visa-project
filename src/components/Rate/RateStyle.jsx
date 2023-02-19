import styled from "styled-components";

export const RateContainer = styled.div`
    width:50% ;
    position:relative ;
    height:80px ;
    background-color:#D19439 ;
    top : -30px;
    left: 50%;
    transform:translateX(-50%);
    border-radius:20px ;
    padding:1.5rem 3rem ;
    display:flex ;
    align-items: center;
    justify-content:space-between ;
`

export const MiniCont = styled.div`
    display: flex;
    flex-direction:column ;
    justify-content: space-around;
    align-items: center;
`

export const BigText = styled.span`
    font-size:1.8rem ;
    font-weight: bold;
    color : white;

`
export const SmallText = styled.span`
    font-size:0.8rem ;
    color : white;
    font-size: 0.75rem;
    font-weight: 400;
`