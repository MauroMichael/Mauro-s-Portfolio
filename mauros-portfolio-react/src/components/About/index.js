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
import {
  faDatabase,
  faMobileScreenButton,
  faServer,
  faSitemap,
  faVialCircleCheck,
  faWandMagicSparkles,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const primaryCubeFaces = [
    {
      className: 'face1',
      icon: faDatabase,
      color: '#4DB6AC',
      label: 'MongoDB',
    },
    {
      className: 'face2',
      icon: faServer,
      color: '#FF8A65',
      label: 'Express',
    },
    { className: 'face3', icon: faNodeJs, color: '#3C873A', label: 'Node.js' },
    {
      className: 'face4',
      icon: faVialCircleCheck,
      color: '#64B5F6',
      label: 'Testing',
    },
    { className: 'face5', icon: faSitemap, color: '#81C784', label: 'SQL' },
    {
      className: 'face6',
      icon: faWandMagicSparkles,
      color: '#FFD54F',
      label: 'REST',
    },
  ]

  const secondaryCubeFaces = [
    { className: 'face1', icon: faHtml5, color: '#F06529', label: 'HTML5' },
    { className: 'face2', icon: faJsSquare, color: '#EFD81D', label: 'JavaScript' },
    {
      className: 'face3',
      icon: faMobileScreenButton,
      color: '#BA68C8',
      label: 'TypeScript',
    },
    { className: 'face4', icon: faCss3, color: '#28A4D9', label: 'CSS3' },
    { className: 'face5', icon: faReact, color: '#5ED4F4', label: 'React' },
    { className: 'face6', icon: faGitAlt, color: '#EC4D28', label: 'Git' },
  ]

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
          web projects with predictability. Make them scalables and
          modularizables so being able program with a team.
        </p>
        <p>
          Have I learned how to program and do I know almost everything there is
          to know? Never!!. You should never lose your sense of astonishment and
          curiosity as a developer, and that's my motto. Explaining and teaching
          others gives me as much satisfaction as learning new things.
        </p>
        <p>
          Computer Science is my universe where I seek an answer to all unknowns
          with passion and enthusiasm. Having been an Account Manager of an IT company, 
          I was always fascinated seeing the requested projects, their development and 
          results. That’s where I discovered my true passion. 
        </p>
      </div>

      <div className="stage-cube-cont">
        <div className="cube-stack">
          <div className="cubespinner cube-primary">
            {primaryCubeFaces.map((face) => (
              <div key={face.className} className={face.className}>
                <FontAwesomeIcon icon={face.icon} color={face.color} />
                <span>{face.label}</span>
              </div>
            ))}
          </div>

          <div className="cubespinner cubespinner-secondary">
            {secondaryCubeFaces.map((face) => (
              <div key={face.className} className={face.className}>
                <FontAwesomeIcon icon={face.icon} color={face.color} />
                <span>{face.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
