import React, {useState, useEffect} from "react";
import linkedIn from '../../assets/images/linkedin-logo.png'

function Footer() {
  return (
    <footer className="flex-row">
      <div className="footer-icons">
        <a href="https://www.linkedin.com/in/rileyfoust/" className="icon">
          <img src={linkedIn}/>
        </a>
        <p className="mx-1 icon">Foot</p>
        <p className="mx-1 icon">Foot</p>
      </div>
    </footer>
  );
}

export default Footer;