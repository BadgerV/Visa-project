import styled from 'styled-components';


export const TopDestinationCont = styled.div`
    display: flex;
    flex-direction:column ;
    align-items: center;
    justify-content: center;
    margin-top: 4rem;
    padding : 1.5rem;
`

export const TopDestHeader = styled.span`
    font-size: 2rem;
    font-weight: 800;
    margin-bottom:2rem ;
    
`

export const TopDestinations = styled.div`
    display: flex;
    flex-direction:row ;
    justify-content:space-between;
    gap :1.5rem;
    width : 90%;
`

export const Destination= styled.div`
    display: flex;
    flex-direction:column ;
    align-items: center;
    justify-content: center;
`

export const DestinationImg = styled.img`
    width : 100%;
`

export const DestinationLabel = styled.span`
    display:block ;
    margin-top :-1px;
    width: 100% ;
    text-align:center ;
    border-radius: 0px 0px 15px 15px;
    padding : 0.5rem 0;
    color : white;
    font-weight: 300;
    font-size: 0.9rem;
    background-color:${props => props.yellow ? "#D19439" : "rgba(22, 46, 64, 0.9)"} ;
`