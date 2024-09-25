import React, { useState } from "react";
import './contact.css'
import './contact-form.css'

const FORM_ENDPOINT = "https://public.herotofu.com/v1/f7765320-90e9-11ed-a003-6f0b76086b1c";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <div>
        <h2>Thank you!</h2>
        <div>I'll be in touch soon.</div>
      </div>
    );
  }

  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
      className='mail-form'
    >

      <h2 className='contact-title'>Contact Form</h2>
      <input type="text" name="name" placeholder="Your Name" className='input' required />
      <input type="email" name="email" placeholder='Your Email' className='input' required />
      <textarea name="message" placeholder="Your Message..."  rows="4" className='input-textarea' required />
      <button type="submit" className='submit white-button'>Send message</button>
    </form>
  );
};

export default ContactForm;
