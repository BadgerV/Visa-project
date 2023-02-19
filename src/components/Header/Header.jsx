import { HeaderContainer, LogoImageAndLinkCont,SignInButton,SignUpButton, LogoImage,LinkContainer,LinkItems,ButtonContainer } from "./headerStyle";
import Logo from '../../asset/logo.png';

const Header = () => {
  return (
    <HeaderContainer>
        <LogoImageAndLinkCont>
            <LogoImage src = {Logo} alt = "Logo" />

            <LinkContainer>
                <LinkItems>Agent Information</LinkItems>
                <LinkItems>Country Requirements</LinkItems>
                <LinkItems>About Us</LinkItems>
                <LinkItems>Contact Us</LinkItems>
            </LinkContainer>
        </LogoImageAndLinkCont>

        <ButtonContainer>
            <SignInButton className="signIn">Sign In</SignInButton>
            <SignUpButton className="signUp">Sign Up</SignUpButton>
        </ButtonContainer>
    </HeaderContainer>
  )
}
 
export default Header