import { FC } from "react";
import { FadeInHeaderContainer, FadeInH1 } from "./fade-in-header.styles";

type FadeInHeaderProps = {
  content: string;
};

const FadeInHeader: FC<FadeInHeaderProps> = ({ content }) => {
  return (
    <FadeInHeaderContainer>
      <FadeInH1>{content}</FadeInH1>
    </FadeInHeaderContainer>
  );
};

export default FadeInHeader;
