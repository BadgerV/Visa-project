import React from 'react'
import { Amount, Days, DestinationContainer, LowerDestination, MiddleDestination, ProcessingTime, TopDestination } from './DestinationStyle'
import miniImage1 from '../../asset/miniFrame1.jpg';
import miniImage2 from '../../asset/miniFrame2.jpg';
import miniImage3 from '../../asset/miniFrame3.jpg';
import miniImage4 from '../../asset/miniFrame4.jpg';

const Destination = () => {
  return (
    <>
        <DestinationContainer>
            <TopDestination>United Arab Emirates</TopDestination>
            <MiddleDestination src = {miniImage1} alt = "" />
            <LowerDestination>
                <ProcessingTime>Proccessing Time:</ProcessingTime>
                <Days>2 - 3 working days</Days>
                <Amount>N30,000 per person</Amount>
            </LowerDestination>
        </DestinationContainer>

        <DestinationContainer>
            <TopDestination>Maldives</TopDestination>
            <MiddleDestination src = {miniImage2} alt = "" />
            <LowerDestination>
                <ProcessingTime>Proccessing Time:</ProcessingTime>
                <Days>2 - 3 working days</Days>
                <Amount>N30,000 per person</Amount>
            </LowerDestination>
        </DestinationContainer>

        <DestinationContainer>
            <TopDestination>South Africa</TopDestination>
            <MiddleDestination src = {miniImage3} alt = "" />
            <LowerDestination>
                <ProcessingTime>Proccessing Time:</ProcessingTime>
                <Days>2 - 3 working days</Days>
                <Amount>N30,000 per person</Amount>
            </LowerDestination>
        </DestinationContainer>

        <DestinationContainer>
            <TopDestination>Jordan</TopDestination>
            <MiddleDestination src = {miniImage4} alt = "" />
            <LowerDestination>
                <ProcessingTime>Proccessing Time:</ProcessingTime>
                <Days>2 - 3 working days</Days>
                <Amount>N30,000 per person</Amount>
            </LowerDestination>
        </DestinationContainer>
    </>
    
  )
}

export default Destination