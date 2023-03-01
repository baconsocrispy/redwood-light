import styled from "styled-components";
import ThemeStyles from "../../utils/theme.styles";

const { fontSizes, fonts, colors, breakpoints } = ThemeStyles;
// test
export const ContactFormContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 5rem 0;

  @media (min-width: ${ breakpoints.small }) {
    padding: 10rem;
  }
`

export const ContactFormHeader = styled.h2`
  text-align: center;
  text-transform: uppercase;
  color: ${ colors.black };
  font-family: ${ fonts.secondary };
  font-size: ${ fontSizes.sectionHeader };
  margin-bottom: 2rem;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;

  @media (min-width: ${ breakpoints.small }) {
    width: 30rem;
  }
`

export const FormLabel = styled.label`
  font-size: ${ fontSizes.copy };
  font-family: ${ fonts.primary };
`

export const FormInput = styled.input`
  margin-bottom: 2rem;
`

export const FormTextArea = styled.textarea`
  height: 10rem;
  margin-bottom: 2rem;
`

export const FormButton = styled.button`
  cursor: pointer;
  background-color: ${ colors.redwoodRed };
  border: none;
  color: ${ colors.white };
  align-self: center;
  padding: 1rem;
  width: auto;
  text-transform: uppercase;
  border-radius: 3px;

  &:hover {
    background-color: ${ colors.black };
  }
`

export const FormErrorMessage = styled.h3`
  color: ${ colors.redwoodRed };
  text-transform: uppercase;
`

export const FormSuccessMessage = styled.h3`
  color: green;
  text-transform: uppercase;
`