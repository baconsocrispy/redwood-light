// styles
import { Copyright, FooterAnchor, FooterContainer, FooterItem, FooterLink, FooterList } from "./footer.styles"

const Footer = () => {

  return (
    <FooterContainer>
      <FooterList>
        <FooterItem>
          <FooterLink to={ '/' }>Home</FooterLink>
        </FooterItem>
        <FooterItem>
          <FooterAnchor href="/#services">Services</FooterAnchor>
        </FooterItem>
        <FooterItem>
        <FooterAnchor href="/#featured">Featured Projects</FooterAnchor>
        </FooterItem>
        <FooterItem>
          <FooterLink to="/team">Team</FooterLink>
        </FooterItem>
        <FooterItem>
          <FooterLink to="/awards">Awards</FooterLink>
        </FooterItem>
        <FooterItem>
          <FooterLink to="/contact">Contact</FooterLink>
        </FooterItem>
      </FooterList>
      <Copyright>&copy;&nbsp;Copyright Redwood Light 2023.</Copyright>
    </FooterContainer>
  );
}

export default Footer