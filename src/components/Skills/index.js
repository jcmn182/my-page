import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = ['S', 'k', 'i', 'l', 'l', 's']
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
          <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
          </h1>
          <p>
            I'm Full-stack developer with experience in the following technologies
            <span className="tech-tag"> HTML, </span>  <span className="tech-tag"> CSS, </span>
            <span className="tech-tag"> JAVASCRIPT, </span> <span className="tech-tag"> REACT, </span>
            <span className="tech-tag"> REDUX, </span> <span className="tech-tag"> REDUX TOOL KIT, </span>
            <span className="tech-tag"> TAILWIND, </span> <span className="tech-tag"> BOOTSTRAP, </span>
            <span className="tech-tag"> STYLED COMPONENTS, </span> <span className="tech-tag"> NODE, </span>
            <span className="tech-tag"> EXPRESS, </span> <span className="tech-tag"> POSTGRESQL, </span>
            <span className="tech-tag"> SEQUELIZE </span>
          </p>
          <p align="LEFT">
          I’m not a designer but I have a good sense of aesthetics, and
            experience in responsive, mobile-first web design. I put special
            effort into optimizing my code and providing the best user
            experience. I would love to give you any kind of support also after
            the project's completion. I guarantee a commitment in any work 
          </p>
          <p>
            You can checkout my cv on this  
            <a className="cv-link"
            href="https://drive.google.com/file/d/1Hwjo4v5JGahrptpmmUNxCZfV2XtFncro/view?usp=sharing"
            target="_blank"
            rel="noreferrer">{" "}link!</a> 
          </p>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
