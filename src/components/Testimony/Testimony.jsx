import { Name, Testimonies, TestimonyContainer, TestimonyHeader, TestimonyText,Rating, TestimonyTextContainer } from "./TestimonyStyle"


const Testimony = () => {
  return (
    <TestimonyContainer>
        <TestimonyHeader>What our clients have to say?</TestimonyHeader>

        <Testimonies>
            <Testimony>
                <Name>Mr. Leke</Name>
                <TestimonyTextContainer>
                    <TestimonyText>I’m happy I chose to process my visa with you guys, not a single regret. Visa came right on time with no hassle.</TestimonyText>
                </TestimonyTextContainer>

                <Rating></Rating>
            </Testimony>
        </Testimonies>
    </TestimonyContainer>
  )
}

export default Testimony