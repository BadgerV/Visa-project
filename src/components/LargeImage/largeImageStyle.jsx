import styled from "styled-components";
import img from '../../asset/largeImage.jpg'

export const LargeImageContainer = styled.div`
    background-image: url(${img}) ;
    background-size: cover;
    background-position: center;
    height: 85vh;
    padding: 2rem;
    padding-top:6rem ;
`

export const VisaTextContainer = styled.div`
    width:30% ;
    margin-bottom:2rem ;
`

export const VisaText = styled.span`
    color : white;
    font-size: 1.5rem;
    font-weight:700 ;
`

export const BlurContainer = styled.div`
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.32) 0%, rgba(255, 255, 255, 0.08) 100%);
    backdrop-filter: blur(22.5px);
    width : 100%;
    display: flex;
    justify-content:space-between ;
    padding : 1.5rem 1rem 6rem 1rem;
    margin-bottom : 1.5rem;
    border-radius:20px ;
`



export const PlacesContanier = styled.div`
    display: flex;
    gap : 1rem;
    position:relative ;
    
`

export const Places = styled.div`
    background-color:white ;
    border-radius:10px ;
    width : 10.5rem;
    height: 5.6rem;
    padding:0.5rem 0.8rem ;
    .travelling_from {
        font-weight:300 ;
        color:  #757575 ;
        font-size:0.65rem ;
        margin-bottom : 1.5rem;
        display: block;
    }

    .placeAndArrowContainer {
        display: flex;
        flex-direction: row;
    }

    .place {
        font-size: 0.85rem;
        margin-bottom: 0;
    }

    .placeArrowDayCont {
        display: flex;
        flex-direction:column ;
        gap :0 ;
    }

    .andArrowCont {
        margin-bottom:0 ;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .day {
        font-size: 0.6em;
        display: block;
    }
    
`

export const InBetweenIcon = styled.img`
    position : absolute;
    top:50% ;
    left : 50%;
    transform: translate(-50%, -50%) ;
    height:2.5rem;
    width:2.5rem ;
`

export const NextIcon = styled.img`
    position:relative;
    left: 50% ;
    transform: translateX(-50%) ;
    margin-top:-5.5rem ;
    height:3rem;
    width:3rem ;
    display:block ;
`


export const RateContainer = styled.div`
`