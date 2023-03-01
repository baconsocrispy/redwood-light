import styled from "styled-components";
import { 
  FontSizes, 
  Fonts, 
  Colors, 
  Breakpoints 
} from "../../utils/theme.styles";

export const ContactFormContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 5rem 0;

  @media (min-width: ${ Breakpoints.small }) {
    padding: 10rem;
  }
`

export const ContactFormHeader = styled.h2`
  text-align: center;
  text-transform: uppercase;
  color: ${ Colors.black };
  font-family: ${ Fonts.secondary };
  font-size: ${ FontSizes.sectionHeader };
  margin-bottom: 2rem;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;

  @media (min-width: ${ Breakpoints.small }) {
    width: 30rem;
  }
`

export const FormLabel = styled.label`
  font-size: ${ FontSizes.copy };
  font-family: ${ Fonts.primary };
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
  background-color: ${ Colors.redwoodRed };
  border: none;
  color: ${ Colors.white };
  align-self: center;
  padding: 1rem;
  width: auto;
  text-transform: uppercase;
  border-radius: 3px;

  &:hover {
    background-color: ${ Colors.black };
  }
`

export const FormErrorMessage = styled.h3`
  color: ${ Colors.redwoodRed };
  text-transform: uppercase;
`

export const FormSuccessMessage = styled.h3`
  color: ${ Colors.green };
  text-transform: uppercase;
`