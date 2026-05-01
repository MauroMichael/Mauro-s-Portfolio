import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import MaurosResume from '../../assets/docs/Resume.pdf'
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  // const [loader, setLoader] = useState(false);
  const nameArray = ['a', 'u', 'r', 'o']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    // setTimeout(() => {
    //   setLoader(true)
    // }, 3000)
  }, [])

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <img src={LogoTitle} alt="developer" />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={22}
          />
        </h1>
        <h2>Full Stack Developer / JavaScript</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
          <a className="flat-button"
            href={MaurosResume}
            target="_blank"
            rel="noopener noreferrer"
            download="MaurosResume.pdf"
          >
            DOWNLOAD RESUME
          </a>
      </div>
  
    </div>
  )
}

export default Home
