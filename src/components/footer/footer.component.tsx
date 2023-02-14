// styles
import { Copyright, FooterContainer, FooterItem, FooterLink, FooterList } from "./footer.styles"

const Footer = () => {
  return (
    <FooterContainer>
      <FooterList>
        <FooterItem>
          <FooterLink href="/">Home</FooterLink>
        </FooterItem>
        <FooterItem>
          <FooterLink href="/#services">Services</FooterLink>
        </FooterItem>
        <FooterItem>
          <FooterLink href="/#featured">Featured Projects</FooterLink>
        </FooterItem>
        <FooterItem>
          <FooterLink href="/team">Team</FooterLink>
        </FooterItem>
        <FooterItem>
          <FooterLink href="/awards">Awards</FooterLink>
        </FooterItem>
        <FooterItem>
          <FooterLink href="/contact">Contact</FooterLink>
        </FooterItem>
        <FooterItem>
          <FooterLink href="sitemap">Sitemap</FooterLink>
        </FooterItem>
      </FooterList>
      <Copyright>&copy;&nbsp;Copyright Redwood Light 2023.</Copyright>
    </FooterContainer>
  );
}

export default Footer