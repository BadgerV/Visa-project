import { ExtraText, LeftImage, LeftImageSmall, MiniText,SecondMiniText, SignInForm, SignInput, SignUpButton, SignUpContainer, SignUpHEader, SignUpLeft, SignUpRight, SignUpRightMini } from "./SignUpStyle"
import Image from '../../asset/signUp1.jpg';
import Logo from '../../asset/smallLogo.png'


const SignUp = () => {
  return (
    <SignUpContainer>
        <SignUpLeft>
            <LeftImage src = {Image} alt = "" />
            <LeftImageSmall src = {Logo} alt = ""/>
        </SignUpLeft>
        <SignUpRight>
            <SignUpRightMini>
                <SignUpHEader>Welcome</SignUpHEader>
                <MiniText>This will only take a minute!</MiniText>
                <SecondMiniText>Sign up as an agent instead? Sign up as agent</SecondMiniText>

                <SignInForm>
                    
                        <SignInput   type = "text" placeholder="First Name" /> 
                        <SignInput type = "text" placeholder="Last Name" /> 
                        <SignInput type = "text" placeholder="Email Address" /> 
                        <SignInput type = "text" /> 
                        <SignInput type = "password" placeholder="Password" /> 
                        <SignInput type = "text" placeholder="Confirm Password" /> 
                    
                </SignInForm>

                <SignUpButton>Sign Up</SignUpButton>
                <ExtraText>Already have an account? Sign Up</ExtraText>
            </SignUpRightMini>

        </SignUpRight>
    </SignUpContainer>
  )
}

export default SignUp