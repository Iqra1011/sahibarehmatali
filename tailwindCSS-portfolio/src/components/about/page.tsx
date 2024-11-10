import React from 'react'
// import "../../style/about.css" // You can remove this import if you are using only Tailwind CSS

const About = () => {
  return (
    <div>
      <section id="about-sec" className="about-section mt-[300px] sm:mt-[400px]">
        <h1 className="about-heading text-white text-4xl sm:text-5xl font-bold text-center mb-2">
          <span>AB</span>OUT
        </h1>
        <p className="about-description text-white text-xl sm:text-2xl text-center px-4 sm:px-32 font-serif">
          I am passionate about pursuing a career in <span>Cloud Computing and <br />Artificial intelligence (AI)</span> technologies. 
          I have a strong foundation in <span>HTML, CSS, JavaScript, Typescript, Tailwind CSS, NodeJs</span> and <span>NextJs</span> and 
          I&apos;m continuously expanding my knowledge and skills in these areas. I am Enthusiastic about 
          <span>Cloud Engineering & GenAI</span> exploring and mastering various cloud services and solutions.
        </p>
        <div className="about-info text-#7ed592 flex flex-col sm:flex-row sm:justify-around mt-4">
          <article className="mb-4 sm:mb-0">
            <h5><span className="font-bold">Full Name</span></h5>
            <p>SAHIBA REHMAT ALI</p>
          </article>
          <article className="mb-4 sm:mb-0">
            <h5><span className="font-bold">Email</span></h5>
            <p>sahibarehmatali@gmail.com</p>
          </article>
          <article className="mb-4 sm:mb-0">
            <h5><span className="font-bold">GitHub</span></h5>
            <p><a href="https://github.com/sahibarehmat-2005" target="_blank" className="text-#7ed592 hover:text-blue-600">https://github.com/sahibarehmat2005</a></p>
          </article>
          <article className="mb-4 sm:mb-0">
            <h5><span className="font-bold">Phone</span></h5>
            <p>0310-0090057</p>
          </article>
        </div>
      </section>
    </div>
  )
}

export default About;
