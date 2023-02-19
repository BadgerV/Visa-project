import React from 'react'
import { AssessmentButton, AssessmentContainer, AssessmentForm, AssessmentHeader, AssessmentMiniText } from './AssessmentStyle'

const Assessment = () => {
  return (
    <AssessmentContainer>
        <AssessmentHeader>Get free assessment today</AssessmentHeader>
        <AssessmentMiniText>Feel free to enquire about any questions you have</AssessmentMiniText>

        <AssessmentForm>
            <input type="text" placeholder='Full Name' className='input' />
            <input type="text" placeholder='Email Address' className='input' />
            <input type="text-area" placeholder='Type message here' className='input area' id = "area" />
        </AssessmentForm>

        <AssessmentButton>Send</AssessmentButton>
    
    </AssessmentContainer>
  )
}

export default Assessment