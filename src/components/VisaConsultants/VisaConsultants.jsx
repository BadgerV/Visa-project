import { BehindImage, LeftSide, LeftSideHeader, LeftSideText, RightImg, RightSide, VisaContainer } from "./visaConsultantsStyle"
import img from '../../asset/chess-img-min.jpg';
import doodle from '../../asset/doodle.png';

const VisaConsultants = () => {
  return (
    <VisaContainer>
        <LeftSide>
            <LeftSideHeader>Africa’s leading visa consultants</LeftSideHeader>
            <LeftSideText>VISAPROF is a pioneer in Nigeria’s online travel industry. The organization started in 2020 on the basis of an idea conceived by its promoters. VISAPROF is trusted by over 200 clients. We assist applicants in navigating the visa process to any country in which they choose to stay or visit.</LeftSideText>
        </LeftSide>
        <RightSide>
        <BehindImage src = {doodle} />

            <RightImg src = {img}/>
        </RightSide>
    </VisaContainer>
  )
}

export default VisaConsultants