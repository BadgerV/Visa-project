import styled from "styled-components";

export const FooterContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 2rem;
`
export const FooterTop = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem;
    width : 100%;
    gap: 5rem;
    
`


export const FooterLeft = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    padding: 0 3rem;
`

export const FooterRight = styled.div`
    flex: 3;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 2rem;
`

export const FooterRightContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
`

export const FooterRightHeader = styled.div`
    font-size: 0.9rem;
    font-weight: bold;
    margin-bottom: 0.2rem;
`

export const FooterRightTexts = styled.div`
    font-weight: 300;
    font-size: 0.8rem;
`

export const FooterIcon = styled.img`

`

export const FooterBottom = styled.div`
    display: flex;
    background-color: #162E40;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0.5rem 0;
    color : white;
    font-weight: 300;
    font-size: 0.8rem;
`