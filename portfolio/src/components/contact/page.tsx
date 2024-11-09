"use client";
import React from "react";
import "../../style/contact.css"

const Contact = () => {
  return (
    <div className="container">
      <section id="Contact">
        <h1 className="heading">
          <span>Get</span> In Touch
        </h1>
        <div className="form-wrapper">
          <form>
            <div className="form">
              <input
                type="text"
                placeholder="First Name"
                required
                className="input-field"
              />
              <input
                type="text"
                placeholder="Last Name"
                required
                className="input-field"
              />
              <input
                type="email"
                placeholder="Email"
                required
                className="input-field"
              />
              <input
                type="number"
                placeholder="Phone Number"
                required
                className="input-field"
              />
              <textarea
                name="message"
                placeholder="Message"
                className="textarea"
              ></textarea>
              <button
                type="submit"
                className="button"
                onClick={() => {
                  alert("Submitted");
                }}
              >
                Submit Now
              </button>
            </div>
          </form>
        </div>
      </section>
      <p><span>&copy;sahibaRehmatAli.All rights reserved</span></p>
    </div>
  );
};

export default Contact;