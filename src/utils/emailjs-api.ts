// external imports
import emailjs from '@emailjs/browser';

// environment variables
const serviceId = process.env.REACT_APP_SERVICE_ID as string;
const templateId = process.env.REACT_APP_TEMPLATE_ID as string;
const publicKey = process.env.REACT_APP_PUBLIC_KEY as string;

// EmailJS api call
export const sendEmail = async (form: HTMLFormElement) => {
  const response = await emailjs.sendForm(
    serviceId, templateId, form, publicKey
  )
  return response.status;
}