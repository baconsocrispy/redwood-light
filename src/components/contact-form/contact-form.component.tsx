// external imports
import { FormEvent, useRef, useState } from 'react';

// api
import { sendEmail } from '../../utils/emailjs-api';

// styles
import { 
  ContactFormContainer, 
  ContactFormHeader, 
  Form, 
  FormLabel ,
  FormInput,
  FormTextArea,
  FormButton,
  FormErrorMessage,
  FormSuccessMessage
} from './contact-form.styles';

// component
const ContactForm = () => {
  // state
  const [ sendStatus, setSendStatus ] = useState<number | null>(null);
  const form = useRef<HTMLFormElement>(null);

  // click handlers
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (form.current) {
      const response = await sendEmail(form.current)
      setSendStatus(response)
      form.current.reset();
    };
  } 

  return (
    <ContactFormContainer>
      <ContactFormHeader>Contact Us</ContactFormHeader>

      { sendStatus && (
        sendStatus === 200 ?
          <FormSuccessMessage>Email sent successfully</FormSuccessMessage> :
          <FormErrorMessage>Error sending email</FormErrorMessage>
        )
      }

      <Form ref={ form } className='contact-form' onSubmit={ handleSubmit }>
        <FormLabel>Name</FormLabel>
        <FormInput name='from_name' type='text' placeholder='Name' required />

        <FormLabel>Email</FormLabel>
        <FormInput name='to_email' type='email' placeholder='Email' required />

        <FormLabel>Message</FormLabel>
        <FormTextArea name='message' placeholder='Message' required />

        <FormButton type='submit'>Submit</FormButton>
      </Form>
    </ContactFormContainer>
  )
}

export default ContactForm