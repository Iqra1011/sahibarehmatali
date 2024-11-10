"use client";
import React from "react";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import profilepic from "../../../public/profilepic.jpg";

const Hero = () => {
  return (
    <div>
      <section className="hero-section flex flex-col justify-center items-center min-h-screen mb-10 mt-5">
        <div className="hero-text-container text-center sm:text-left mt-36 sm:mt-0 sm:ml-10">
          <h1 className="hello-text text-white text-2xl sm:text-3xl pt-5">Hello,</h1>
          <h1 className="name-text text-white text-3xl sm:text-5xl font-bold">
            I&apos;m Sahiba <span className="text-#7ed592">Rehmat Ali</span>
          </h1>
          <div className="typewriter-container text-white font-bold text-xl sm:text-2xl">
            <Typewriter
              options={{
                strings: ["FrontEnd Web Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>

          <p className="description text-white mt-4 text-lg sm:text-xl max-w-md sm:max-w-lg mx-auto">
            I am committed to mastering the world&apos;s New Technologies, Cloud Computing, and Artificial Intelligence.
            My goal is to innovate and contribute to the future of technology...
          </p>

          <div className="buttons-container flex flex-col sm:flex-row items-center sm:justify-center gap-5 mt-8">
            {/* <a href="./myCv.pdf" target='_blank' className="download-cv-btn">
              Download CV
            </a> */}
            <a
              href="https://www.linkedin.com/in/sahiba-rehmat-ali-khan-22639931b/"
              target="_blank"
              className="linkedin-btn px-6 py-3 border-2 border-white rounded-lg font-semibold text-white transition-all duration-300 hover:bg-white hover:text-black"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="w-160 h-120 ml-auto mt-0">
          <Image
            src={profilepic}
            alt="My Profile Picture"
            width={300}
            height={300}
            className="profile-pic rounded-full shadow-lg"
          />
        </div>
      </section>
    </div>
  );
};

export default Hero;
