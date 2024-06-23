import React from 'react'
import './about.css'
import myImage from '../../assets/img1.jpg'
import {GiGraduateCap} from 'react-icons/gi'
import {BsBookmarkStar} from 'react-icons/bs'
import {TfiWorld} from 'react-icons/tfi'

const About = () => {
  return (
    <section id='about'>
      
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

          <div className="about__me">
            <div className="about__me-image">
                <img src={myImage} alt="Me" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">

              <article className='about__card'>
                  <GiGraduateCap className='about__icon'/>
                  <h5>Masters in University of Cincinnati</h5>
                  <small> <br /><i>Computer Engineering.</i></small>
              </article>

              <article className='about__card'>
                  <BsBookmarkStar className='about__icon'/>
                  <h5>Current GPA</h5>
                  <small>3.89</small>
              </article>

              <article className='about__card'>
                  <TfiWorld className='about__icon'/>
                  <h5>Domains</h5>
                  <small>
                    <ul>
                      <li>Web</li>
                      <li>Mobile Applications</li>
                      <li>Cloud Computing</li>
                      <li>Android Development</li>
                      <li>Full stack Development</li>
                    </ul>
                  </small>
              </article>

              

            </div>
            <p>
            Varsha Lingam is currently pursuing a Master of Science in Computer Engineering at the University of Cincinnati, aiming for completion by June 2025. With a stellar CGPA of 3.8/4.0, she continues to build on her academic excellence following her Bachelor of Technology in Computer Engineering from VNR Vignana Jyothi Institute of Technology, where she graduated with an impressive CGPA of 9.56/10.0 in May 2022. Varsha's technical acumen spans programming languages such as Python, Java, C++, SQL, and C, alongside proficiency in Node.js, MongoDB, Android Studio, and Firebase for web and mobile development. She excels in data structures, software integration, and IT equipment configuration, bolstered by hands-on experience with Git, GitHub, VS Code, Eclipse IDE, and Spring Boot. Her dedication to advancing technology is evident through roles like Research Assistant at the University of Cincinnati's BioMEMS Lab, where she enhances cardiac diagnostic devices and integrates smartphone capabilities. Varsha's academic achievements, coupled with her practical skills and proactive approach, position her as a promising candidate poised to make significant contributions in the field of computer engineering.
                    
            </p>

          </div>
      </div>
    </section>
  )
}

export default About