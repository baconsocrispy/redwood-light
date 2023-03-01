// external imports
import { FC } from "react";

// styles
import {
  TextSectionContainer,
  TextSectionHeader,
  TextSectionParagraph,
} from "./text-section.styles";

// types
type TextSectionProps = {
  headerText: string;
  bodyText: string;
}

// component
const TextSection: FC<TextSectionProps> = ({ headerText, bodyText }) => {
  return (
    <TextSectionContainer>
      <TextSectionHeader>{ headerText }</TextSectionHeader>
      <TextSectionParagraph>{ bodyText }</TextSectionParagraph>
    </TextSectionContainer>
  );
};

export default TextSection;