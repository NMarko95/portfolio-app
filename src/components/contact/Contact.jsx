import { useRef } from "react";
import "./contact.css";

const Contact = () => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  return (
    <div className="contact" id="contact">
      <div className="contact-wrapper">
        <h2 className="contact-title">Contact</h2>
        <h3 className="contact-question">
          Have a question or idea? Let's work together.
        </h3>
        <form className="contact-form">
          <div className="contact-full-name">
            <input
              placeholder="First name"
              type="text"
              className="first-name"
              ref={firstNameRef}
            />
            <input
              placeholder="Last name"
              type="text"
              className="first-name"
              ref={lastNameRef}
            />
          </div>
          <input
            ref={emailRef}
            placeholder="Email"
            className="contact-email"
          ></input>
          <textarea
            ref={messageRef}
            placeholder="Message"
            className="contact-message"
          />
        </form>
        <button className="contact-btn">Submit</button>
      </div>
    </div>
  );
};

export default Contact;
