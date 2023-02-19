import { RateContainer,MiniCont,BigText,SmallText } from "./RateStyle"

const Rate = () => {
  return (
    <RateContainer>
        <MiniCont>
            <BigText>200</BigText>
            <SmallText>Clients who have trusted us</SmallText>
        </MiniCont>

        <MiniCont>
            <BigText>98%</BigText>
            <SmallText>Successful Visa rate</SmallText>
        </MiniCont>

        <MiniCont>
            <BigText>60 hrs</BigText>
            <SmallText>Application approval time</SmallText>
        </MiniCont>
    </RateContainer>
  )
}

export default Rate