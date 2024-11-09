import React from 'react'
import "../../style/skills.css"

const Skills = () => {
  return (
    <div>
      <section id="skills" className="skills-section">
        <h1 className="skills-heading"><span>M</span>y Skill<span>s</span></h1>
        <div className="skills-grid">
            <article className="skill-card">
               <h4>HTML</h4>
            </article>
            <article className="skill-card">
               <h4>CSS</h4>
            </article>
            <article className="skill-card">
               <h4>JAVASCRIPT</h4>
            </article>
            <article className="skill-card">
               <h4>TYPESCRIPT</h4>
            </article>
            <article className="skill-card">
               <h4>NEXTJS</h4>
            </article>
            <article className="skill-card">
               <h4>TAILWIND CSS</h4>
            </article>
            <article className="skill-card">
               <h4>NODEJS</h4>
            </article>
        </div>
      </section>
    </div>
  )
}

export default Skills