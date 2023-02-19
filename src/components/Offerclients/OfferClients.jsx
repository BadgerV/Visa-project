import { BigContainer, BoxContainer,StaticSVG, BoxHeader, BoxText, OfferClientsContainer, WhatWeOffer } from "./offerClientsStlyle"
import svg1 from '../../asset/1.svg';
import svg2 from '../../asset/2.svg';
import svg3 from '../../asset/3.svg';
import svg4 from '../../asset/4.svg';

const OfferClients = () => {
  return (
    <OfferClientsContainer>
        <WhatWeOffer>What we offer our clients</WhatWeOffer>

        <BigContainer>
            <BoxContainer>
                <StaticSVG src = {svg1} />
                <BoxHeader>Visa Consultutation</BoxHeader>
                <BoxText>Our qualified and dependable visa consultants can assist you in obtaining a favorable result in your case.</BoxText>
            </BoxContainer>

            <BoxContainer>
                <StaticSVG src = {svg2} />
                <BoxHeader>Resources</BoxHeader>
                <BoxText>We provide our clients with important information and resources and also the travel requrements needed.</BoxText>
            </BoxContainer>

            <BoxContainer>
                <StaticSVG src = {svg3} />
                <BoxHeader>Support</BoxHeader>
                <BoxText>We also provide  required document support to ease the application process.</BoxText>
            </BoxContainer>

            <BoxContainer>
                <StaticSVG src = {svg4} />
                <BoxHeader>Free Assessment</BoxHeader>
                <BoxText>We help those who want to know their eligibility status by assisting with free visa assessment.</BoxText>
            </BoxContainer>
        </BigContainer>

    </OfferClientsContainer>


  )
}

export default OfferClients