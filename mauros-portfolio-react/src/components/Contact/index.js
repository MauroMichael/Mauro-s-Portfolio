import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const form = useRef();
    const nav = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_j3wjlu9', form.current, 'QgarNshOFEk1LCngs')
          .then(() => {
              alert('Message succesfully sent!')
              return nav('/')
          }, () => {
              alert('Failed to send the message, please try again')
          });
      };

    return (
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                        idx={15}
                        />
                </h1>
                <p>
                I am interested in web stack developer opportunities. 
                If you have other request or question,
            don't hesitate to contact me using below form either.
                </p>
                <div className='contact-form'>
                    <form ref={form} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type='text' name='name' placeholder='Name' required />
                            </li>
                            <li className='half'>
                                <input
                                type='email'
                                name='email'
                                placeholder='Email'
                                required
                                />
                            </li>
                            <li>
                                <input
                                placeholder='Subject'
                                type='text'
                                name='subject'
                                required
                                />
                            </li>
                            <li>
                                <textarea
                                placeholder='Message'
                                name='message'
                                required
                                />
                            </li>
                            <li>
                                <input type='submit' className='flat-button' value='SEND' />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}
export default Contact