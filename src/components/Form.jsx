import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './cssform.css';
export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs
      .sendForm('service_8mbe5w6', 'template_rf5vzsa', form.current, {
        publicKey: 'EWFufSsY7gxtC-W65',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <h3>Get in touch</h3>
      <p>Let's chat about how I may help you</p>
      <label>Name</label>
      <input type="text" name="from_name" />
      <label>Email</label>
      <input type="email" name="to_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};