import React from 'react'
import './about.css'
import img from '../../Assets/Mohammed.jpg'
import { VscCloudDownload } from 'react-icons/vsc'
// import cvv from '../../Assets/FRONTEND DEVELOPER.pdf'

const About = () => {
  return (
    <section id='about' className='about section container'>
      <div class="sectionTitle">
        <span class="titleNumber">01 . </span>
        <h5 class="titleText">About Me <div class="underline"><span></span></div></h5>
      </div>

      <div className="sectionContent grid">
        <div className="textSection">
          <h4>
            I am a success-driven and determined front-end developer, my expertise includes HTML, CSS, JavaScript, and React. I focus on creating accessible, component-based web pages and systems, thriving in dynamic work environments while adapting seamlessly to changing team dynamics and consistently delivering quality results.
            <br />
            Passionate about continuous learning, I am committed to mastering new technologies and evolving as a developer each day. My determination and results-oriented mindset drive me to excel in every project."


          </h4>

          <div className="aboutBtn">
            <a className='flex' href="Dimas UML.docx" download="Dimas UML.docx" >Download CV <VscCloudDownload /></a>
          </div>
        </div>
        <div className="aboutImgDiv">
          <img className='aboutImg' src={img} alt="Israel Image" />
        </div>
      </div>
    </section>
  )
}

export default About