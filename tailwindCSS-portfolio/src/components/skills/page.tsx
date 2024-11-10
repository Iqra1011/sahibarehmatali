"use client";
import React from "react";

const Skills = () => {
  return (
    <div>
      <section id="skills" className="skills-section mt-36">
        <h1 className="skills-heading text-white text-4xl text-center">
          <span className="text-#7ed592">M</span>y Skill<span className="text-#7ed592">s</span>
        </h1>
        <div className="skills-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
          <article className="skill-card bg-[#0f172a] text-[#7ed592] p-4 text-center text-xl font-semibold rounded-lg w-44 transition-all duration-300 hover:border-b-4 hover:border-[#3b82f6]">
            <h4>HTML</h4>
          </article>
          <article className="skill-card bg-[#0f172a] text-[#7ed592] p-4 text-center text-xl font-semibold rounded-lg w-44 transition-all duration-300 hover:border-b-4 hover:border-[#3b82f6]">
            <h4>CSS</h4>
          </article>
          <article className="skill-card bg-[#0f172a] text-[#7ed592] p-4 text-center text-xl font-semibold rounded-lg w-44 transition-all duration-300 hover:border-b-4 hover:border-[#3b82f6]">
            <h4>JAVASCRIPT</h4>
          </article>
          <article className="skill-card bg-[#0f172a] text-[#7ed592] p-4 text-center text-xl font-semibold rounded-lg w-44 transition-all duration-300 hover:border-b-4 hover:border-[#3b82f6]">
            <h4>TYPESCRIPT</h4>
          </article>
          <article className="skill-card bg-[#0f172a] text-[#7ed592] p-4 text-center text-xl font-semibold rounded-lg w-44 transition-all duration-300 hover:border-b-4 hover:border-[#3b82f6]">
            <h4>NEXTJS</h4>
          </article>
          <article className="skill-card bg-[#0f172a] text-[#7ed592] p-4 text-center text-xl font-semibold rounded-lg w-44 transition-all duration-300 hover:border-b-4 hover:border-[#3b82f6]">
            <h4>TAILWIND CSS</h4>
          </article>
          <article className="skill-card bg-[#0f172a] text-[#7ed592] p-4 text-center text-xl font-semibold rounded-lg w-44 transition-all duration-300 hover:border-b-4 hover:border-[#3b82f6]">
            <h4>NODEJS</h4>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Skills;
