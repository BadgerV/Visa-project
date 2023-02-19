import { Name, Testimonies, OneTestimony,Apostrophe1,Apostrophe2, TestimonyContainer, TestimonyHeader, TestimonyText,Rating, TestimonyTextContainer, MiniImage } from "./TestimonyStyle"
import aspt from '../../asset/apostrophe.png'
import aspt1 from '../../asset/apostrophe(1).png'
import MiniPic1 from '../../asset/mini-picture1.jpg';
import MiniPic3 from '../../asset/mini-picture3.jpg';
import MiniPic2 from '../../asset/mini-picture2.jpg';


const Testimony = () => {
  return (
    <TestimonyContainer>
        <TestimonyHeader>What our clients have to say?</TestimonyHeader>

        <Testimonies>
            <OneTestimony>
              <MiniImage src = {MiniPic1} />
              <Name>Mr. Wale</Name>
              <TestimonyTextContainer>
                <Apostrophe1 src = {aspt} />

                <TestimonyText>I’m happy I chose to process my visa with you guys, not a single regret. Visa came right on time with no hassle.</TestimonyText>
                <Apostrophe2 src = {aspt1} />

              </TestimonyTextContainer>
            </OneTestimony>

            <OneTestimony>
            <MiniImage src = {MiniPic2} />

              <Name>Matthew Eke</Name>
              <TestimonyTextContainer>
                <Apostrophe1 src = {aspt} />

                <TestimonyText>The processing was fast and I got the visa right on time. Service is 100. Will defintely be doing more business with you. </TestimonyText>
                <Apostrophe2 src = {aspt1} />

              </TestimonyTextContainer>
            </OneTestimony>

            <OneTestimony>
            <MiniImage src = {MiniPic3} />

              <Name>Debbie</Name>
              <TestimonyTextContainer>
                <Apostrophe1 src = {aspt} />

                <TestimonyText>VISAPROF for the win... Wow!! How were you able to do this so fast. If i didn’t get this visa, I would have had to cancel my trip</TestimonyText>
                <Apostrophe2 src = {aspt1} />

              </TestimonyTextContainer>
            </OneTestimony>
        </Testimonies>
    </TestimonyContainer>
  )
}

export default Testimony