import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>Made by Mikhail Romanov</p>
      <div>
        <a href="#">
          <i className="fa fa-github"></i>
          {' '}
          GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;
