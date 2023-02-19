import styled from 'styled-components';

export const AssessmentContainer = styled.div`
    margin-top: 4rem;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    padding: 1rem;
`

export const AssessmentHeader = styled.span`
    font-size: 2rem;
    font-weight: 800;

`

export const AssessmentMiniText = styled.span`
    color: #D19439;
    font-size: 0.9rem;
    font-weight: 300;
`

export const AssessmentForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
    width: 100%;
    gap: 1rem;

    .input {
        padding :0.81rem 1.5rem;
        outline: none;
        border : none;
        font-size: 0.9em;
        border-radius: 10px;
        width : 80%;
    }

    #area {
        height: 100px;
    }
    
`

export const AssessmentButton = styled.button`
    padding : 0.7rem 3rem;
    font-size: 0.9em;
    outline: none;
    border: none;
    margin-top: 1.5rem;
    color : white;
    background-color: #D19439;
    border-radius: 10px;
`