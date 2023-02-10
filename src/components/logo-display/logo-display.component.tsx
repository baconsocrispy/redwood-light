// external imports
import { FC } from "react";

// styles
import {
  LogoContainer,
  LogoDisplayContainer,
  Logo,
  LogoDisplayHeader,
} from "./logo-display.styles";

// types
import { Image } from "../../utils/images";
type LogoDisplayProps = {
  logos: Image[];
};

// component
const LogoDisplay: FC<LogoDisplayProps> = ({ logos }) => {
  return (
    <>
      <LogoDisplayHeader>featured clients</LogoDisplayHeader>
      <LogoDisplayContainer>
        {logos.map((logo, index) => (
          <LogoContainer key={index}>
            <Logo src={logo.src} alt={logo.alt} />
          </LogoContainer>
        ))}
      </LogoDisplayContainer>
    </>
  );
};

export default LogoDisplay;
