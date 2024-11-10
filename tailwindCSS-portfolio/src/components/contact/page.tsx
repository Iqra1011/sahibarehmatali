"use client";
import React from "react";

const Contact = () => {
  return (
    <div className="container px-4 py-10">
      <section id="Contact">
        <h1 className="heading text-black text-4xl sm:text-5xl font-bold text-center mt-24">
          <span>Get</span> In Touch
        </h1>
        <div className="form-wrapper flex justify-center mt-12">
          <form>
            <div className="form grid grid-cols-1 gap-4 max-w-sm sm:max-w-md md:max-w-lg p-5">
              <input
                type="text"
                placeholder="First Name"
                required
                className="input-field bg-transparent border-b border-gray-500 p-2 text-black focus:outline-none focus:border-blue-500"
              />
              <input
                type="text"
                placeholder="Last Name"
                required
                className="input-field bg-transparent border-b border-gray-500 p-2 text-black focus:outline-none focus:border-blue-500"
              />
              <input
                type="email"
                placeholder="Email"
                required
                className="input-field bg-transparent border-b border-gray-500 p-2 text-black focus:outline-none focus:border-blue-500"
              />
              <input
                type="number"
                placeholder="Phone Number"
                required
                className="input-field bg-transparent border-b border-gray-500 p-2 text-black focus:outline-none focus:border-blue-500"
              />
              <textarea
                name="message"
                placeholder="Message"
                className="textarea bg-transparent border border-gray-500 p-2 text-black focus:outline-none focus:border-blue-500 h-32"
              ></textarea>
              <button
                type="submit"
                className="button bg-blue-500 text-black py-3 rounded-lg cursor-pointer transition-all duration-300 hover:bg-white hover:text-blue-500"
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
      <p className="mt-12 text-center text-black">
        <span>&copy; SahibaRehmatAli. All rights reserved</span>
      </p>
    </div>
  );
};

export default Contact;
