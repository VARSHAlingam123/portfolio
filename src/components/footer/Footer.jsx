import React from 'react';
import './footer.css';
import { BsLinkedin } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <a href="#home" className='footer__logo'>VARSHA LINGAM</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/varshalingam123/">
          <BsLinkedin />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; .</small>
      </div>
    </footer>
  );
}

export default Footer;
