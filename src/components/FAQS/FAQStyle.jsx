import styled from "styled-components";;

export const FAQSContainer = styled.div`
    margin-top: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    flex-direction: column;
`

export const FAQSHeader = styled.span`
    font-size: 2rem;
    margin-bottom: 4rem;
    font-weight: 800;
`

export const QuestionsContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 2rem;
    border: 1px solid rgba(189, 189, 189, 0.4);

    .questionAndAnswer {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

`

export const FAQQuestion = styled.span`
    font-size: 1.1rem;
    font-weight: bold;
    
`
export const FAQAnswer = styled.span`
    font-size : 0.8rem;
    font-weight: 400;
    padding: 0.5rem;
    
`

export const FAQButton = styled.img`
    max-height: 20px;
`