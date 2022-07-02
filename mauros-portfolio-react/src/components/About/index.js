import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useState, useEffect } from 'react'
import {
  faGitAlt,
  faNodeJs,
  faJsSquare,
  faHtml5,
  faCss3,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
        <p>
          I specialize in Full Stack Development. I have the ability to develop
          web projects with the predictability that they are scalable and
          modularizable so that I can program as a team.
        </p>
        <p>
          Have I learned how to program and do I know everything there is to
          know? Never!!. You should never lose your sense of wonder and
          curiosity as a developer, and that's my motto. Explaining and teaching
          others gives me as much satisfaction as learning new things.
        </p>
        <p>
          Computer Science is my universe where I seek an answer to all unknowns
          with passion and enthusiasm. Having been an Account Manager of an IT
          company, I was always fascinated when requesting projects and seeing
          their development and results.
        </p>
      </div>

      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faNodeJs} color="#3C873A" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
