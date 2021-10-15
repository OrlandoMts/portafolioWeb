import React from 'react';
// import { BrowserRouter as Router, Link } from 'react-router-dom';
import instagram from '../assets/icons/instagram-brands.svg';
import github from '../assets/icons/github-brands.svg';
import linkedin from '../assets/icons/linkedin-brands.svg';
import '../styles/SocialMedia.css';

function SocialMedia() {
    return (
        <div className="container__social">
            
                <a href="https://www.instagram.com/orlando.monts/" target="_blank">
                    <img src={instagram} className="instagram__icon" />
                </a>
            
            
                <a href="https://github.com/OrlandoMts" target="_blank">
                    <img src={github} className="github__icon" />
                </a>
            
            
                <a href="https://www.linkedin.com/in/orlando-montes-6914331b5/" target="_blank">
                    <img src={linkedin} className="linkedin__icon" />
                </a>
             
        </div>
    )
}

export { SocialMedia }
