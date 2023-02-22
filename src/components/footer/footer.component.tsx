// external imports
import { useLocation } from "react-router-dom";

// styles
import { Copyright, FooterContainer, FooterItem, FooterLink, FooterList } from "./footer.styles"

const Footer = () => {
  // navigation
  const location = useLocation();
  const indexPage = location.pathname === '/';

  return (
    <FooterContainer>
      <FooterList>
        <FooterItem>
          <FooterLink href={ indexPage ? "/#home" : '/' }>Home</FooterLink>
        </FooterItem>
        <FooterItem>
          <FooterLink href="/#services">Services</FooterLink>
        </FooterItem>
        <FooterItem>
          <FooterLink href="/#featured">Featured Projects</FooterLink>
        </FooterItem>
        <FooterItem>
          <FooterLink href="/Team">Team</FooterLink>
        </FooterItem>
        <FooterItem>
          <FooterLink href="/Awards">Awards</FooterLink>
        </FooterItem>
        <FooterItem>
          <FooterLink href="/Contact">Contact</FooterLink>
        </FooterItem>
      </FooterList>
      <Copyright>&copy;&nbsp;Copyright Redwood Light 2023.</Copyright>
    </FooterContainer>
  );
}

export default Footer