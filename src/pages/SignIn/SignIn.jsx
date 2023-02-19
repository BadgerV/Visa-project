import Image from '../../asset/signUp1.jpg';
import Logo from '../../asset/smallLogo.png'
import { LeftImageSmall,LeftImage, SignInContainer, SignInLeft, SignInRight, SignInRightMini, SignInHEader, MiniText, SignInForm, SignInput, SignInButton, ExtraText } from './SignInStyle';

const SignIn = () => {
  return (
    <SignInContainer>
        <SignInLeft>
            <LeftImage src ={Image} alt = ""/>
            <LeftImageSmall src = {Logo} alt = "" />
        </SignInLeft>
        <SignInRight>
            <SignInRightMini>
                <SignInHEader>Welcome back!</SignInHEader>
                <MiniText>We're always excited to have you back</MiniText>

                <SignInForm>
                    <SignInput type = "text" placeholder='Email Address'/>
                    <SignInput type = "pasword" placeholder='Password'/>
                </SignInForm>

                <SignInButton>Sign In</SignInButton>

                <ExtraText>Don's have an account? Sign Up</ExtraText>
            </SignInRightMini>
        </SignInRight>
    </SignInContainer>
  )
}

export default SignIn