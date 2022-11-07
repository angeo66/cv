import React from 'react';
import NavBar from '../components/NavBar';
import { CopyToClipboard } from "react-copy-to-clipboard"
const Contact = () => {
    return (
        <div className='contact'>
            <NavBar />
            <div className='contactContent'>
                <div className='header'></div>
                <div className='contactBox'>
                    <h1>Contactez-moi</h1>
                    <ul>
                        <li>
                            <i className='fas fa-map-marker-alt'></i>
                            <span>Abomey-Calavi</span>
                        </li>
                        <li>
                            <i className='fas fa-mobile-alt'></i>
                            <CopyToClipboard text='51817213'>
                                <span className='clickInput' onClick={() => alert("Le numéro a été copié")}>+229 51817213</span>
                            </CopyToClipboard>
                        </li>
                        <li>
                            <i className='fa fa-envelope'></i>
                            <CopyToClipboard text='angejohnson95@gmail.com'>
                                <span className='clickInput' onClick={() => alert("E-mail copié")}>angejohnson95@gmail.com</span>
                            </CopyToClipboard>
                        </li>
                    </ul>
                </div>
                <div className='socialNetwork'>
                    <ul>
                        <a href='#https://www.google.com' target={''} rel="noopener noreferrer">
                            <h4>LinkedIn</h4>
                            <i className='fab fa-linkedin'></i>
                        </a>
                        <a href='#https://www.google.com' target={''} rel="noopener noreferrer">
                            <h4>GitHub</h4>
                            <i className='fab fa-github'></i>
                        </a>
                        <a href='#https://www.google.com' target={''} rel="noopener noreferrer">
                            <h4>Twitter</h4>
                            <i className='fab fa-twitter'></i>
                        </a>
                        <a href='#https://www.google.com' target={''} rel="noopener noreferrer">
                            <h4>CodePen</h4>
                            <i className='fab fa-codepen'></i>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;