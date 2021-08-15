import React, { ReactElement, useRef, useState } from 'react';
import axios from 'axios';

import { useToasts } from 'react-toast-notifications';

function validateEmail(email: string) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export default function Contact(): ReactElement {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const [errors, setErrors] = useState<string[]>([]);

  const { addToast } = useToasts();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errorsArr = [];

    if (!emailRef.current.value) errorsArr.push('Email is required');

    if (!validateEmail(emailRef.current.value))
      errorsArr.push('Email is not valid');

    if (errorsArr.length === 0) {
      const { data: sent } = await axios.post('/api/mail', {
        name: nameRef.current.value,
        email: emailRef.current.value,
        message: messageRef.current.value,
      });

      if (sent) {
        addToast('Mail Sent Successfully', { appearance: 'success' });
        setErrors([]);
      } else {
        addToast('Error', { appearance: 'error' });
      }
    } else {
      setErrors(errorsArr);
    }
  };

  return (
    <div id="contact" className="contact">
      <h1>Contact Me</h1>
      <main>
        <form onSubmit={handleSubmit}>
          {errors.map((err: string) => (
            <div className="error">{err}</div>
          ))}
          <div className="input">
            <label htmlFor="name">Name:</label>
            <input ref={nameRef} type="text" id="name" />
          </div>
          <div className="input">
            <label htmlFor="email">Email:</label>
            <input ref={emailRef} type="text" id="email" />
          </div>
          <div className="input">
            <label htmlFor="message">Message:</label>
            <textarea ref={messageRef} id="message" />
          </div>
          <button>Submit</button>
        </form>
        <div className="right">
          <img
            // src="https://media.giphy.com/media/3oz8xSwIOv5FGhZFjq/giphy.gif"
            src="/mail.gif"
            alt=""
            // http://www.online-image-editor.com/
            // https://giphy.com/
          />
        </div>
      </main>
      <div className="social">
        <a href="https://github.com/akh-47">
          <i className="fab fa-github"></i>
          Github
        </a>
        <a href="https://www.linkedin.com/in/akhil-kala-b185131b0/">
          <i className="fab fa-linkedin"></i>
          Linkedin
        </a>
        <a href="https://twitter.com/akhilkala1">
          <i className="fab fa-twitter"></i>
          Twitter
        </a>
        <a>
          <i className="fab fa-dev"></i>
          Dev
        </a>
        <a>
          <i className="fas fa-envelope"></i>
          Mail
        </a>
        <a>
          <i className="fas fa-file-alt"></i>
          Resume
        </a>
      </div>
      <footer>Designed and Developed by Akhil Kala</footer>
    </div>
  );
}
