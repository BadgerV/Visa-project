import { FooterBottom, FooterContainer, FooterIcon, FooterLeft, FooterRight, FooterRightContainer, FooterRightHeader, FooterRightTexts, FooterTop } from "./footerStyle"
import faceBookIcon from '../../asset/facebook.png'
import twitterIcon from '../../asset/twitter.png'
import whatsapp from '../../asset/whatsapp.png'
import linkedIn from '../../asset/linkedin.png'


const Footer = () => {
  return (
    <>
        <FooterContainer>
        <FooterTop>
            <FooterLeft>
                <FooterIcon src = {faceBookIcon} />
                <FooterIcon src = {twitterIcon} />
                <FooterIcon src = {whatsapp} />
                <FooterIcon src = {linkedIn} />

            </FooterLeft>
            <FooterRight>
                <FooterRightContainer>
                    <FooterRightHeader>Company</FooterRightHeader>
                    <FooterRightTexts>Home</FooterRightTexts>
                    <FooterRightTexts>About Us</FooterRightTexts>
                </FooterRightContainer>

                <FooterRightContainer>
                    <FooterRightHeader>Legal</FooterRightHeader>
                    <FooterRightTexts>Privacy Policy</FooterRightTexts>
                    <FooterRightTexts>Terms of Services</FooterRightTexts>
                </FooterRightContainer>

                <FooterRightContainer>
                    <FooterRightHeader>Community</FooterRightHeader>
                    <FooterRightTexts>Blogs</FooterRightTexts>
                    <FooterRightTexts>FAQs</FooterRightTexts>
                </FooterRightContainer>

                <FooterRightContainer>
                    <FooterRightHeader>Contact</FooterRightHeader>
                    <FooterRightTexts>info@visaprof.com</FooterRightTexts>
                    <FooterRightTexts>07017401336</FooterRightTexts>
                </FooterRightContainer>
            </FooterRight>
        </FooterTop>

        
    </FooterContainer>
<FooterBottom>2022 VISAPROF Visa processing firm. All rights reserved</FooterBottom>

    </>
    

  )
}

export default Footer